import * as Types from "./../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

export const addUserRequest = user =>{
    return {
        type:Types.ADD_USER,
        user
    }
}