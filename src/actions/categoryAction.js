import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const fetchCategoriesRequest = () => {
    return dispatch => {
        return callApi("api/categories", "GET", null).then(res => {
            if (res.status === 200)
                dispatch(
                    fetchCategories(
                        res.data.map(category => {
                            return {
                                id: category._id,
                                name: category.name,
                                image: category.image,
                                description: category.description
                            };
                        })
                    )
                );
        });
    };
};

export const addCategoryRequest = category => {
    return dispatch => {
        return callApi("api/categories", "POST", category).then(res => {
            if (res.status === 201)
                dispatch(
                    addCategory({
                        id: res.data._id,
                        name: res.data.name,
                        image: res.data.image,
                        description: res.data.description
                    })
                );
        });
    };
};

export const updateCategoryRequest = category => {
    return dispatch => {
        return callApi(`api/categories/${category.id}`, "PATCH", category).then(
            res => {
                if (res.status === 201)
                    dispatch(
                        updateCategory({
                            id: res.data._id,
                            name: res.data.name,
                            image: res.data.image,
                            description: res.data.description
                        })
                    );
            }
        );
    };
};

export const deleteCategoryRequest = id => {
    console.log(id);

    return dispatch => {
        return callApi(`api/categories/${id}`, "DELETE", null).then(res => {
            if (res.status === 204) dispatch(deleteCategory(id));
        });
    };
};

export const fetchCategories = categories => {
    return {
        type: Types.FETCH_CATEGORY,
        categories
    };
};

export const addCategory = category => {
    return {
        type: Types.ADD_CATEGORY,
        category
    };
};

export const updateCategory = category => {
    return {
        type: Types.UPDATE_CATEGORY,
        category
    };
};

export const deleteCategory = id => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    };
};

export const selectEditCategory = category => {
    return {
        type: Types.SELECT_EDIT_CATEGORY,
        category
    };
};
