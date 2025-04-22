const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/clerkAuth');
const Message = require('../models/message.model');

// Get user's messages/conversations
router.get('/', requireAuth, async (req, res) => {
  try {
    const { userId } = req.query;
    const query = {
      $or: [
        { sender: req.user.id },
        { recipient: req.user.id }
      ]
    };

    if (userId) {
      query.conversation = [
        `${req.user.id}_${userId}`,
        `${userId}_${req.user.id}`
      ];
    }

    const messages = await Message.find(query)
      .sort('createdAt')
      .select('-__v');

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Send a message
router.post('/', requireAuth, async (req, res) => {
  try {
    const { recipient, content, metadata } = req.body;

    // Create conversation ID by combining sender and recipient IDs
    const conversationId = [req.user.id, recipient].sort().join('_');

    const message = new Message({
      sender: req.user.id,
      recipient,
      conversation: conversationId,
      content,
      metadata
    });

    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark message as read
router.put('/:id/read', requireAuth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    if (message.recipient !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to update this message' });
    }

    message.status = 'read';
    await message.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get unread message count
router.get('/unread/count', requireAuth, async (req, res) => {
  try {
    const count = await Message.countDocuments({
      recipient: req.user.id,
      status: { $ne: 'read' }
    });

    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get conversations list
router.get('/conversations', requireAuth, async (req, res) => {
  try {
    const messages = await Message.aggregate([
      {
        $match: {
          $or: [
            { sender: req.user.id },
            { recipient: req.user.id }
          ]
        }
      },
      {
        $sort: { createdAt: -1 }
      },
      {
        $group: {
          _id: '$conversation',
          lastMessage: { $first: '$$ROOT' },
          unreadCount: {
            $sum: {
              $cond: [
                { 
                  $and: [
                    { $eq: ['$recipient', req.user.id] },
                    { $ne: ['$status', 'read'] }
                  ]
                },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;