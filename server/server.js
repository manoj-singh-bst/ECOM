const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparse = require("body-parser");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-ecommerce", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

var productsRoute = require("./routes/productsRoutes");

app.use("/api/products/", productsRoute);
app.get("/", (req, res) => {
  res.send("this is from the backend");
});
app.use(bodyparse.json({ extended: true }));
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
