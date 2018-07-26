import * as Types from "../constants/ActionTypes";

const initialState = false;

let reducer = (state = initialState, action) => {
    console.log("isAuthentication:", action);

    switch (action.type) {
        case Types.LOGIN:
            return true;
        case Types.LOGOUT:
            return false;
        default:
            return state;
    }
};

export default reducer;
