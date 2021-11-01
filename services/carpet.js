// Import Engine

// Import Models
const CarpetModel = require("../models/Carpet");
const SellerCardModel = require("../models/SellerCard");

// @route    GET api/carpets
// @desc     Get all carpets
// @access   Private
const getMyCarpets = async (req, res) => {
  try {
    const carpets = await CarpetModel.find({ seller: req.user.id });

    if (!carpets) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message: "Carpets Not Found!"
      });
    }

    return res.status(200).json(carpets);
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

// @route    POST api/carpets/create
// @desc     Create new carpet
// @access   Private
const createCarpet = async (req, res) => {
  try {
    const carpet = await CarpetModel.findOne({
      nameCarpet: req.body.nameCarpet
    });

    if (carpet) {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message: "Carpet already exists!"
      });
    }

    const newCarpet = await CarpetModel.create({
      nameCarpet: req.body.nameCarpet,
      seller: req.user.id,
      workCarpet: req.body.workCarpet,
      category: req.body.category,
      country: req.body.country,
      carpetMaterial: req.body.carpetMaterial,
      size: req.body.size,
      formCarpet: req.body.formCarpet,
      price: req.body.price
    });

    await SellerCardModel.updateOne(
      { user: req.user.id },
      {
        $addToSet: {
          carpets: newCarpet._id
        }
      }
    );

    return res.status(200).json(newCarpet);
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
  getMyCarpets,
  createCarpet
};
