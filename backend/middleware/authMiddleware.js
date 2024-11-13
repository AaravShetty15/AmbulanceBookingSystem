// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assuming a User model is defined
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const authMiddleware = async (req, res, next) => {
  // Get token from the Authorization header
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    // Verify token and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select('-password');  // Attach user to request

    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }

    next();  // Move to the next middleware/route handler
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
