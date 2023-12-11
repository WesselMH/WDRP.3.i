import React from 'react';
import './Button.css'

const Button = ({label ,href}) => {
  return (
    <button className= "Button" onClick={(e) => {
      e.preventDefault();
      window.location.href = href;
      }}>
      {label}
    </button>
  );
};

export default Button;