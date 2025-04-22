const express = require('express');
const router = express.Router();
const { requireAuth, requireArtisan } = require('../middlewares/clerkAuth');
const Artisan = require('../models/artisan.model');

// Get all artisans with filters
router.get('/', async (req, res) => {
  try {
    const { craft, region, sort = '-rating.average' } = req.query;
    const query = {};

    if (craft) query.craft = craft;
    if (region) query['location.region'] = region;

    const artisans = await Artisan.find(query)
      .sort(sort)
      .select('-__v');

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single artisan
router.get('/:id', async (req, res) => {
  try {
    const artisan = await Artisan.findOne({ userId: req.params.id })
      .select('-__v');

    if (!artisan) {
      return res.status(404).json({ error: 'Artisan not found' });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create artisan profile
router.post('/', requireAuth, async (req, res) => {
  try {
    const artisanExists = await Artisan.findOne({ userId: req.user.id });
    if (artisanExists) {
      return res.status(400).json({ error: 'Artisan profile already exists' });
    }

    const artisan = new Artisan({
      userId: req.user.id,
      ...req.body
    });

    const savedArtisan = await artisan.save();
    res.status(201).json(savedArtisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update artisan profile
router.put('/:id', requireAuth, requireArtisan, async (req, res) => {
  try {
    const artisan = await Artisan.findOne({ userId: req.params.id });
    
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan not found' });
    }

    if (artisan.userId !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to update this profile' });
    }

    const updatedArtisan = await Artisan.findOneAndUpdate(
      { userId: req.params.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json(updatedArtisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete artisan profile
router.delete('/:id', requireAuth, requireArtisan, async (req, res) => {
  try {
    const artisan = await Artisan.findOne({ userId: req.params.id });
    
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan not found' });
    }

    if (artisan.userId !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to delete this profile' });
    }

    await Artisan.findOneAndDelete({ userId: req.params.id });
    res.json({ message: 'Artisan profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;