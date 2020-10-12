import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: localStorage.getItem('token'),
        isauth: true,
        message: null,
        isloading: false
      }
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isauth: false,
        message: action.payload,
        isloading: false
      }
    case GET_USER:
      return {
        ...state,
        isauth: true,
        user: action.payload,
        isloading: false
      }
    case LOG_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isauth: false,
        user: null,
        token: null,
        isloading: false
      }
    default:
      return state;
  }
}