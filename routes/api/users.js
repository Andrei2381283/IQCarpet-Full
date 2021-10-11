// Import Engine
const express = require('express');
const router = express.Router();

// Import Validate
const { check } = require('express-validator');

// Import Controllers
const { registration } = require('../../services/users');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  registration
);

module.exports = router;
