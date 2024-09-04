// utils/tokenUtils.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Function to create an access token
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d', // Token expires in 1 day
  });
};

// Function to create a refresh token
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
};
