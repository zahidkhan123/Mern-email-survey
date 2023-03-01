import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  SURVEY_SEND_REQUEST,
  SURVEY_SEND_SUCCESS,
  SURVEY_SEND_FAIL,
} from '../actionTypes';

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const res = await fetch('http://localhost:5000/api/v1/auth/currentUser', {
      credentials: 'include',
    });
    const { data } = await res.json();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data || false,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error?.message && error?.response?.data?.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const handleToken = (token) => async (dispatch) => {
  debugger;
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const data = await axios.post(
      'http://localhost:5000/api/v1/billing/stripe',
      token,
      {
        withCredentials: true,
        // credentials: 'include',
      }
    );
    debugger;
    // const { data } = await res.json();

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data || false,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error?.message && error?.response?.data?.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const submitSurvey = (values) => async (dispatch) => {
  debugger;
  try {
    dispatch({
      type: SURVEY_SEND_REQUEST,
    });
    const data = await axios.post(
      'http://localhost:5000/api/v1/survey/create',
      values,
      {
        withCredentials:true,
        credentials: 'include',
      }
    );
    debugger;
    dispatch({
      type: SURVEY_SEND_SUCCESS,
      payload: data || false,
    });
  } catch (error) {
    debugger;
    dispatch({
      type: SURVEY_SEND_FAIL,
      payload:
        error?.message && error?.response?.data?.message
          ? error.response.data.message
          : error.message,
    });
  }
};
