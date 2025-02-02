import axios from 'axios';
// Define action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_ERROR = 'SET_ERROR';

// Define base URL for your API
const API_URL = 'http://localhost:3000/api';

// Action to handle login
export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    console.log(data);

    // Save the token in localStorage
    console.log(data.token);

    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.user.role);
    // Dispatch login success
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    return true;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response
        ? error.response.data.message
        : 'Something went wrong!',
    });
  }
};

// Action to handle signup
export const signup = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/signup`, formdata);

    // Save the token in localStorage
    //localStorage.setItem('token', data.token);

    // Dispatch signup success
    console.log(data.user);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response
        ? error.response.data.message
        : 'Something went wrong!',
    });
  }
};

// Action to fetch user profile (after login/signup)
export const getUserProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({
        type: SET_ERROR,
        payload: 'No token found, please log in!',
      });
      return;
    }

    const { data } = await axios.get(`${API_URL}/auth/profile`, {
      headers: {
        'x-access-token': token,
      },
    });

    dispatch({
      type: SET_USER_PROFILE,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response
        ? error.response.data.message
        : 'Error fetching profile!',
    });
  }
};

// Action to handle logout
export const logout = () => (dispatch) => {
  // Remove the token from localStorage
  localStorage.removeItem('token');

  dispatch({
    type: LOGOUT,
  });
};
