import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");
  const [sortkey, setsort] = useState("popular");
  const [category, setcategory] = useState("all");
  return (
    <div className="card">
      <div className="row justify-content-center">
        <div className="col-md-3 mt-3 ml-2">
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <select
            className="form-control"
            value={sortkey}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value="popular">popular</option>
            <option value="lth">low to high</option>
            <option value="htl">high to low</option>
          </select>
        </div>

        <div className="col-md-2 mt-4 ml-2">
          <select
            className="form-control "
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="fashion">fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        <div className="col-md-2 mt-3 ml-2">
          <button
            className="btn "
            onClick={() => {
              dispatch(filterProducts(searchkey, sortkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
