const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  mail: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  register_date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('user', UserSchema);