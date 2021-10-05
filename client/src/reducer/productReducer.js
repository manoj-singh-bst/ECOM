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

//***************delete product reducer******************************* */

export const deleteProductReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "DELETE_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
  }
  return state;
};

//************ add product *************** */

export const addProductReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "ADD_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
  }
  return state;
};

//************ update product *************** */

export const UpdateProductReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "UPDATE_PRODUCT_FAILED":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
  }
  return state;
};

//****add product review ********/
export const addProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_REVIEW_REQUEST":
      return {
        loading: true,
      };
    case "ADD_PRODUCT_REVIEW_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_PRODUCT_REVIEW_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
