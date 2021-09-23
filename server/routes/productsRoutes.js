const express = require("express");
const router = express.Router();
const product = require("../model/productModel");

router.get("/getallproducts", (req, res) => {
  product.find({}, (err, docs) => {
    if (!err) {
      return res.json({ data: docs });
    }
    if (err) {
      return res.status(200).json({ message: "something went wrong" });
    }
  });
});
