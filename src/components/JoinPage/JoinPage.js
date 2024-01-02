import React from 'react';
import './JoinPage.css'; // Ensure you have a corresponding CSS file

const JoinPage = ({ language }) => {
  return (
    <div className="join-page">
      <h1>{language === 'EN' ? 'Join Our Team' : '加入我们'}</h1>
      <p>{language === 'EN' ? 'Thank you for showing interest in KinesioLog[Y]. We invite you to email us your resume, and we will contact you accordingly.' : '感谢您对KinesioLog[Y]表示兴趣。我们诚邀您通过电子邮件发送您的简历给我们，我们将会相应地与您联系。'}</p>
      <p><a href="mailto:kinesiolog.y.recruitment@gmail.com">kinesiolog.y.recruitment@gmail.com</a></p>
    </div>
  );
};

export default JoinPage;
