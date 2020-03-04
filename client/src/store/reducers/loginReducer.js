import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGOUT_CLICKED,
    LOGOUT_SUCCESS
  } from "../actions/login.actions";
  
  const initialState = {
    message: "",
    user: {id: null, username: ''},
    token: '',
    loggedIn: false, 
    isLoading: false
  }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoading: true
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('userLoggedin', JSON.stringify(action.payload))
        return {
          ...action.payload,
          loggedIn: true,
          isLoading: false
        };
      case LOGIN_FAILED:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      case REGISTER_START:
        return {
          ...state,
          isLoading: true
        };
      case REGISTER_SUCCESS:
        return {
          ...action.payload,
          loggedIn: true,
          isLoading: false
        };
      case REGISTER_FAILED:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
          loggedIn: false
        };
      case LOGOUT_CLICKED:
          return {
              ...state,
              isLoading: true,
          };
      case LOGOUT_SUCCESS: 
          return {
              ...state,
              isLoading: false,
              loggedIn: false
          }

      default:
        return state;
    }
  };
  
  export default loginReducer;