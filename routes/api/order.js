// Import Engine
const express = require("express");
const router = express.Router();

// Import Middlewares
const auth = require("../../middleware/auth");

// Import Controllers
const { getOrders, createNewOrder } = require("../../services/order");

// @route    GET api/order
// @desc     Get all orders for buyers and sellers
// @access   Private
router.get("/", auth, getOrders);

// @route    POST api/order/new-order/:user_seller_id
// @desc     Create new order
// @access   Private
router.post("/new-order/:user_seller_id", auth, createNewOrder);

module.exports = router;
