const mongoose = require("mongoose");
const { genToken } = require("../utils/token/createToken");

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      default: genToken(),
    },
    username: {
      type: String,
      required: true,
    },
    limitTime: {
      type: Date,
      default: Date.now() + 1000 * 60 * 60 * 24 * 3,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", TokenSchema);
