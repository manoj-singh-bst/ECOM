const express = require("express");
const router = express.Router();
const Product = require("../model/productModel");

router.get("/getallproducts", (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      return res.send(docs);
    }
    if (err) {
      return res.status(200).json({ message: "something went wrong" });
    }
  });
  router.post("/getproductbyid", (req, res) => {
    Product.find({ _id: req.body.productid }, (err, docs) => {
      if (!err) {
        res.send(docs[0]);
      } else {
        return res.send(400).json({ message: "something went wrong" });
      }
    });
  });
});
module.exports = router;
