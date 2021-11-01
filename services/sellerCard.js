// Import Models
const SellerCardModel = require("../models/SellerCard");

// @route    GET api/seller-card/me
// @desc     Get current users Seller Card
// @access   Private
const getMySellerCard = async (req, res) => {
  try {
    const sellerCard = await SellerCardModel.findOne({
      user: req.user.id,
      iAmSeller: true
    }).populate("user", ["name", "avatar"]);

    if (!sellerCard) {
      return res
        .status(400)
        .json({ msg: "There is no seller card for this user" });
    }

    res.json(sellerCard);
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

// @route    GET api/seller-card/all
// @desc     Get all sellers cards
// @access   Public
const getSellersCards = async (req, res) => {
  try {
    const sellersCards = await SellerCardModel.find({}).populate(
      "carpets",
      "nameCarpet price seller"
    );

    if (!sellersCards) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found"
      });
    }

    return res.json(sellersCards);
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

// @route    GET api/seller-card/user/:user_id
// @desc     Get seller card by user ID
// @access   Public
const getSellerCardByUserId = async (req, res) => {
  try {
    const sellerCard = await SellerCardModel.findOne({
      user: req.params.user_id
    }).populate("carpets", "nameCarpet price seller");

    if (!sellerCard) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found"
      });
    }

    return res.json(sellerCard);
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
  getMySellerCard,
  getSellersCards,
  getSellerCardByUserId
};
