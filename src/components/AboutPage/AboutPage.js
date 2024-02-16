import React from 'react';
import './AboutPage.css'; // Make sure to create and import the corresponding CSS file

const AboutPage = ({ language }) => {
  return (
    <div className="about-page">
      <h1>{language === 'EN' ? 'About Us' : '关于我们'}</h1>
      <section>
        <h2>{language === 'EN' ? 'Mission Statement' : '我们的使命'}</h2>
        <p>{language === 'EN' ? 'At KinesioLog[Y], we aim to empower individuals towards optimal wellness through personalized care, education, and scientific evidence-based practices.' : '在KinesioLog[Y]，我们的目标是通过个性化护理、教育和基于科学证据的实践，帮助个人实现最佳健康状态。'}</p>
      </section>
    </div>
  );
};

export default AboutPage;
