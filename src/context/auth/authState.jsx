import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from '../../types';
import AxiosClient from '../../config/axios';
import authToken from '../../config/token';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isauth: false,
    user: null,
    message: null,
    isloading: true
  }
  const [ state, dispatch ] = useReducer(authReducer, initialState);

  const registerUser = async fields => {
    try {
      const res = await AxiosClient.post('/api/users', fields);

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });

      getUser();
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data.msg
      });
    }
  }

  const getUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      // send token by header
      authToken(token);
    }
      try {
        const res = await AxiosClient.get('/api/auth');
        
        dispatch({
          type: GET_USER,
          payload: res.data.user
        });
      } catch (error) {
        console.log(error.response);

        dispatch({
          type: LOGIN_ERROR
        })
      }
  }

  const logIn = async fields => {
    try {
      const res = await AxiosClient.post('/api/auth', fields);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      getUser();
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      });
    }
  }

  const logOut = () => {
    dispatch({
      type: LOG_OUT
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isauth: state.isauth,
        user: state.user,
        message: state.message,
        isloading: state.isloading,
        registerUser,
        getUser,
        logIn,
        logOut
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;