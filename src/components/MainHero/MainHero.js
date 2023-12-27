// MainHero.js

import React from 'react';
import './MainHero.css';
import videoLoop from '../../assets/videoOne.mp4';; // Make sure the path is correct

const MainHero = ({ language }) => {
    return (
      <div className="main-hero">
        <video autoPlay loop muted className="video-background">
          <source src={videoLoop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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