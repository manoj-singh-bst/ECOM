import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

export default function Checkout(amount) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderstate;
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }
  return (
    <div>
      {loading && <Loader />}
      {success && <Success success="Your Order Placed Successfully" />}
      {error && <Error error="Something went wronggggg" />}

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
