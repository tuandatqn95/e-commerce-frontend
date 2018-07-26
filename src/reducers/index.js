import { combineReducers } from "redux";
import categories from "./categories";
import selectedCategory from "./selectedCategory";
import auth from "./auth";

const appReducer = combineReducers({
    categories,
    selectedCategory,
    auth
});

export default appReducer;
