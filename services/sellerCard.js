const SellerCardModel = require("../models/SellerCard");

const getMySellerCard = async (req, res) => {
  try {
    const sellerCard = await SellerCardModel.findOne({
      user: req.user.id,
      iAmSeller: true,
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
      message: `Something went wrong! ${err}`,
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`,
    });
  }
};

const getSellersCards = async (req, res) => {
  try {
    const sellersCards = await SellerCardModel.find({});

    if (!sellersCards) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
      });
    }

    return res.json(sellersCards);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`,
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`,
    });
  }
};

const getSellerCardByUserId = async (req, res) => {
  try {
    const sellerCard = await SellerCardModel.findOne({
      user: req.params.user_id,
    });

    if (!sellerCard) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
      });
    }

    return res.json(sellerCard);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`,
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`,
    });
  }
};

module.exports = {
  getMySellerCard,
  getSellersCards,
  getSellerCardByUserId,
};
