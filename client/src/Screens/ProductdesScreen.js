import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProductByIdReducer } from "../reducer/productReducer";
import { getProductById } from "../actions/productActions";
export default function ProductdesScreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;
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
        <div className="row">
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

              <select style={{ display: "flex" }}>
                {[...Array(product.countInstock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button style={{ display: "flex" }} className="btn btn-dark">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
