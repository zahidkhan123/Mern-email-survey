import { combineReducers } from 'redux';
import {userLoginReducer} from './authReducer';
import { surveyReducer } from './surverysReducer';

const rootReducer = combineReducers({
   userLogin: userLoginReducer,
   surveys :surveyReducer
});

export default rootReducer;