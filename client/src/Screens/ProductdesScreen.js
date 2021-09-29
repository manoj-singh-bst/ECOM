import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Review from "../components/Review";
export default function ProductdesScreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;
  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-4 m-2">
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 bigimg" />
              <p>{product.description}</p>
            </div>
          </div>

          <div className="col-md-6 text-left">
            <div className="m-2">
              <h1 style={{ textAlign: "left " }}>price:{product.price}</h1>
              <hr />
              <h1 style={{ textAlign: "left " }}>select quantity</h1>

              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
                style={{ display: "flex" }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button
                style={{ display: "flex" }}
                className="btn btn-dark"
                onClick={addtocart}
              >
                ADD TO CART
              </button>
            </div>
            <hr />
            <div className="text-left" style={{ display: "flex" }}>
              <Review />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
