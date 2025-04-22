const mongoose = require('mongoose');

const impactMetricsSchema = new mongoose.Schema({
  period: {
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  economicImpact: {
    totalSales: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    artisanEarnings: {
      amount: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    averageOrderValue: Number,
    ordersCompleted: Number
  },
  socialImpact: {
    artisansSupported: Number,
    communitiesImpacted: Number,
    jobsCreated: Number,
    skillsTrainingHours: Number
  },
  culturalPreservation: {
    craftsPreserved: [String],
    techniquesDocumented: Number,
    storiesCollected: Number,
    heritageWorkshopsHeld: Number
  },
  environmentalImpact: {
    sustainableMaterialsUsed: Number,
    wasteReduction: Number,
    carbonFootprint: Number
  },
  marketplaceMetrics: {
    activeArtisans: Number,
    newArtisans: Number,
    productCategories: Number,
    customerSatisfaction: Number
  },
  regionalBreakdown: [{
    region: String,
    artisanCount: Number,
    salesVolume: Number,
    topCrafts: [String]
  }]
}, {
  timestamps: true
});

// Create indexes for frequently queried fields
impactMetricsSchema.index({ 'period.startDate': 1, 'period.endDate': 1 });

module.exports = mongoose.model('ImpactMetrics', impactMetricsSchema);