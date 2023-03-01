import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import validateEmails from '../../utils/validateEmail';
import { Link } from 'react-router-dom';

const SurveyForm = ({ onFormSubmit, initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues || {});
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = validateEmails(formValues.recipients);
    if (result == false) {
      setError(true);
    } else {
      onFormSubmit(formValues);
      setError(false);
    }
  };
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className='container center'>
      <h3>Create a New Survey</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <input
            type='text'
            name='surveyTitle'
            value={formValues.surveyTitle || ''}
            onChange={handleChange}
            required
          />
          <label htmlFor='surveyTitle'>Survey Title</label>
        </div>
        <div className='input-field'>
          <label htmlFor='subject'>Survey Subject</label>
          <input
            type='text'
            name='subject'
            id='subject'
            value={formValues.subject || ''}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            rows='5'
            value={formValues.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <input
            type='text'
            name='recipients'
            id='recipients'
            value={formValues.recipients || ''}
            onChange={handleChange}
          />
          <label htmlFor='recipientList'>Recipient List</label>
          {error && (
            <div className='card-panel red lighten-1'>
              <span className='white-text'>Please provide a valid email</span>
            </div>
          )}
        </div>
        <div className='center'>
          <button
            className=' waves-effect waves-light btn  right'
            name='action'
            type='submit'
          >
            Next
          </button>
          <Link
            to='/surveys'
            className='waves-effect waves-light btn red left'
            type='button'
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
