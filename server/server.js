const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const findOrCreate = require("mongoose-findorcreate");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const cors = require("cors");
const morgan = require("morgan");
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

//googleuser

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRET",
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// const userSchema = new Schema({
//   userId: String,
//   name: String,
// });

// userSchema.pulgin(findOrCreate);
// const User = mongoose.model("user", userSchema);

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });
// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "your id",
//       clientSecret: "your secret id",
//       callbackURL: "http://localhost:3000/auth/google/secret",
//     },
//     function (token, tokenSecret, profile, done) {
//       user.findOrCreate(
//         { userId: profile.id, name: profile.displayName },
//         function (err, user) {
//           return done(err, user);
//         }
//       );
//     }
//   )
// );
// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["https://www.googleapis.com/auth/plus.login"],
//   })
// );

//config

var productsRoute = require("./routes/productsRoutes");
app.use(bodyparse.json({}));
var orderRoute = require("./routes/orderRoute");
const userRoute = require("./routes/userRoute");
const userScreenRoute = require("./routes/userScreenRoute");
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
