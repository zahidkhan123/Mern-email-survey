import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../actionTypes';

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     withCredentials: true,
      
    //   },
    // };
    

    // const { data } = await axios.get(
    //   'http://localhost:5000/api/v1/auth/currentUser',
    //   config
    // );
    const res = await fetch('http://localhost:5000/api/v1/auth/currentUser',{
      credentials: "include"
    });
    const {data} = await res.json();
    const fulldata = res

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
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
