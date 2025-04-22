const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  recipient: {
    type: String,
    required: true
  },
  conversation: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: [true, 'Message content is required'],
    maxLength: [2000, 'Message cannot be more than 2000 characters']
  },
  attachments: [{
    type: String,
    url: String,
    fileType: String
  }],
  status: {
    type: String,
    enum: ['sent', 'delivered', 'read'],
    default: 'sent'
  },
  metadata: {
    isArtisanMessage: Boolean,
    regarding: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'metadata.regardingModel'
    },
    regardingModel: {
      type: String,
      enum: ['Product', 'Order', null]
    }
  }
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
messageSchema.index({ sender: 1, recipient: 1 });
messageSchema.index({ conversation: 1 });
messageSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Message', messageSchema);