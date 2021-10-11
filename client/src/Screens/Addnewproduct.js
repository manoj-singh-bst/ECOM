import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import addProductReducer from "../reducer/productReducer";
import { addProduct } from "../actions/productActions";
export default function Addnewproduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  // alert(name)
  function addproduct(e) {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      countInStock: countinstock,
      image: imageurl,
      description: description,
      category,
    };
    dispatch(addProduct(product));
  }
  //notification
  const difftost = () => {
    toast.success("success");
  };

  return (
    <>
      <center>
        <div className="row" style={{ width: "50%" }}>
          <div className="col-md-5">
            <div>
              <h1>Product List</h1>
              <form onSubmit={addproduct}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="product name"
                  required
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product price"
                  value={price}
                  required
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter product quantity"
                  className="form-control"
                  required
                  value={countinstock}
                  onChange={(e) => {
                    setcountinstock(e.target.value);
                  }}
                  id="password"
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter image url"
                  value={imageurl}
                  onChange={(e) => {
                    setimageurl(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter category name"
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                />

                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  class="btn btn-dark mt-3 me-auto"
                  onClick={difftost}
                >
                  Add product
                </button>
              </form>
            </div>
          </div>
        </div>
      </center>
      <ToastContainer />
    </>
  );
}
