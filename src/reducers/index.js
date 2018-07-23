import { combineReducers } from "redux";
import categories from "./categories";
import selectedCategory from "./selectedCategory";

import products from "./products";
import selectedProduct from "./selectedProduct";

const appReducer = combineReducers({
    categories,
    products,
    selectedCategory,
    selectedProduct
});

export default appReducer;
