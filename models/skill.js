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

/*
DATA SET

"software_portfolio": {
  "languages": {
    "java": {
      "proficiency": 2,
      "projects": [
        "3D-Raytracer",
        "Project-Nightshade",
        "TeaType-Library",
        "Photo-parser & reorganizer",
        "Distributed systems search algorithm",
        "Random name generator",
        "Secure password generator & hasher",
        "Runtime-efficient algorithms"
      ]
    },
    "javascript": {
      "proficiency": 2,
      "projects": [
        "burakguenaydin.de",
        "cafesuarez.de",
        "WanderApp",
        "LebPhotos",
        "TeaType-Collection"
      ]
    },
    "c++": {
      "proficiency": 1,
      "projects": ["TempoEX Reloaded", "TempoEX", "my::vector"]
    },
    "swift": {
      "proficiency": 1,
      "projects": ["Geolocation-Todo", "TicTacToe", "Basic calculator"]
    },
    "sql": {
      "proficiency": 0,
      "projects": ["Basic statements", "Multi-Table-Operations (JOIN)"]
    },
    "python": {
      "proficiency": 0,
      "projects": [
        "Photo-color picker & analyzer",
        "Runtime-efficient algorithms"
      ]
    },
    "shell/bash": {
      "proficiency": 0,
      "projects": [""]
    }
  },

  "frameworks": {
    "nodejs": [],
    "nosql/restapi": [
      "express.js",
      "underscore.js",
      "mongodb",
      "mongoose",
      "reactjs"
    ],
    "qt": [],
    "android_sdk": []
  },

  "other": {
    "agile": ["scrum (trello)", "version-control (git)"],
    "xml": [],
    "json": [],
    "linux": ["NGINX", "crontab", "SSH"]
  }
},
*/
