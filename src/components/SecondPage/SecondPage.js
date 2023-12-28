// SecondPage.js

import React from 'react';
import './SecondPage.css';

const SecondPage = ({ language }) => {
  return (
    <div className="second-page">
      <div className="text-container">
        <p>
          {language === 'EN' ? 'Meet the minds behind KinesioLog[Y] – a dynamic trio of kinesiology enthusiasts from McGill University, Montreal, Canada.' : '遇见KinesioLog[Y]背后的智慧 - 来自加拿大蒙特利尔麦吉尔大学的三位运动生理学爱好者，他们充满活力和热情。'}
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
