const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  admin: {
    type: Boolean,
    required: true
  },
  timestamps: {
    created: {
      type: String
    },
    changed: {
      type: String
    }
  }
});

/* Adding method to user to generate JWT-Web-Token */
userSchema.methods.JWTAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      admin: this.admin
    },
    config.get('jwtPrivateKey')
  );
  return token;
};

module.exports = mongoose.model('User', userSchema);
