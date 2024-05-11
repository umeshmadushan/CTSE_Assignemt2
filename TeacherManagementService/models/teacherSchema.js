const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Mobile: {
    type: Number,
    required: true
  },
  Module: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('teacher', teacherSchema);
