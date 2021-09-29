import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "../reducer/productReducer";
import { addToCartReducer } from "../reducer/cartReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer, registerNewUserReducer } from "../reducer/userRegister";
import {
  getOrderByIdReducer,
  getOrdersByUserIdReducer,
} from "../reducer/orderReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
});
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  addToCartReducereducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger))
);
export default store;
