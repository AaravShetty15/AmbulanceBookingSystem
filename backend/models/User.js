// backend/models/User.js
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  // medicalInfo: { type: String, required: false },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
