import React, { useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { TranslationsContext } from '../../App';
import teamMembers from './TeamMemberData';
import backwardArrow from '../../assets/icons/backward_arrow.svg';
import './TeamMemberPage.css';
import ReserveButton from '../ReserveButton/ReserveButton';

const TeamMemberPage = () => {
  const { translations, language } = useContext(TranslationsContext);
  const { name } = useParams();
  const memberName = name.replace(/-/g, ' ');
  const member = teamMembers.find(m => 
    m.name.toLowerCase() === memberName.toLowerCase()
  );

  if (!member) return <div>Team member not found</div>;

  return (
    <div className="team-member-page">
      <div className='team-member-page-title'>
        <Link to="/about" className="back-button">
          <img src={backwardArrow} alt="Back to about page" />
        </Link>
        <h2 className="member-name">{member.name}</h2>
      </div>
      <div className='team-member-page-content'>
        <div className="member-left-column">
          <img 
            src={member.imagePath} 
            alt={member.name}
            className="member-image"
          />
          {member.certifications.length > 0 && (
            <div className="certifications">
              <div className="certification-logos">
                {member.certifications.map((cert, index) => (
                  <img 
                    key={index}
                    src={cert}
                    alt={`${member.name} certification`}
                    className="certification-logo"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="member-right-column">
          <div className="member-education">
            <p dangerouslySetInnerHTML={{
              __html: (language === 'fr' ? member.educationDescriptionFr : member.educationDescription)
                .replace(/\n/g, '<br />')
            }} />
          </div>

          <div className="member-experience">
            <p dangerouslySetInnerHTML={{
              __html: (language === 'fr' ? member.experienceDescriptionFr : member.experienceDescription)
                .replace(/\n/g, '<br />')
            }} />
          </div>

          {member.specialties && (
            <div className="member-specialties">
              <p dangerouslySetInnerHTML={{
                __html: (language === 'fr' ? member.specialtiesFr : member.specialties)
                  .replace(/\n/g, '<br />')
              }} />
            </div>
          )}

          <div className="reserve-button-container">
            <ReserveButton 
              reserveUrl={member.reserveUrl}
              colorOption='orange'
            >
              {translations.bookHer}
            </ReserveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;
