import React from 'react';
import './ReserveButton.css';

const ReserveButton = ({ reserveUrl, colorOption = 'green', children }) => {
    return (
      <button 
        className={colorOption === 'orange' ? 'reserve-button-orange' : 'reserve-button'}
        onClick={() => window.location.href = reserveUrl}
      >
        {children}
      </button>
    );
  };

export default ReserveButton;
