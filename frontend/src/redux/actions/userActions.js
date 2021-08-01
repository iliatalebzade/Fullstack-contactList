import * as actoinTypes from './consts/userConsts';
import axios from 'axios';

export const fetchAllUsersRequest = () => async (dispatch, useState) => {
    try {
        dispatch({ type: actoinTypes.FETCH_ALL_USERS_REQUEST })
        
        const { data } = await axios.get("/api/users");

        dispatch({
            type: actoinTypes.FETCH_ALL_USERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actoinTypes.FETCH_ALL_USERS_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response,
        })
    }
}

export const fetchAllUsersSuccess = () => {
    return {
        type: actoinTypes.FETCH_ALL_USERS_SUCCESS
    }
}

export const fetchAllUsersFailed = () => {
    return {
        type: actoinTypes.FETCH_ALL_USERS_FAILED
    }
}