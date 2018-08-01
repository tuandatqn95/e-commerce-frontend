import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CUSTOMER:
            return [...action.customers];
        default:
            return [...state];
    }
};

export default reducer;
