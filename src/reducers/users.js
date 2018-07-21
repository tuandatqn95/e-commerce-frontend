import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            return [...action.users];
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
