const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  location: { type: String, required: true },
  condition: { type: String, required: true },
  status: { type: String, required: true },
  eta: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  createdAt: { type: Date, default: Date.now },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
