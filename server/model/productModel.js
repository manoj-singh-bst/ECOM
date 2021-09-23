const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
  },
  name: {
    type: String,
    require: true,
  },
  Comment: {
    type: String,
  },
  rating: {
    type: String,
    require: true,
  },
});
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  countInStock: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  reviews: [reviewsSchema],
});
const Product = mongoose.model("products", productSchema);
module.exports = Product;
