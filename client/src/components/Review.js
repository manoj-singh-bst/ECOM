import React, { useState } from "react";
import Rating from "react-rating";

export default function Review() {
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");
   
  function sendreview(){

  }
  return (
    <div>
      <h2>Give your Review</h2>
      <Rating
        style={{ color: "orange" }}
        initialRating={rating}
        emptySymbol="fa fa-star-o fa-1x"
        fullSymbol="fa fa-star fa-1x"
        readonly={false}
        onChange={(e) => {
          setrating(e);
        }}
      />
      <input
        type="text"
        className="form-control mt-2 ml-5"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      ></input>
      <button className="btn btn-dark mt-5">Submit Review</button>
    </div>
  );
}
