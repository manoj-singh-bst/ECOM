import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
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

export const filterProducts = (searchKey, sortKey, category) => (dispatch) => {
  var filteredproducts;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredproducts = res.data;
      if (searchKey) {
        filterProducts = res.data.filter((product) => {
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
