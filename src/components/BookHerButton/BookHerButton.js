import React from 'react';
import './BookHerButton.css';

const BookHerButton = ({ reserveUrl, colorOption = 'green', children }) => {
  return (
    <button 
      className={colorOption === 'orange' ? 'book-button-orange' : 'book-button'}
      onClick={() => window.location.href = reserveUrl}
    >
      {children}
    </button>
  );
};

export default BookHerButton;
