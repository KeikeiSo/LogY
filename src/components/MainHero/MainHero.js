import React from 'react';
import './MainHero.css';
import videoLoop from '../../assets/videoOne.gif'; // Update the import to the .gif file

const MainHero = ({ language }) => {
    return (
      <div className="main-hero">
        <img autoPlay loop muted className="video-background" src={videoLoop} alt="Background Animation" />
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">KinesioLog[Y]</h1>
          <button className="cta-button">
            {language === 'EN' ? 'Get Early Access' : '获取早期访问'}
          </button>
        </div>
      </div>
    );
};

export default MainHero;
