import * as Types from "../constants/ActionTypes";

const initialState = {
    isLoggedIn: undefined,
    loggedUser: undefined
};

let reducer = (state = initialState, action) => {
    console.log("isAuthentication:", action);

    switch (action.type) {
        case Types.LOGIN:
            return {
                isLoggedIn: true,
                loggedUser: action.user
            };
        case Types.LOGOUT:
            return {
                isLoggedIn: false,
                loggedUser: undefined
            };
        default:
            return state;
    }
};

export default reducer;
