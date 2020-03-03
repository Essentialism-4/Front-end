import { combineReducers } from 'redux';

import { initialState } from './reducers/initialState';
import { userState } from './reducers/userState';

export default combineReducers({
    initialState,
    userState
})