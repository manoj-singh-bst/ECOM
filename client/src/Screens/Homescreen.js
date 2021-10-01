import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductsstate;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-2 p-2 card ">
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
