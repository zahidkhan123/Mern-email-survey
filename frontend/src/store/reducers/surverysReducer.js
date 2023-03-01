import {
  SURVEY_SEND_FAIL,
  SURVEY_SEND_REQUEST,
  SURVEY_SEND_SUCCESS,
} from '../actionTypes';

export const surveyReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case SURVEY_SEND_REQUEST:
      return { loading: true };
    case SURVEY_SEND_SUCCESS:
      return { loading: false, surveys: action.payload };
    case SURVEY_SEND_FAIL:
      return { loading: false, error: action.payload || null };
    default:
      return state;
  }
};
