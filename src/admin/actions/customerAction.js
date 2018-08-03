import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchCustomersRequest = () => {
    return dispatch => {
        return callApi("api/customers").then(res => {
            if (res.status === 200) {
                dispatch(
                    fetchCustomers(
                        res.data.map(customer => {
                            return {
                                id: customer._id,
                                email: customer.email,
                                name: customer.name,
                                phone: customer.phone,
                                address: customer.address
                            };
                        })
                    )
                );
            }
        });
    };
};

export const deleteCustomerRequest = id => {
    return dispatch => {
        return callApi(`api/customers/${id}`, "DELETE", null).then(res => {
            if (res.status === 204) dispatch(deleteCustomer(id));
        });
    };
};

export const deleteCustomer = id => {
    return {
        type: Types.DELETE_CUSTOMER,
        id
    };
};

export const fetchCustomers = customers => {
    return {
        type: Types.FETCH_CUSTOMER,
        customers
    };
};
