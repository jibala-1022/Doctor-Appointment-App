const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is require"],
  },
  email: {
    type: String,
    required: [true, "Email is require"],
  },
  password: {
    type: String,
    required: [true, "Password is require"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
},
{ timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
