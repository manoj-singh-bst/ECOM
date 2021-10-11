

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import  addProductReducer  from '../reducer/productReducer';
import {addProduct} from '../actions/productActions'
import Card from 'react-bootstrap/esm/Card';
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
               <center> <Card className="cardContainer" style={{ width: '50%' ,padding:'20px',borderRadius:'5px' }}>
                <Card.Body>
            <div classNameName="row">
                <div classNameName="col-md-5">
                    <div>
                    <Card.Title>ADD PRODUCTS</Card.Title>
                        <form onSubmit={addproduct}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="product name"
                                required
                                value={name}
                                onChange={(e) => { setname(e.target.value) }}
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

            
            </Card.Body>
            </Card>
            </center>
        </>
    );


}
