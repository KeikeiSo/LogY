import React, { useState, useEffect } from 'react';
import './TeamMemberComponent.css';
import teamMembers from './TeamMemberData'; // Adjust the path as needed
import logo from '../../assets/jy.jpg';

const TeamMemberComponent = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (true) {
        setCurrentIndex((currentIndex + 1) % teamMembers.length);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % teamMembers.length);
  };

  return (
    <div className="team-member-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="team-member">
        <img src={teamMembers[currentIndex].image} alt={teamMembers[currentIndex].name} />
        <h3>{teamMembers[currentIndex].name}</h3>
        <p> {language === 'EN' ? teamMembers[currentIndex].role : teamMembers[currentIndex].roleCn}</p>
        <p> {language === 'EN' ? teamMembers[currentIndex].description : teamMembers[currentIndex].descriptionCn}</p>
      </div>
      <div className="navigation-area left" onClick={goToPrevious}></div>
      <div className="navigation-area right" onClick={goToNext}></div>
    </div>
  );
};

export default TeamMemberComponent;
