// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Controllers
const {
  getMySellerCard,
  getSellersCards,
  getSellerCardByUserId,
} = require("../../services/sellerCard");

// @route    GET api/seller-card/me
// @desc     Get current users Seller Card
// @access   Private
router.get("/me", auth, getMySellerCard);

// @route    GET api/seller-card/all
// @desc     Get all sellers cards
// @access   Public
router.get("/all", getSellersCards);

// @route    GET api/seller-card/user/:user_id
// @desc     Get seller card by user ID
// @access   Public
router.get("/user/:user_id", getSellerCardByUserId);

module.exports = router;
