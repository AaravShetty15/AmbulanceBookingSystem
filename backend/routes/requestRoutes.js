const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Route to get all requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find().populate('userId', 'name email');
    res.json(requests);
    
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error: error.message });
  }
});

// Route to create a new request
router.post('/', async (req, res) => {
  const { userId, location, status } = req.body;
  const newRequest = new Request({ userId, location, status });

  try {
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating request', error: error.message });
  }
});

router.post('/requests', async (req, res) => {
  const { location, condition, status, eta } = req.body;
  console.log(req.body);

  const newRequest = new Request({
    location,
    condition,
    status,
    eta,
  });

  try {
    const savedRequest = await newRequest.save();  // Save the new request to the database
    res.status(201).json(savedRequest);  // Respond with the saved request data
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ message: 'Error creating request', error: error.message });
  }
});

module.exports = router;
