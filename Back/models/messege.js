const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Message", messageSchema);
