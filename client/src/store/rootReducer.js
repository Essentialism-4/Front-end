import { combineReducers } from 'redux';

import { initialStateReducer as original } from './reducers/initialState';
import { userStateReducer as user } from './reducers/userState';

export default combineReducers({
    original,
    user
})