const express = require("express");

const router = express.Router();
const user = require('../model/userModel');
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
  

  router.post('/deleteuser', (req, res) => {
  user.findByIdAndRemove(req.body.userid,(err)=>{
  
    if (err) {
      return res.status(400).json({
        message: "something sent worng"
      })
    }
    else {
      res.send("user deleted successfully");
    }
 

  })
  });
  
  module.exports = router;