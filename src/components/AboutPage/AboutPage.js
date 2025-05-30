import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import './AboutPage.css';
import { TranslationsContext } from '../../App';
import TeamMemberLineup from '../TeamMember/TeamMemberLineup';
import SocialQRLineup from './SocialQRLineup';
import teamMembers from '../TeamMember/TeamMemberData';

const AboutPage = () => {
  const { translations } = useContext(TranslationsContext);
  return (
      <div className="about-page">
        <Helmet>
        <title>{translations.aboutPageTitle || 'About Us - Kinesiolog-Y'}</title>
        <meta name="description" content={translations.aboutPageDescription || 'Learn about our team, mission, and values at Kinesiolog-Y'} />
        <meta property="og:title" content={translations.aboutPageTitle || 'About Us - Kinesiolog-Y'} />
        <meta property="og:description" content={translations.aboutPageDescription || 'Learn about our team, mission, and values at Kinesiolog-Y'} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kinesiolog-Y",
            "description": "Professional kinesiology and therapy services",
            "url": "https://logykinesiologie.ca/",
            "logo": "https://logykinesiologie.ca/logo.png",
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": "Kinesiologist",
              "description": member.specialties,
              "alumniOf": member.education,
              "hasCredential": member.certifications.length > 0 ? "Certified" : undefined
            }))
          })}
        </script>
      </Helmet>
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
