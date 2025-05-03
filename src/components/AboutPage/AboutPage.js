import React, { useContext } from 'react';
import './AboutPage.css';
import { TranslationsContext } from '../../App';
import TeamMemberLineup from '../TeamMember/TeamMemberLineup';
import SocialQRLineup from './SocialQRLineup';

const AboutPage = () => {
  const { translations } = useContext(TranslationsContext);
  return (
    <div className="about-page">
      <session className="about-page-mission">
        <h2>{translations.ourMission}</h2>
        <p>{translations.missionStatement}</p>
      </session>
      <session className="about-page-our-team">
        <h2>{translations.meetOurTeam}</h2>
        <TeamMemberLineup />
      </session>
      <session className="about-page-follow-us">
        <h2>{translations.followUs}</h2>
        <SocialQRLineup />
      </session>
    </div>
  );
};

export default AboutPage;
