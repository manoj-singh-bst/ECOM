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

//*****GETPRODUCTBYID******
export const getProductByIdReducer = (state = { product: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return {
        loading: true,
      };

    case "GET_PRODUCTBYID_SUCCESS":
      return {
        product: action.payload,
        loading: false,
      };
    case "GET_PRODUCTBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
