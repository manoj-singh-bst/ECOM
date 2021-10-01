import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};

//******GETPRODUCTBY_ID code for single product ******
export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  axios
    .post("/api/products/getproductbyid", { productid })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};
//*********** DELETE PRODUCT BU ID**************** */

export const deleteProduct = (productid) => (dispatch) => {
  dispatch({ type: "DELETE_PRODUCT_REQUEST" });
  axios
    .post("/api/products/deleteproduct", { productid })
    .then((res) => {
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
      //  console.log(res.data)
      window.location.reload();
      window.alert("product deleted succussfully");
    })
    .catch((err) => dispatch({ type: "DELETE_PRODUCT_FAILED", payload: err }));
};

//***********Add Product ****************** */

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQUEST" });
  axios
    .post("/api/products/addproduct", { product })
    .then((res) => {
      dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: res.data });
      //  console.log(res.data)
      window.location.reload();
      window.alert("product added succussfully");
    })
    .catch((err) => dispatch({ type: "ADD_PRODUCT_FAILED", payload: err }));
};

//***********edit Product ****************** */

export const updateProduct = (productid, updatedproduct) => (dispatch) => {
  console.log(productid);
  console.log(updatedproduct);
  dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
  axios
    .post("/api/products/updateproduct", { productid, updatedproduct })
    .then((res) => {
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res.data });
      //  console.log(res.data)
      window.location.reload();
      window.alert("product added succussfully");
    })
    .catch((err) => dispatch({ type: "UPDATE_PRODUCT_FAILED", payload: err }));
};
//*******FILTER product ******
export const filterProducts = (searchKey, sortKey, category) => (dispatch) => {
  var filteredproducts;
  dispatch({ type: "GET_PRODUCT_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredproducts = res.data;
      if (searchKey) {
        filteredproducts = res.data.filter((product) => {
          return product.name.toLowerCase().includes(searchKey);
        });
      }

      if (sortKey !== "popular") {
        if (sortKey == "htl") {
          filteredproducts = res.data.sort((a, b) => {
            return -a.price + b.price;
          });
        } else {
          filteredproducts = res.data.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
      if (category !== "all") {
        filteredproducts = res.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      dispatch({ type: "GET_PRODUCT_SUCCESS ", payload: filteredproducts });
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODUCT_FAILED" });
    });
};

export const addProductReview = (review, productid) => (dispatch, getState) => {
  dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" });
  const currentUser = getState().loginReducer.currentUser;

  axios
    .post("api/products/addreview", { review, productid, currentUser })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};
