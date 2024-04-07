const { Schema } = require("mongoose");

const TaskSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = TaskSchema;
