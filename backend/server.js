// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');  // User routes
const requestRoutes = require('./routes/requestRoutes');  // Request routes

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;  // Use PORT from .env or default to 5000

// Middleware
app.use(express.json());  // To parse incoming JSON requests
app.use(cors());  // To handle cross-origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Use the routes
app.use('/api/users', userRoutes);  // User routes
app.use('/api/requests', requestRoutes);  // Request routes

// Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred on the server', error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
