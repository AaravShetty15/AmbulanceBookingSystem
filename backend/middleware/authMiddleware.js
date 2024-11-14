const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assuming a User model is defined
const Request = require('../models/Request');
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
    
    // Attach the user information to the request if it exists
    req.user = await User.findById(decoded.userId).select('-password');  // Attach user to request
    
    // If you also need to find the related Request based on userId
    const userRequest = await Request.findOne({ userId: decoded.userId });
    req.request = userRequest;  // Attach the user's request to the request object

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
