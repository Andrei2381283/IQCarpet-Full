// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Validate
const { check } = require("express-validator");

// Import Multer
const multer = require("../../utils/multer");

// Import Controllers
const {
  getMyProfile,
  authLogin,
  myProfileSettings,
  myProfileSettingsUploadAvatar
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

// @route    POST api/auth/settings/upload-avatar
// @desc     Settings profile Upload Avatar
// @access   Private
router.post(
  "/settings/upload-avatar",
  multer.single("file"),
  auth,
  myProfileSettingsUploadAvatar
);

module.exports = router;
