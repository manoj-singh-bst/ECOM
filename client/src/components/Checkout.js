import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout(amount) {
  function tokenHandler(token) {
    console.log(token);
  }
  return (
    <div>
      <StripeCheckout
        token={tokenHandler}
        amount={amount * 100}
        shippingAddress
        currency="INR"
        stripeKey="pk_test_51IxwYkSIspqRdPysYFYPPT8fNe2sutuIiPQM6ZFF4x1p4nSI1gAWNzdqevYeQNoQFA7dxQflPdsM8zKIlDtaJMvQ00Rl4dAtiF"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
