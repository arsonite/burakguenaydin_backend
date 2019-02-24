const mongoose = require('mongoose');

/*
const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,

    proficiency: {
      type: Number,
      required: true
    },
    projects: {
      type: Array,
      required: false
    }
  }
});
*/

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  proficiency: {
    type: Number,
    required: true
  },
  projects: {
    type: Array,
    required: false
  }
});

exports.Language = mongoose.model('Language', languageSchema);
