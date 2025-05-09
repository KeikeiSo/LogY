import React, {useContext} from 'react';
import './TeamMemberTeaser.css';
import { Link } from 'react-router-dom';
import { TranslationsContext } from '../../App';
import arrow from '../../assets/icons/acline_arrow.svg';
import ReserveButton from '../ReserveButton/ReserveButton';

const TeamMemberTeaser = ({ member}) => {
  const { translations } = useContext(TranslationsContext);
  const teamPagePath = `/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div className="team-member-teaser">
      <Link to={teamPagePath}>
        <img src={member.imagePath} alt={member.name} className="teaser-image" />
      </Link>
      <Link to={teamPagePath} className="teaser-name">
        {member.name}
        <img src={arrow} alt='link arrow'></img>
      </Link>
      <p className="teaser-education">{member.education}</p>
      <ReserveButton 
        reserveUrl={member.reserveUrl}
        colorOption='green'
      >
        {translations.bookHer}
      </ReserveButton>
    </div>
  );
};

export default TeamMemberTeaser;
