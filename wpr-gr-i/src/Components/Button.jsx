import React from "react";
import "./Button.css";
import {Link} from "react-router-dom";

const Button = ({ label, href }) => {
  return (
    <Link to={href}>
      <button className="Button">{label}</button>
    </Link>
  );
};

export default Button;
