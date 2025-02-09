// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true },
  trustedDevices: [{ type: String }], // Device IDs
  // Additional fields as needed
});

module.exports = mongoose.model('User', userSchema);