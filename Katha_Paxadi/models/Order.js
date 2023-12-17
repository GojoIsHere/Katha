const mongoose = require("mongoose");

const orderProductSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: false },
    preTax: { type: Number, required: false },
    afterTax: { type: Number, required: false },
  },
  { _id: false }
);

const orderShippingAddress = new mongoose.Schema(
  {
    district: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: false },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentStatus: {
    type: String,
    enum: {
      values: ["processed", "pending"],
      message: "{VALUE} is not supported",
    },
  },
  status: {
    type: String,
    enum: {
      values: ["delivered", "placed", "process"],
      message: "{VALUE} is not supported",
    },
  },
  amount: { type: Number, required: true },
  items: [orderProductSchema],
  shippingAddress: { orderShippingAddress },
});

module.exports = orderSchema;
