const express = require("express");
const router = express.Router();
 const mangoose = require('mongoose');
 const User = require('../model/userModel');

router.get("/getallusers", (req, res) => {
  user.find({}, (err, docs) => {
    if (!err) {
      return res.json({ data: docs });
    }
    if (err) {
      return res.status(200).json({ message: "something went wrong" });
    }
  });
});

router.post('/register', (req, res) => {

    const newuser=new User(req.body)
    newuser.save(err=>{
      if(err){
        res.send("user register successfully")
      }
      else{
        res.send("something went worng");
      }
    })
  
});
module.exports=router; 
