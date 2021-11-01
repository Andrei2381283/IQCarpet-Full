// Import Models
const SellerCardModel = require("../models/SellerCard");
const OrderModel = require("../models/Order");

// @route    GET api/order
// @desc     Get all orders for buyers and sellers
// @access   Private
const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({
      $or: [{ buyer: req.user.id }, { seller: req.user.id }]
    })
      .populate("buyer", "fullname email")
      .populate({
        path: "seller",
        select: "-createdAt -updatedAt",
        populate: {
          path: "user",
          select: "-password -createdAt -updatedAt"
        }
      });

    if (!orders) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message: "Orders Not Found!"
      });
    }

    res.json(orders);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
  }
};

// @route    POST api/order/new-order/:user_seller_id
// @desc     Create new order
// @access   Private
const createNewOrder = async (req, res) => {
  try {
    const sellerCard = await SellerCardModel.findOne({
      user: req.params.user_seller_id
    });

    if (!sellerCard) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message: "Seller Not Found!"
      });
    }

    const newOrder = await OrderModel.create({
      nameBuyer: req.body.nameBuyer,
      phoneNumberBuyer: req.body.phoneNumberBuyer,
      emailBuyer: req.body.emailBuyer,
      commentBuyer: req.body.commentBuyer,
      buyer: req.user.id,
      seller: req.params.user_seller_id
    });

    res.json(newOrder);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
  }
};

module.exports = {
  getOrders,
  createNewOrder
};
