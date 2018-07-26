import { combineReducers } from "redux";
import categories from "./categories";
import selectedCategory from "./selectedCategory";
import isAuthentication from "./isAuthentication";

const appReducer = combineReducers({
    categories,
    selectedCategory,
    isAuthentication
});

export default appReducer;
