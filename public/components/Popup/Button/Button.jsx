import React from 'react';
import './Button.css';

const Button = ({ icon, text, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`button button-${variant}`} 
      onClick={onClick}
    >
      {icon && <img src={icon} alt={text} />}
      {text}
    </button>
  );
};

export default Button;
