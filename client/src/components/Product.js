import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import img2 from "./star-yellow.png";

export default function Product({ product }) {
  console.log(product);
  return (
    <div className key={product._id}>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`product/${product._id}`}
        >
          <div className="text-center">
            <img src={product.image} className="img-fluid" />
          </div>

          <h1>{product.name}</h1>
          <Rating
            // style={{ color: "orange" }}
            // initialRating={product.rating}
            // emptySymbol="fa fa-star-o fa-1x"
            // fullSymbol="fa fa-star fa-1x"
            readonly={true}
            initialRating={product.rating}
            fullSymbol={<img src={img2} className="icon" />}
          />
          <h1>price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
