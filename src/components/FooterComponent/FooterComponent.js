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
import instagramIcon from '../../assets/socialMedia/instagram.svg';
import wechatIcon from '../../assets/socialMedia/wechat.svg';
import facebookIcon from '../../assets/socialMedia/facebook.svg';
import rednoteIcon from '../../assets/socialMedia/rednote.png';
import emailjs from 'emailjs-com';

const FooterComponent = () => {
  const instagramUrl = "https://www.instagram.com/kinesio.log.y/";
  const facebookUrl = "https://www.facebook.com/share/19HL4T2ufw/?mibextid=wwXIfr";
  const rednoteUrl = "https://www.xiaohongshu.com/user/profile/5edc356f0000000001001ad0?xsec_token=YB3Z9S5dlK9g3hnZqLNpVIs-k46OoMXy2AQ1fdsToiVEQ=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c7a473b0000000016029f15&apptime=1746190852&share_id=fa4f704b00d94a06ace3e50d77963490";

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

  const sendEmail = async (email) => {
    emailjs.send(
      "service_rg5dmdk","template_wf9ym5q", {"email":email}, "7m1pKgjwOPTpOCozk"
    ).then(
      (result) => {
        console.info('Email sent!', result.text);
      },
      (error) => {
        console.error('Error:', error.text);
      }
    )
  }
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
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href={rednoteUrl} target="_blank" rel="noopener noreferrer">
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
