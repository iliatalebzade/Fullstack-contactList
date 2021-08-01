import * as actoinTypes from '../actions/consts/userConsts';

const initialState = {
    loading: true,
    users: [],
    error: ''
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case actoinTypes.FETCH_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actoinTypes.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case actoinTypes.FETCH_ALL_USERS_FAILED:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default: return state;
    }
}

export default usersReducer;