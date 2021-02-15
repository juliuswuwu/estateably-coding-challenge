import React from 'react';
import { useSelector } from 'react-redux';
// import './App.css';

const Errors = () => {
  const errors = useSelector(state => state.errors);

  return (
    <ul>
      {Object.keys(errors).map((error, i) => (
        <li key={`error-${i}`}>
          {errors[error]}
        </li>
      ))}
    </ul>
  );
}

export default Errors;
