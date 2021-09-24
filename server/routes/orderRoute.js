const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51IxwYkSIspqRdPysVcjg5uEZM9ym9eDsP2vQGXZ6onFRClUFzb0eWmrvVPT3hSbeBlRzEmrv6Prg5fiHcw8FSNAs00NQsp37eM"
);

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  const customer = await stripe.customer.create({
    email: token.email,
    source: token._id,
  });

  const payment = await stripe.charges.create(
    {
      amount: subtotal * 100,
      currency: "INR",
      customer: customer.id,
      receipt_email: token.email,
    },
    {
      idempontencyKey: uuidv4(),
    }
  );
  if (payment) {
    res.send("Payment successful");
  } else {
    return res.status(400).json({ message: "Payment failed" });
  }
});

module.exports = router;
