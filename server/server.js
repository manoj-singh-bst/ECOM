const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparse = require("body-parser");
const app = express();

const port = 3001;

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
app.use(bodyparse.json({}));
var orderRoute = require("./routes/orderRoute");
const userRoute = require("./routes/userRoute");
const userScreenRoute=require("./routes/userScreenRoute");
app.use(bodyparse.json({ extended: true }));
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("this is from the backend");
});
app.use("/api/products/", productsRoute);
app.use("/api/user", userRoute);
app.use("/api/orders/", orderRoute);
app.use("/admin/api/user", userScreenRoute);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
