const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Middleware to protect routes that require authentication
const requireAuth = ClerkExpressRequireAuth();

// Middleware to attach user data to the request
const attachUser = async (req, res, next) => {
  if (!req.auth) {
    return next();
  }

  try {
    // Get user metadata from Clerk
    const user = req.auth.userId;
    req.user = {
      id: user,
      role: req.auth.sessionClaims?.metadata?.role || 'customer'
    };
    next();
  } catch (error) {
    console.error('Error attaching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Middleware to check if user is an artisan
const requireArtisan = (req, res, next) => {
  if (req.user?.role !== 'artisan') {
    return res.status(403).json({ error: 'Access denied. Artisan role required.' });
  }
  next();
};

module.exports = {
  requireAuth,
  attachUser,
  requireArtisan
};