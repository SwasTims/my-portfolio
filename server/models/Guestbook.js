const mongoose = require('mongoose');

const guestbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxLength: 280
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Guestbook', guestbookSchema);