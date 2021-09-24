export const getAllProductsReducer = (state = { products: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        loading: true,
      };

    case "GET_PRODUCT_SUCCESS":
      return {
        products: action.payload,
        loading: false,
      };
    case "GET_PRODUCT_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
