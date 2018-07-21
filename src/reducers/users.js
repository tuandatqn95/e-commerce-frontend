import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            return [...action.users];
        case Types.ADD_USER:
            state.push(action.user);
            console.log("ADDED USER");
            return [...state];
        case Types.DELETE_USER:
            state = state.filter(user => user.id !== action.id);
            console.log("DELETED USER");
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
