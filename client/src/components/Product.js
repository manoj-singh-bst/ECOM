import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link style={{ textDecoration: "none" }} to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <Rating
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
          />
          <h1>price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
