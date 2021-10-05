const { response } = require("express");
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

router.post("/deleteproduct", (req, res) => {
  Product.findByIdAndRemove(req.body.productid, (err) => {
    if (err) {
      return res.status(400).json({
        message: "something sent worng",
      });
    } else {
      res.send("product deleted successfully");
    }
  });
});

router.post("/addproduct", (req, res) => {
  const { product } = req.body;

  const products = new Product({
    name: product.name,
    price: product.price,
    countInStock: product.countInStock,
    image: product.image,
    description: product.description,
    category: product.category,
  });
  products.save((err) => {
    if (err) {
      return res.status(400).json({
        message: "somethin went worng",
      });
    } else {
      res.send("producted addeded successfully");
    }
  });
});

router.post("/updateproduct", (req, res) => {
  Product.findByIdAndUpdate(
    req.body.productid,
    {
      name: req.body.updatedproduct.name,
      price: req.body.updatedproduct.price,
      countInStock: req.body.updatedproduct.countInStock,
      image: req.body.updatedproduct.image,
      description: req.body.updatedproduct.description,
      category: req.body.updatedproduct.category,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ message: "something went worng" + err });
      } else {
        res.send("product updated successfully");
      }
    }
  );
});

router.post("/addreview", async (req, res) => {
  const { review, productid, currentUser } = req.body;

  const product = await Product.findById({ _id: productid });

  const reviewmodel = {
    name: currentUser.name,
    userid: currentUser._id,
    rating: review.rating,
    Comment: review.Comment,
  };
  product.reviews.push(reviewmodel);
  product.save((err) => {
    if (err) {
      return res.status(400).json({ message: "something went wrong" });
    } else {
      res.send("Review submmited successfully");
    }
  });
});

module.exports = router;
