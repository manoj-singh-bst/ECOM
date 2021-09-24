import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      const { product } = res.data;
      console(product);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: product });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};
