const express = require("express");

const router = express.Router();
const user = require('../model/userModel');

router.post('/register', (req, res) => {
  user.find({ email: req.body.email }, (error, data) => {
    if (data.length > 0) {
      return res.status(200).json({
        message: "user already register",
      });
    }
    else {

      const { name, email, password } = req.body;
      const _user = new user({
        name,
        email,
        password

      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          return res.status(200).json({
            message: "User created successfully",
          });
        }
      });

    }
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  })


});


router.post('/login', (req, res) => {
  user.find({ email: req.body.email, password: req.body.password }).exec((error, user) => {
    //if (error) return res.status(400).json({ error });
    if (user.length > 0) {
      const users = {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email
      }
      res.send(users)

      //  return res.status(200).json({


      //   });
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  })
});

router.get('/getallusers', (req, res) => {
  user.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({
        message: "something sent worng"
      })
    }
    else {
      res.send(docs);
    }
  })
});

module.exports = router;
