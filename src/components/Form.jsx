import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export default function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'no',
    guestName: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigate('/summary', { state: { formData: values } });
      resetForm();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = 'Email must be a valid email address';
    }
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age <= 0) {
      errors.age = 'Age must be greater than 0';
    }
    if (values.attendingWithGuest === 'yes' && !values.guestName) {
      errors.guestName = 'Guest name is required if attending with a guest';
    }
    return errors;
  };

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      age: '',
      attendingWithGuest: 'no',
      guestName: '',
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
       
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          pattern="^\S+@\S+\.\S+$"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          min="1"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <div>
          <label>
            <input
              type="radio"
              name="attendingWithGuest"
              value="yes"
              checked={values.attendingWithGuest === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="attendingWithGuest"
              value="no"
              checked={values.attendingWithGuest === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>
      {values.attendingWithGuest === 'yes' && (
        <div>
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
        
          />
          {errors.guestName && <p className="error">{errors.guestName}</p>}
        </div>
      )}
      <center><button type="submit">Submit</button></center>
    </form>
  );
}
