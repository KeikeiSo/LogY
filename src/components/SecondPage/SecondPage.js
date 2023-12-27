// SecondPage.js

import React from 'react';
import './SecondPage.css';

const SecondPage = ({ language }) => {
  return (
    <div className="second-page">
      <div className="text-container">
        <p>
          {language === 'EN' ? 'Meet our diverse team of experts dedicated to empowering you through comprehensive knowledge of human biomechanics, personalized training, consulting services, and certified massage therapy.' : '欢迎了解我们的专业团队，专注于分享人体机能学、个性化训练、咨询服务以及认证按摩疗法。'}
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
