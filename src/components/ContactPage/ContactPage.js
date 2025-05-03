import React from 'react';
import './ContactPage.css'; // Make sure to create and import the corresponding CSS file

const ContactPage = ({ language }) => {
  return (
    <div className="contact-page">
      <h1>{language === 'EN' ? 'Contact Us' : '联系我们'}</h1>
      <p>{language === 'EN' ? 'Email: ' : '邮箱：'}<a href="mailto:kinesio.logyyyy@gmail.com">kinesio.logyyyy@gmail.com</a></p>
    </div>
  );
};

export default ContactPage;
