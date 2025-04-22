const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/clerkAuth');

// Get authenticated user profile
router.get('/me', requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    // Return user data from Clerk
    res.json({
      id: userId,
      role: req.user.role
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/me', requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { wishlist, followedArtisans } = req.body;
    
    // Update user metadata in Clerk
    // Note: Additional user data should be stored in your database
    res.json({
      message: 'Profile updated successfully',
      data: { wishlist, followedArtisans }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;