const mongoose = require("mongoose"); // Erase if already required


// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      // min: 3,
      // max: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // min: 3,
      // max: 20,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      // unique: true,
      // index: true,
      // lowercase: true,
    },
     
  });
//Export the model
module.exports = mongoose.model("users", userSchema);
