const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    ref: 'Artisan',
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
    required: [true, 'Content is required']
  },
  summary: {
    type: String,
    required: [true, 'Summary is required'],
    maxLength: [500, 'Summary cannot be more than 500 characters']
  },
  category: {
    type: String,
    required: true,
    enum: ['craft_techniques', 'artisan_stories', 'cultural_heritage', 'sustainability', 'other']
  },
  tags: [{
    type: String,
    trim: true
  }],
  featuredImage: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    userId: String,
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  metadata: {
    readTime: Number,
    views: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
blogSchema.index({ author: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ status: 1 });
blogSchema.index({ publishedAt: -1 });
blogSchema.index({ tags: 1 });

module.exports = mongoose.model('Blog', blogSchema);