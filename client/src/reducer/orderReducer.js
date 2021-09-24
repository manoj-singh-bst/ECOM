export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER-REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PLACE_ORDER-SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "PLACE_ORDER-FAILED":
      return {
        ...state,
        loading: true,
        error: true,
      };
    default:
      return { state };
  }
};
