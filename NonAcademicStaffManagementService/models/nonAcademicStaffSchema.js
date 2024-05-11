// nonAcademicStaffSchema.js

const mongoose = require('mongoose');

const nonAcademicStaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('NonAcademicStaff', nonAcademicStaffSchema);
