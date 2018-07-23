import { combineReducers } from "redux";
import categories from "./categories";
import selectedCategory from "./selectedCategory";
import users from "./users";

const appReducer = combineReducers({
    categories,
    selectedCategory,
    users
});

export default appReducer;
