import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'no',
    guestName: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      age: '',
      attendingWithGuest: 'no',
      guestName: ''
    });
  };

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm
  };
};

export default useForm;
