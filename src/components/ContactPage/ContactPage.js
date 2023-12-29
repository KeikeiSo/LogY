import React from 'react';
import './ContactPage.css'; // Make sure to create and import the corresponding CSS file
import qrCodeImage from '../../assets/qr-code.jpg'; // Adjust the path to your QR code image

const ContactPage = ({ language }) => {
  return (
    <div className="contact-page">
      <h1>{language === 'EN' ? 'Contact Us' : '联系我们'}</h1>
      <p>{language === 'EN' ? 'Email: ' : '邮箱：'}<a href="mailto:kinesio.logyyyy@gmail.com">kinesio.logyyyy@gmail.com</a></p>
      <div className="qr-code-container">
        <img src={qrCodeImage} alt="QR Code" />
      </div>
    </div>
  );
};

export default ContactPage;
