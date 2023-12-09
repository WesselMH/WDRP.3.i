import React from 'react';
import './Button.css'

const Button = ({ onClick, label }) => {
  return (
    <button className= "Button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;