import {
  addProductReviewReducer,
  getAllProductsReducer,
  getProductByIdReducer,
} from "../reducer/productReducer";

import LogRocket from "logrocket";
import { CartReducer } from "../reducer/cartReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer, registerNewUserReducer } from "../reducer/userRegister";
import { getAllusersReducer } from "../reducer/userRegister";
import { deleteUserReducer } from "../reducer/userRegister";
import { deleteProductReducer } from "../reducer/productReducer";
import { addProductReducer } from "../reducer/productReducer";
import { UpdateProductReducer } from "../reducer/productReducer";
import { getAllOrdersReducer } from "../reducer/orderReducer";
import { updateReducer } from "../reducer/userRegister";
import { googleloginReducer } from "../reducer/userRegister";
import {
  getOrderByIdReducer,
  getOrdersByUserIdReducer,
  placeOrderReducer,
} from "../reducer/orderReducer";
import log from "log-to-file";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  getProductByIdReducer: getProductByIdReducer,
  getAllusersReducer: getAllusersReducer,
  deleteUserReducer: deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  UpdateProductReducer: UpdateProductReducer,
  CartReducer: CartReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  placeOrderReducer: placeOrderReducer,
  addProductReviewReducer: addProductReviewReducer,

  getAllOrdersReducer:getAllOrdersReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateReducer:updateReducer,
  googleloginReducer:googleloginReducer,

});
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  CartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
  googleloginReducer:{currentUser:currentUser}
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger, LogRocket.reduxMiddleware()))
);
// log("store");
// log("store", "my_log.log");
export default store;
