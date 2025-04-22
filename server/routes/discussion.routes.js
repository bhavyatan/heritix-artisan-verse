const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/clerkAuth');
const Discussion = require('../models/discussion.model');

// Get all discussions with pagination and search
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      tag, 
      status = 'open', 
      sort = '-createdAt',
      page = 1,
      limit = 10,
      search
    } = req.query;

    const query = { status };
    
    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    
    const [discussions, total] = await Promise.all([
      Discussion.find(query)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))
        .populate('author', 'name')
        .select('-replies -__v'),
      Discussion.countDocuments(query)
    ]);

    res.json({
      discussions,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single discussion
router.get('/:id', async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id)
      .select('-__v');

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    // Increment view count
    discussion.views += 1;
    await discussion.save();

    res.json(discussion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create discussion with validation
router.post('/', requireAuth, async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;

    // Basic validation
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    if (title.length < 5 || title.length > 200) {
      return res.status(400).json({ error: 'Title must be between 5 and 200 characters' });
    }

    if (content.length < 20) {
      return res.status(400).json({ error: 'Content must be at least 20 characters long' });
    }

    const discussion = new Discussion({
      author: req.user.id,
      title,
      content,
      category,
      tags,
      metadata: {
        lastActivity: new Date(),
        engagementScore: 0
      }
    });

    const savedDiscussion = await discussion.save();
    res.status(201).json(savedDiscussion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add reply to discussion with engagement tracking
router.post('/:id/reply', requireAuth, async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content || content.length < 10) {
      return res.status(400).json({ error: 'Reply must be at least 10 characters long' });
    }

    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    discussion.replies.push({
      author: req.user.id,
      content,
      createdAt: new Date()
    });

    // Update engagement metrics
    discussion.metadata = discussion.metadata || {};
    discussion.metadata.lastActivity = new Date();
    discussion.metadata.replyCount = discussion.replies.length;
    discussion.metadata.engagementScore = (
      discussion.likes * 2 + 
      discussion.views * 0.1 + 
      discussion.replies.length * 3
    );

    await discussion.save();
    res.status(201).json(discussion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark reply as accepted answer
router.put('/:id/replies/:replyId/accept', requireAuth, async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    if (discussion.author !== req.user.id) {
      return res.status(403).json({ error: 'Only the discussion author can accept answers' });
    }

    const reply = discussion.replies.id(req.params.replyId);
    if (!reply) {
      return res.status(404).json({ error: 'Reply not found' });
    }

    // Reset all other replies
    discussion.replies.forEach(r => r.isAcceptedAnswer = false);
    reply.isAcceptedAnswer = true;

    await discussion.save();
    res.json(discussion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like discussion with user tracking
router.post('/:id/like', requireAuth, async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    // Check if user has already liked
    if (discussion.likedBy && discussion.likedBy.includes(req.user.id)) {
      return res.status(400).json({ error: 'You have already liked this discussion' });
    }

    // Add user to likedBy array and increment likes
    discussion.likedBy = discussion.likedBy || [];
    discussion.likedBy.push(req.user.id);
    discussion.likes = discussion.likedBy.length;
    
    await discussion.save();

    res.json({ 
      likes: discussion.likes,
      isLiked: true
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Close discussion
router.put('/:id/close', requireAuth, async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    if (discussion.author !== req.user.id) {
      return res.status(403).json({ error: 'Only the discussion author can close the discussion' });
    }

    discussion.status = 'closed';
    await discussion.save();

    res.json(discussion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;