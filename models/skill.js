const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  proficiency: {
    type: Number,
    required: true
  },
  proficiencies: {
    type: Array,
    required: true
  },
  projects: {
    type: Array,
    required: false
  },
  language: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Skill', skillSchema);
