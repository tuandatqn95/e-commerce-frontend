import { combineReducers } from "redux";
import categories from "./categories";
import users from "./users";
import auth from "./auth";

import products from "./products";
import selectedProduct from "./selectedProduct";

const appReducer = combineReducers({
    categories,
    auth,
    products,
    selectedProduct,
    users
});

export default appReducer;
