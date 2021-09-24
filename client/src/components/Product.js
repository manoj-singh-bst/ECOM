import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import img2 from "./star-yellow.png";

export default function Product({ product }) {
  console.log(product);
  return (
    <div className="col-md-3 m-5 card p-2" key={product._id}>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`product/${product.id}`}
        >
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
            initialRating={product.rating}
            fullSymbol={<img src={img2} className="icon" />}
          />
          <h1>price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
