import React, { useContext, useState } from 'react';
import { TranslationsContext } from '../../App';
import './ContactPage.css';
import phoneIcon from '../../assets/icons/phone.svg';
import addressIcon from '../../assets/icons/address.svg';
import metroIcon from '../../assets/icons/metro.svg';
import emailIcon from '../../assets/icons/email.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import wechatIcon from '../../assets/icons/wechat.svg';
import rednoteIcon from '../../assets/icons/rednote.svg';
import messageIcon from '../../assets/message_sended.svg';
import checkIcon from '../../assets/icons/check.svg';
import closeIcon from '../../assets/icons/close.svg';
import emailjs from 'emailjs-com';


const ContactPage = () => {
  const contactInfo = [
    {
      name: 'Email',
      icon: emailIcon,
      description: 'logy.reception@gmail.com',
      redirectUrl: "mailto:logy.reception@gmail.com"
    },
    {
        name: 'Instagram',
        icon: instagramIcon,
        description: '@kinesio.log.y',
        redirectUrl: "https://www.instagram.com/kinesio.log.y/"
    },
    {
        name: 'Facebook',
        icon: facebookIcon,
        description: '@LogY Kinésiologie',
        redirectUrl: "https://www.facebook.com/share/19HL4T2ufw/?mibextid=wwXIfr"
    },
    {
        name: 'WeChat',
        icon: wechatIcon,
        description: '@kinesiology01',
        redirectUrl: "#"
    },
    {
        name: 'Rednote',
        icon: rednoteIcon,
        description: '@LogY Kinésiologie',
        redirectUrl: "https://www.xiaohongshu.com/user/profile/5edc356f0000000001001ad0?xsec_token=YB3Z9S5dlK9g3hnZqLNpVIs-k46OoMXy2AQ1fdsToiVEQ=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c7a473b0000000016029f15&apptime=1746190852&share_id=fa4f704b00d94a06ace3e50d77963490"
    }
  ];

  const [showPopup, setShowPopup] = useState(false);
  const { translations } = useContext(TranslationsContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const sendEmail = async (subject, body) => {
    const content = {
      subject: subject,
      body: body,
    }
    emailjs.send('service_2gxcaoj', 'template_beitq8s', content, 'An7PyGMVvY90pd9o8')
      .then(
        () => {
          console.info('Email sent!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
        },
      );
  }

  return (
    <div className="contact-page">
      <div className='contact-page-container-left'>
        <div className='contact-us'>
          <h2>{translations.contactUs}</h2>
          <div className='contact-us--phone-number'>
            <img src={phoneIcon} alt="Phone"/>
            <p>{translations.phoneNumber}</p>
          </div>
          {contactInfo.map((contact, index) => (
            <div key={index} className={`contact-us--${contact.name.toLowerCase()}`}>
              <img src={contact.icon} alt={contact.name} />
              <a href={contact.redirectUrl} target="_blank" rel="noopener noreferrer">{contact.description}</a>
            </div>
          ))}
        </div>
        <div className='find-us-here'>
          <h2>{translations.findUs}</h2>
          <div className='find-us--address-detail'>
            <img src={addressIcon} alt="Address" />
            <p>{translations.addressDetail}</p>
          </div>
          <div className='find-us--metro-station'>
            <img src={metroIcon} alt="Metro" />
            <p>{translations.metroStation}</p>
          </div>
        </div>
      </div>
      <div className='contact-page-container-right'>
        <h2>{translations.sendMessage}</h2>
        <div className='message-form'>
          <form onSubmit={(e) => {
            e.preventDefault();
            const subject = `Message from Customer ${formData.firstName} ${formData.lastName}`;
            const body = `Name: ${formData.firstName} ${formData.lastName} \nEmail: ${formData.email} \nPhone: ${formData.phone} \n\nMessage: \n${formData.message}`;
            sendEmail(subject, body);
            setShowPopup(true);
          }}>
            <div className="form-row">
              <div className="form-group">
                <label>{translations.firstName || "First Name"}</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{translations.lastName || "Last Name"}</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{translations.email || "Email"}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{translations.phone || "Phone Number"}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>{translations.message || "Your Message"}</label>
              <textarea
                value={formData.message}
                onChange={(e) => {
                  if (e.target.value.length <= 400) {
                    setFormData({...formData, message: e.target.value});
                  }
                }}
                maxLength="400"
                required
              />
              <div className="character-counter">
                {formData.message.length}/400
              </div>
            </div>
            <button type="submit" className="submit-button">
              {translations.send || "Send Message"}
            </button>
          </form>
        </div>
        {showPopup && (
            <div className="message-popup">
              <button 
                className="popup-close"
                onClick={() => setShowPopup(false)}
              >
                <img src={closeIcon} alt="Close" />
              </button>
              <div className="popup-content">
                <img src={messageIcon} alt="Email" className="popup-icon" />
                <img src={checkIcon} alt="Success" className="popup-check" />
                <p>{translations.messageSent}</p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ContactPage;
