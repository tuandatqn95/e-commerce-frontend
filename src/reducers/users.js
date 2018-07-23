import * as Types from "../constants/ActionTypes";

const initialState = [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER:
            return [...action.users];
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        case Types.DELETE_USER:
            state = state.filter(i => i.id !== action.id);
            return [...state];
        case Types.UPDATE_USER:
            let index = state.findIndex(i => i.id === action.user.id);
            state[index] = action.user;
            return [...state];
        case Types.UPDATE_PASSWORD:
            console.log(action.oldPassword + " - " + action.newPassword);
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;
