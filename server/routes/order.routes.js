const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/clerkAuth');
const Order = require('../models/order.model');

// Get authenticated user's orders
router.get('/', requireAuth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate('items.product', 'name images price')
      .sort('-createdAt')
      .select('-__v');

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single order
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.product', 'name images price artisan')
      .select('-__v');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check if the order belongs to the authenticated user
    if (order.userId !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to view this order' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create order (checkout session)
router.post('/', requireAuth, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    // Calculate total amount
    let totalAmount = 0;
    for (const item of items) {
      totalAmount += item.price * item.quantity;
    }

    const order = new Order({
      userId: req.user.id,
      items,
      shippingAddress,
      totalAmount,
      paymentInfo: {
        method: 'stripe', // Assuming Stripe integration
        status: 'pending'
      }
    });

    const savedOrder = await order.save();

    // Here you would typically create a Stripe checkout session
    // and return the session URL to the client

    res.status(201).json({
      order: savedOrder,
      // checkoutUrl: stripeSession.url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update order status (webhook endpoint for payment processing)
router.post('/webhook', async (req, res) => {
  try {
    const { orderId, status, transactionId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = status;
    order.paymentInfo.status = 'completed';
    order.paymentInfo.transactionId = transactionId;

    await order.save();

    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;