import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const loginRequest = user => {
    return dispatch => {
        return callApi("admin/login", "POST", user).then(res => {
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                dispatch(login());
            }
        });
    };
};

export const logoutRequest = user => {
    return dispatch => {
        localStorage.removeItem("token");
        dispatch(login());
    };
};

export const login = () => {
    return {
        type: Types.LOGIN
    };
};

export const logout = () => {
    return {
        type: Types.LOGOUT
    };
};
