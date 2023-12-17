const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    district: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: false },
  },
  { _id: false }
);

const cartListSchema = new mongoose.Schema(
  {
    skus: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, minLength: 3 },
  username: { type: String, required: true, minLength: 3 },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cart: [cartListSchema],
  address: [addressSchema],
  userType: {
    type: String,
    required: true,
    enum: { values: ["admin", "user"], message: "{VALUE} is not supported" },
  },
  order: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  isDisabled: { type: Boolean, required: true, default: false },
});

module.exports = userSchema;
