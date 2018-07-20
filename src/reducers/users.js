import * as Types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem('@USERS'));
const initialState = data ? data : [];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER:
            var newUser = {
                id: 123,
                name: action.user.name,
                description: action.user.description,
                image: action.user.image,
            }
            state.push(newUser);
            localStorage.setItem('@USERS', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

export default reducer;