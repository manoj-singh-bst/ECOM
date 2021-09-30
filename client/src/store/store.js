import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "../reducer/productReducer";
import { addToCartReducer } from "../reducer/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer, registerNewUserReducer } from "../reducer/userRegister"
import { getAllusersReducer } from "../reducer/userRegister";
import { deleteUserReducer } from "../reducer/userRegister";
import { deleteProductReducer } from "../reducer/productReducer";
import { addProductReducer } from "../reducer/productReducer";
import { UpdateProductReducer } from "../reducer/productReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
  getAllusersReducer :getAllusersReducer,
  deleteUserReducer:deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer :addProductReducer ,
  UpdateProductReducer:UpdateProductReducer,

});
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  const initialState = {
    addToCartReducereducer: { cartItems: cartItems },
    loginReducer: { currentUser: currentUser }
  }

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
