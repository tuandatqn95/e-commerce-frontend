import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchUsersRequest = () => {
    return dispatch => {
        return callApi("users", "GET", null)
            .then(res => {
                dispatch(
                    fetchUsers(
                        res.data.map(user => {
                            return {
                                id: user._id,
                                email: user.email,
                                name: user.name,
                                phone: user.phone,
                                address: user.address,
                                hashPassword: user.hashPassword
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
                            password: res.data.hashPassword,
                            phone: res.data.phone,
                            address: res.data.address
                        })
                    );
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
