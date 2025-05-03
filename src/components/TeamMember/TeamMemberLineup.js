import React from 'react';
import TeamMemberTeaser from './TeamMemberTeaser';
import teamMembers from './TeamMemberData';
import './TeamMemberLineup.css';

const TeamMemberLineup = () => {
  return (
    <div className="team-lineup">
      {teamMembers.map((member) => (
        <TeamMemberTeaser key={member.name} member={member} />
      ))}
    </div>
  );
};

export default TeamMemberLineup;
