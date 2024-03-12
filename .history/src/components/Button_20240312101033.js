import React from "react";

const Button = ({ label, color, onClick }) => {
  return (
    <button className={`custom-button ${color}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
