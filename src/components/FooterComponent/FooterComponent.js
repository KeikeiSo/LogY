import React, { useContext, useState } from 'react';
import './FooterComponent.css';
import { TranslationsContext } from '../../App';
import addressIcon from '../../assets/icons/address_light.svg';
import hourIcon from '../../assets/icons/hour_light.svg';
import phoneIcon from '../../assets/icons/phone_light.svg';
import emailIcon from '../../assets/icons/email_light.svg';
import sendEmailIcon from '../../assets/send_email.svg';
import checkIcon from '../../assets/icons/check.svg';
import closeIcon from '../../assets/icons/close.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import wechatIcon from '../../assets/icons/wechat.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import rednoteIcon from '../../assets/icons/rednote.png';

const FooterComponent = () => {
  const { translations } = useContext(TranslationsContext);
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setHasError(true);
    } else {
      try {
        await sendEmail(email)
        setHasError(false);
        setShowPopup(true);
        setEmail('');
      } catch (error) {
        console.error('Error sending email:', error);
        setHasError(true);
      }
    }
  };

  const sendEmail = async (email) => {}
  return (
    <div className="footer-container">
      <div className='footer-contact'>
        <h3>{translations.contact}</h3>
        <div className='footer-contact--address-detail'>
          <img src={addressIcon} alt="Address" />
          <p>{translations.addressDetail}</p>
        </div>
        <div className='footer-contact--open-hour'>
          <img src={hourIcon} alt="Hours" />
          <p>{translations.openHour}</p>
        </div>
        <div className='footer-contact--phone-number'>
          <img src={phoneIcon} alt="Phone" />
          <p>{translations.phoneNumber}</p>
        </div>
        <div className='footer-contact--email'>
          <img src={emailIcon} alt="Email" />
          <p>{translations.receptionEmail}</p>
        </div>
      </div>
      <div className='footer-career'>
        <h3>{translations.career}</h3>
        <p>{translations.wantToJoin}</p>
        <div className='footer-contact--email'>
          <img src={emailIcon} alt="Email" />
          <p>{translations.infoEmail}</p>
        </div>
      </div>
      <div className='footer-connect'>
        <h3>{translations.stayConnect}</h3>
        <p>{translations.stayUpdated}</p>
        <div className={`footer-subscribe ${hasError ? 'error' : ''}`}>
          <input 
            type="email" 
            placeholder={translations.emailPlaceholder}
            className='subscribe-input'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setHasError(false);
            }}
          />
          <button 
            className='subscribe-button'
            onClick={handleSubscribe}
          >
            {translations.subscribe}
          </button>
          {showPopup && (
            <div className="subscribe-popup">
              <button 
                className="popup-close"
                onClick={() => setShowPopup(false)}
              >
                <img src={closeIcon} alt="Close" />
              </button>
              <div className="popup-content">
                <img src={sendEmailIcon} alt="Email" className="popup-icon" />
                <img src={checkIcon} alt="Success" className="popup-check" />
                <p>{translations.subscribeSuccess}</p>
              </div>
            </div>
          )}
        </div>
        <div className='footer-social-media'>
          <a href="https://www.instagram.com/kinesio.log.y/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={rednoteIcon} alt="RedNote" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={wechatIcon} alt="WeChat" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
