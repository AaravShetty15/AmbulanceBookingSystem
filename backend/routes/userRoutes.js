// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Import User model
const authMiddleware = require('../middleware/authMiddleware');  // Import authentication middleware

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users from the database
    res.json(users);  // Respond with the list of users
  } catch (error) {
    console.log("Error fetching users:", error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Route to create a new user
router.post('/add', async (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = new User({ name, email, phone });

  try {
    const savedUser = await newUser.save();  // Save the new user to the database
    res.status(201).json(savedUser);  // Respond with the saved user data
  } catch (error) {
    console.log("Error - ", error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

router.get('/me', async (req, res) => {
  try {
    const user = await User.findOne({});  // Fetch first user or you can filter based on other parameters
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Respond with the user profile data
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
});


module.exports = router;
