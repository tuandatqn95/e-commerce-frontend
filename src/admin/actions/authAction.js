import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const authRequest = () => {
    return dispatch => {
        return callApi("admin/auth")
            .then(res => {
                if (res.status === 200) {
                    dispatch(login(res.data.payload));
                }
            })
            .catch(err => {
                dispatch(logout());
            });
    };
};

export const loginRequest = (user, cb) => {
    return dispatch => {
        return callApi("admin/login", "POST", user)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    return dispatch(login(res.data.payload));
                }
            })
            .catch(err => {
                cb(err.response);
            });
    };
};

export const logoutRequest = user => {
    return dispatch => {
        localStorage.removeItem("token");
        dispatch(logout());
    };
};

export const login = user => {
    return {
        type: Types.LOGIN,
        user: user
    };
};

export const logout = () => {
    return {
        type: Types.LOGOUT
    };
};
