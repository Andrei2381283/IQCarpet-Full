// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Controllers
const { getMySellerCard } = require("../../services/sellerCard");

// @route    GET api/seller-card/me
// @desc     Get current users Seller Card
// @access   Private
router.get("/me", auth, getMySellerCard);

module.exports = router;
