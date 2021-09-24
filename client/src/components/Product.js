import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  console.log(product);
  return (
    <div className="col-md-3 m-5 card p-2" key={product._id}>
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>

          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
          <h1>price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
