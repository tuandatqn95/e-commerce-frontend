import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CUSTOMER:
            return [...action.customers];
        case Types.DELETE_CUSTOMER:
            state = state.filter(i => i.id !== action.id);
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
