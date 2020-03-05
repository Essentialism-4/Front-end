import React from 'react';
import { useDispatch } from 'react-redux';

import Navigation from './Navigation';
import Value from './Values';
import UserValues from './UserValues';
import PrivateRoute from './PrivateRoute';

import { logout } from '../store/actions/loginActions';

const ValueList = () => {
    const dispatch = useDispatch()

    const handleLogout = e => {
        e.preventDefault();
        dispatch(logout());
      };
    
    return (
        <div>
            <Navigation logout = {handleLogout} />
            <Value />
            <PrivateRoute exact path = 'user-values' component = {UserValues} />
        </div>
    )
}

export default ValueList;