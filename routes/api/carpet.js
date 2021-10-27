// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Controllers
const { getMyCarpets, createCarpet } = require("../../services/carpet");

// @route    GET api/carpets
// @desc     Get all carpets
// @access   Private
router.get("/", auth, getMyCarpets);

// @route    POST api/carpets/create
// @desc     Create new carpet
// @access   Private
router.post("/create", auth, createCarpet);

module.exports = router;
