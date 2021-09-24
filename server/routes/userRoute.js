const express = require("express");
const router = express.Router();
 

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
module.exports=router; 
