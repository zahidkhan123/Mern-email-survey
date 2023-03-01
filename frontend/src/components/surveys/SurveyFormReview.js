import React from 'react';
import {useDispatch} from 'react-redux'
import { submitSurvey } from '../../store/actions';
const SurveyFormReview = ({ formValues, onFormEdit }) => {
    const dispatch = useDispatch()
const {surveyTitle,email,subject,recipients} = formValues;
 const handleSubmit = () => {
    const values ={
        title:surveyTitle,
        body:email,
        subject,
        recipients
    }
    debugger
    dispatch(submitSurvey(values))
 }
  return (
    <div>
      <h2>Review Your Survey</h2>
      <div>
        <label>Survey Title</label>
        <div>{surveyTitle}</div>
      </div>
      <div>
        <label>Survey Subject</label>
        <div>{subject}</div>
      </div>
      <div>
        <label>Survey Body</label>
        <div>{email}</div>
      </div>
      <div>
        <label>Survey Recipients</label>
        <div>{recipients}</div>
      </div>
      <div className='center'>
           <button
            className=' waves-effect waves-light btn  right'
            name='action'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
         
          </button>
          <button
            // to='/surveys'
            className='waves-effect waves-light btn red left'
            type='button'
            onClick={onFormEdit}
          >
            Back
          </button>
        </div>
     
    </div>
  );
};

export default SurveyFormReview;