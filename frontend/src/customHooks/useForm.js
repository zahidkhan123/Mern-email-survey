import { useState, useEffect } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [previousValues, setPreviousValues] = useState(values);
  useEffect(() => {
    setPreviousValues(values);
  }, [values]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return [values, previousValues, handleChange];
};

export default useForm;
