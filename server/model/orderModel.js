const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
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
module.exports = orderSchema;
