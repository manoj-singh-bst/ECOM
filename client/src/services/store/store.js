// import { getAllProductsReducer } from "../../reducer/productReducer";
// import { combineReducers } from "redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const finalReducer = combineReducers({
//   getAllProductsReducer: getAllProductsReducer,
// });

// const store = createStore(finalReducer, applyMiddleware(thunk));
// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../../reducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
