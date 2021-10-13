// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Validate
const { check } = require("express-validator");

// Import Controllers
const {
  getMyProfile,
  authLogin,
  myProfileSettings
} = require("../../services/auth");

// const User = require('../../models/User');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, getMyProfile);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/",
  // check('email', 'Please include a valid email').isEmail(),
  check("password", "Password is required").exists(),
  authLogin
);

// @route    PUT api/auth/settings
// @desc     Settings profile
// @access   Private
router.put("/settings", auth, myProfileSettings);

module.exports = router;
