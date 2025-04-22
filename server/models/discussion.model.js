const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxLength: [200, 'Title cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    maxLength: [5000, 'Content cannot be more than 5000 characters']
  },
  category: {
    type: String,
    required: true,
    enum: ['craft_techniques', 'cultural_heritage', 'marketplace', 'community', 'support', 'other']
  },
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['open', 'closed', 'archived'],
    default: 'open'
  },
  replies: [{
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
      maxLength: [2000, 'Reply cannot be more than 2000 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date,
    likes: {
      type: Number,
      default: 0
    },
    isAcceptedAnswer: {
      type: Boolean,
      default: false
    }
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  metadata: {
    isArtisanQuestion: Boolean,
    relatedCraft: String,
    region: String
  }
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
discussionSchema.index({ author: 1 });
discussionSchema.index({ category: 1 });
discussionSchema.index({ status: 1 });
discussionSchema.index({ createdAt: -1 });
discussionSchema.index({ tags: 1 });

module.exports = mongoose.model('Discussion', discussionSchema);