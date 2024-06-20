import { useState, useEffect } from 'react';

const useValidation = (values) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age <= 0) {
      errors.age = 'Age must be greater than 0';
    }

    if (values.attendingWithGuest === 'yes' && !values.guestName.trim()) {
      errors.guestName = 'Guest Name is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return { errors, validate };
};

export default useValidation;
