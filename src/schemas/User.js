const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const TaskSchema = require("./Task");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: {
      type: Map,
      of: TaskSchema,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encryptPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
};

UserSchema.methods.matchPassword = async function (pass) {
  const match = await bcrypt.compare(pass, this.password);
  return match;
};

UserSchema.methods.addTask = function (task) {
  this.tasks.set(task.id, task);
  return this.save();
};

UserSchema.methods.removeTask = function (id) {
  this.tasks.delete(id);
  return this.save();
};

module.exports = model("User", UserSchema);
