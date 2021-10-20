const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    nameBuyer: { type: String, required: true },
    phoneNumberBuyer: { type: String, required: true },
    emailBuyer: { type: String, required: true },
    commentBuyer: { type: String },
    buyer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = OrderModel = model("Order", OrderSchema);
