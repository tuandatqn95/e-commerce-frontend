import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            return [...action.products];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            let index = state.findIndex(i => i.id === action.product.id);
            state[index] = action.product;
            return [...state];
        case Types.DELETE_PRODUCT:
            state = state.filter(i => i.id !== action.id);
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
