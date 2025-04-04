import React from 'react';
import './Popup.css';

const Popup = ({ message, icon, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img src={icon} alt="Warning" className="popup-icon" />
        <p>{message}</p>
        <button onClick={onClose} className="button button-primary">
          Got it
        </button>
      </div>
    </div>
  );
};

export default Popup;
