import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGOUT_CLICKED = 'LOGOUT_CLICKED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = credentials => async dispatch => {
    try {
        dispatch({ type: LOGIN_START, payload: credentials });
        const user = await axiosWithAuth().post(`api/auth/login`, credentials);
        localStorage.setItem("token", JSON.stringify(user.data.token));
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              message: user.data.message,
              user: {...user.data.user, credentials}
            }
          });
      } catch (err) {
        dispatch({
          type: LOGIN_FAILED,
          payload: err
        });
      }
    };

    export const register = payload => dispatch => {
        console.log(payload, "this is the payload in register");
        dispatch({ type: REGISTER_START });
        axiosWithAuth()
          .post("api/auth/register", payload)
          .then(res => {
            console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            localStorage.setItem("token", res.data.token);
            console.log('token ', res.data.token)
          })
          .catch(err => 
            console.log(err)
          );
      };

export const logout = () => dispatch => {
    dispatch ({ type: LOGOUT_CLICKED });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    dispatch ({ type: LOGOUT_SUCCESS })
}
