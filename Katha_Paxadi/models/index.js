const mongoose = require("mongoose");
const userSchema = require("./User");
const { productSchema, stockSchema } = require("./Product");
const orderSchema = require("./Order");

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);
const Stock = mongoose.model("Stock", stockSchema);

module.exports = { User, Product, Order, Stock };
