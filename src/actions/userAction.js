import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchUsersRequest = () => {
    return dispatch => {
        return callApi("users", "GET", null)
            .then(res => {
                if (res.status === 200)
                    dispatch(
                        fetchUsers(
                            res.data.map(user => {
                                return {
                                    id: user._id,
                                    email: user.email,
                                    name: user.name,
                                    phone: user.phone,
                                    address: user.address
                                };
                            })
                        )
                    );
            })
            .catch(error => console.log(error));
    };
};

export const addUserRequest = user => {
    return dispatch => {
        return callApi("users", "POST", user)
            .then(res => {
                if (res.status === 201)
                    dispatch(
                        addUser({
                            id: res.data._id,
                            name: res.data.name,
                            email: res.data.email,
                            phone: res.data.phone,
                            address: res.data.address
                        })
                    );
            })
            .catch(error => console.log(error));
    };
};

export const deleteUserRequest = id => {
    return dispatch => {
        return callApi(`users/${id}`, "DELETE", null)
            .then(res => {
                if (res.status === 204) dispatch(deleteUser(id));
            })
            .catch(error => console.log(error));
    };
};

export const updateUserRequest = user => {
    return dispatch => {
        return callApi(`users/${user.id}`, "PATCH", user)
            .then(res => {
                if (res.status === 201) dispatch(updateUser(user));
            })
            .catch(error => console.log(error));
    };
};

export const updatePasswordRequest = (id, oldPassword, newPassword) => {
    return dispatch => {
        return callApi(`users/${id}/update-password`, "PATCH", {
            oldPassword,
            newPassword
        })
            .then(res => {
                if (res.status === 201) console.log(res);
            })
            .catch(error => console.log(error));
    };
};
export const resetPasswordRequest = id => {
    return dispatch => {
        return callApi(`users/${id}/reset-password`, "PATCH", null)
            .then(res => {
                if (res.status === 201) console.log(res);
            })
            .catch(error => console.log(error));
    };
};
export const fetchUsers = users => {
    return {
        type: Types.FETCH_USER,
        users
    };
};

export const addUser = user => {
    return {
        type: Types.ADD_USER,
        user
    };
};

export const deleteUser = id => {
    return {
        type: Types.DELETE_USER,
        id
    };
};

export const updateUser = user => {
    return {
        type: Types.UPDATE_USER,
        user
    };
};

export const selectedEditUser = user => {
    return {
        type: Types.SELECT_EDIT_USER,
        user
    };
};

export const updatePassword = (id, oldPassword, newPassword) => {
    return {
        type: Types.UPDATE_PASSWORD,
        id,
        oldPassword,
        newPassword
    };
};

export const resetPassword = id => {
    return {
        type: Types.RESET_PASSWORD,
        id
    };
};
