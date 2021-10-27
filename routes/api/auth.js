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
  resetPasswordSendCode,
  resetPasswordConfirmCode,
  resetPassword,
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

// @route    POST api/auth/reset-password-send-code
// @desc     User reset password send code
// @access   Public
router.post(
  "/reset-password-send-code",
  check("email", "Please include a valid email").isEmail(),
  resetPasswordSendCode
);

// @route    POST api/auth/reset-password-confirm-code
// @desc     User reset password confirm code
// @access   Public
router.post(
  "/reset-password-confirm-code",
  check("email", "Please include a valid email").isEmail(),
  check("code", "Please include a valid email").isLength({ min: 4, max: 4 }),
  resetPasswordConfirmCode
);

// @route    POST api/auth/reset-password
// @desc     User reset password
// @access   Public
router.post(
  "/reset-password",
  check("email", "Please include a valid email").isEmail(),
  check("code", "Please include a valid email").isLength({ min: 4, max: 4 }),
  check(
    "newPassword",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  resetPassword
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
