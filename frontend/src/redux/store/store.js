import { applyMiddleware, combineReducers, createStore } from 'redux';
import usersReducer from '../reducers/usersReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 