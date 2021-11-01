const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
  {
    textMessage: { type: String, required: true },
    chat: { type: Schema.Types.ObjectId, ref: "Chat" },
    userMessage: { type: Schema.Types.ObjectId, ref: "User", required: true },
    readMessageUsers: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

module.exports = MessageModel = model("Message", MessageSchema);
