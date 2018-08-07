import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import categories from "./categories";
import users from "./users";
import auth from "./auth";
import products from "./products";
import selectedProduct from "./selectedProduct";
import customers from "./customers";

export default combineReducers({
    categories,
    auth,
    products,
    selectedProduct,
    users,
    customers
});
