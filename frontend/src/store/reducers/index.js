import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import { surveyReducer } from './surverysReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   surveys :surveyReducer
});

export default rootReducer;