import React from 'react';
import './MainHero.css';
import videoLoop from '../../assets/videoOne.gif'; // Update the import to the .gif file

const MainHero = ({ language }) => {
  // Function to handle click event
  const handleSurveyClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSepb2YvnSt8FCs8Xoh89u0FhIP_P4AptExUArCKnML_oCT5bg/viewform?usp=sharing", "_blank");
  };

  return (
    <div className="main-hero">
      <img autoPlay loop muted className="video-background" src={videoLoop} alt="Background Animation" />
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">KinesioLog[Y]</h1>
        <button className="cta-button">
          {language === 'EN' ? 'Get Early Access' : '获取早期访问'}
        </button>
        {/* Updated survey button with onClick handler */}
        <button className="survey-button" onClick={handleSurveyClick}>
          {language === 'EN' ? 'Take Our Survey' : '参与我们的调查'}
        </button>
      </div>
    </div>
  );
};

export default MainHero;
