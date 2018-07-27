import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchProductsRequest = () => {
    return dispatch => {
        return callApi("products", "GET", null).then(res => {
            dispatch(
                fetchProducts(
                    res.data.map(product => {
                        return {
                            id: product._id,
                            name: product.name,
                            image: product.image,
                            description: product.description,
                            price: product.price,
                            inventory: product.inventory,
                            category: product.category
                        };
                    })
                )
            );
        });
    };
};

export const addProductRequest = product => {
    return dispatch => {
        return callApi("products", "POST", product).then(
            res => {
                dispatch(addProduct(product));
            }
        );
    };
};

export const updateProductRequest = product => {
    return dispatch => {
        return callApi(`products/${product.id}`, "PUT", product).then(
            res => {
                dispatch(updateProduct(product));
            }
        );
    };
};

export const deleteProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, "DELETE", null).then(res => {
            dispatch(deleteProduct(id));
        });
    };
};

export const fetchProducts = products => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    };
};

export const addProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    };
};

export const updateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    };
};

export const deleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    };
};

export const selectEditProduct = product => {
    return {
        type: Types.SELECT_EDIT_PRODUCT,
        product
    };
};
