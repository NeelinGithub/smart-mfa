// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Google Authentication Route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google Authentication Callback Route
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate JWT with expiration time
    const token = jwt.sign(
      { userId: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Option 1: Send the token as a query parameter (not recommended for production)
    // res.redirect(`http://localhost:3000/login/success?token=${token}`);

    // Option 2: Send the token as a cookie (more secure)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Set to true in production
      maxAge: 3600000, // 1 hour in milliseconds
    });

    // Redirect or send a success response
    res.redirect('http://localhost:3000/dashboard');
  }
);

module.exports = router;