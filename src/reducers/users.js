import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            return [...action.users];
        case Types.ADD_USER:
            state.push(action.user);
            alert("Add user successfully");
            return [...state];
        case Types.DELETE_USER:
            state = state.filter(user => user.id !== action.id);
            alert("Delete user successfully");
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
