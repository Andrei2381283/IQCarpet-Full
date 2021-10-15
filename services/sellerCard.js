const SellerCardModel = require("../models/SellerCard");

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

module.exports = {
  getMySellerCard
};
