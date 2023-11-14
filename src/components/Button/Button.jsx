import React from "react";
import "./Button.scss";

const Button = ({ text, className }) => {
  return (
    <button className={className}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
