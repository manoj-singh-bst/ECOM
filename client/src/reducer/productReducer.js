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

// const initState = {
//   product: [],
// };
// export default (state = initState, action) => {
//   switch (action.type) {
//     case "GET_PRODUCT_REQUEST":
//       state = {
//         ...state,
//         product: action.payload.product,
//       };
//       break;
//   }
//   switch (action.type) {
//     case "GET_PRODUCT_SUCCESS":
//       state = {
//         ...state,
//         product: action.payload.product,
//       };
//       break;
//   }
// };
