const { Schema, model } = require("mongoose");

const CarpetSchema = new Schema(
  {
    // nameCarpet: { type: String, required: true },
    // seller: { type: Schema.Types.ObjectId, ref: "User" },
    // workCarpet: { type: Schema.Types.ObjectId, ref: "WorkCarpet" },
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    // country: { type: Schema.Types.ObjectId, ref: "Country" },
    // carpetMaterial: { type: Schema.Types.ObjectId, ref: "MaterialCarpet" },
    // size: { type: Schema.Types.ObjectId },
    // formCarpet: { type: Schema.Types.ObjectId, ref: "FormCarpet" },
    // price: { type: String, required: true },
    // photos: [{ type: Schema.Types.ObjectId, ref: "Photos" }]
    nameCarpet: { type: String, required: true },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    workCarpet: { type: String },
    category: { type: String },
    country: { type: String },
    carpetMaterial: { type: String },
    size: { type: String },
    formCarpet: { type: String },
    price: { type: String, required: true },
    photos: [{ type: Schema.Types.ObjectId, ref: "Photos" }]
  },
  { timestamps: true }
);

module.exports = CarpetModel = model("Carpet", CarpetSchema);
