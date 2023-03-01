// import React, { useState } from 'react';
// import SurveyForm from './SurveyForm';
// import SurveyFormReview from './SurveyFormReview';

// const SurveyNew = () => {
//   const [isFormReview, setIsFormReview] = useState(false);
//   const [formValues, setFormValues] = useState({});
//   return <div>{isFormReview ? <SurveyFormReview onSurveyCancel={() => setIsFormReview(false)}/> : <SurveyForm onSurveySubmit={() => setIsFormReview(true)}/>} </div>;
// };

// export default SurveyNew;

import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [isFormReview, setIsFormReview] = useState(false);
  const [formValues, setFormValues] = useState({
    surveyTitle: '',
    subject: '',
    email: '',
    recipientList: '',
  });

  const handleFormSubmit = (values) => {
    setFormValues(values);
    setIsFormReview(true);
  };

  const handleFormEdit = () => {
    setIsFormReview(false);
  };

  return (
    <div>
      {isFormReview ? (
        <SurveyFormReview onFormEdit={handleFormEdit} formValues={formValues} />
      ) : (
        <SurveyForm
          onFormSubmit={handleFormSubmit}
          initialValues={formValues}
        />
      )}
    </div>
  );
};

export default SurveyNew;
