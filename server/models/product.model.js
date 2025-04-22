const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  artisan: {
    type: String,
    ref: 'Artisan',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxLength: [2000, 'Description cannot be more than 2000 characters']
  },
  category: {
    type: String,
    required: [true, 'Product category is required']
  },
  craft: {
    type: String,
    required: [true, 'Craft type is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  currency: {
    type: String,
    required: true,
    default: 'USD'
  },
  images: [{
    type: String,
    required: [true, 'At least one product image is required']
  }],
  attributes: {
    materials: [String],
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: {
        type: String,
        default: 'cm'
      }
    },
    weight: {
      value: Number,
      unit: {
        type: String,
        default: 'g'
      }
    },
    customization: {
      available: {
        type: Boolean,
        default: false
      },
      options: [String]
    }
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be negative']
  },
  status: {
    type: String,
    enum: ['available', 'out_of_stock', 'discontinued'],
    default: 'available'
  },
  heritage: {
    story: String,
    technique: String,
    culturalSignificance: String
  },
  shipping: {
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number
    },
    internationalShipping: {
      type: Boolean,
      default: true
    },
    estimatedDays: {
      type: Number,
      required: true
    }
  },
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
  reviews: [{
    userId: String,
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
productSchema.index({ artisan: 1 });
productSchema.index({ category: 1 });
productSchema.index({ craft: 1 });
productSchema.index({ price: 1 });
productSchema.index({ 'rating.average': -1 });

module.exports = mongoose.model('Product', productSchema);