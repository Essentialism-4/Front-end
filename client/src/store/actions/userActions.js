import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const LOGOUT_CLICKED = 'LOGOUT_CLICKED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post("https://essentialism4-backend.herokuapp.com/api/auth/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id)
            return dispatch({ type: LOGIN_SUCCESS, payload: res })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILED, payload: err.response.data.message})
        })
}

export const getUserInfo = () => dispatch => {
    dispatch({ type: GET_USER_START });
    const id = localStorage.getItem('id')
    axiosWithAuth()
        .get(`https://essentialism4-backend.herokuapp.com/api/auth/${id}`)
        .then(res => {
            dispatch({ type: GET_USER_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_USER_FAILED, payload: err.response.data.message }))
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_CLICKED });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    dispatch({ type: LOGOUT_SUCCESS });
}