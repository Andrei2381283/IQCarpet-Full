const { Schema, model } = require("mongoose");

const ChatSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    partner: { type: Schema.Types.ObjectId, ref: "User" },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" }
  },
  { timestamps: true }
);

module.exports = ChatModel = model("Chat", ChatSchema);
