const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  craft: {
    type: String,
    required: [true, 'Craft type is required']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    maxLength: [1000, 'Bio cannot be more than 1000 characters']
  },
  location: {
    country: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  contactInfo: {
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    phone: String,
    socialMedia: {
      instagram: String,
      facebook: String,
      twitter: String
    }
  },
  profileImage: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  certifications: [{
    name: String,
    issuer: String,
    year: Number
  }],
  story: {
    type: String,
    maxLength: [2000, 'Story cannot be more than 2000 characters']
  },
  heritage: {
    tradition: String,
    yearsOfExperience: Number
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  }
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
artisanSchema.index({ craft: 1 });
artisanSchema.index({ 'location.country': 1, 'location.region': 1 });
artisanSchema.index({ 'rating.average': -1 });

module.exports = mongoose.model('Artisan', artisanSchema);