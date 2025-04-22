const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const { attachUser } = require('./middlewares/clerkAuth');

// Initialize express app
const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach user to request if authenticated
app.use(attachUser);

// API Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/artisans', require('./routes/artisan.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/blogs', require('./routes/blog.routes'));
app.use('/api/messages', require('./routes/message.routes'));
app.use('/api/discussions', require('./routes/discussion.routes'));
app.use('/api/impact', require('./routes/impact.routes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

module.exports = app;