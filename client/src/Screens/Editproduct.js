import React, { useEffect, useState } from 'react';
import { getProductById } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../actions/productActions';



import Card from 'react-bootstrap/Card'
//import { useEffect,useState } from 'react';

export default function Editproduct({ match }) {
  const productState = useSelector(state => state.getProductByIdReducer)
  const { product, loading, error } = productState;
  const dispatch = useDispatch();
  const productid = match.params.productid;
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [countinstock, setcountinstock] = useState()
  const [imageurl, setimageurl] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')
  // alert(price)

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      countInStock: countinstock,
      image: imageurl,
      description: description,
      category,

    }

    dispatch(updateProduct(productid, updatedproduct));
  }
  useEffect(() => {
    if (product) {

      if (product._id == productid) {
        setname(product.name);
        setprice(product.price);
        setcountinstock(product.countInStock);
        setimageurl(product.image);
        setdescription(product.description);
        setcategory(product.category)
      }
      else {
        dispatch(getProductById(productid))

      }

    }
    else {
      dispatch(getProductById(productid))
    }
  }, [dispatch, product])
  return (
    <>
         <center>   <Card className="cardContainer"  style={{marginTop:'20px' , padding:'15px' , width:'75%' }} >
                <Card.Body>
            <Card.Title>Edit Product</Card.Title>

      {product && (<div>
        <div>
          <img src={product.image} height="100px" width="100px"/>
          <h1 class="text-center">{product.name}</h1>
        </div>


        <center><div classNameName="row" style={{ width: "50%" }}>
          <div classNameName="col-md-5">
            <div>
              
              <form onSubmit={editproduct}>
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
                  onChange={(e) => { setprice(e.target.value) }}
                />
                <input
                  type="text"
                  placeholder="Enter product quantity"
                  className="form-control"
                  required
                  value={countinstock}
                  onChange={(e) => { setcountinstock(e.target.value) }}
                  id="password" />
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter image url"
                  value={imageurl}
                  onChange={(e) => { setimageurl(e.target.value) }}
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter category name"
                  value={category}
                  onChange={(e) => { setcategory(e.target.value) }}

                />

                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) => { setdescription(e.target.value) }}
                />
                <button type="submit" class="btn btn-dark mt-3 me-auto">Update product</button>
              </form>

            </div>
          </div>
        </div>
        </center>





      </div>)}
      </Card.Body>
      </Card>
  </center>
    </>
  );
}
