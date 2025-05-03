import React from 'react';
import './SocialQRLineup.css';
import facebookQR from '../../assets/qrcode/facebook_qrcode.svg';
import instagramQR from '../../assets/qrcode/instagram_qrcode.svg';
import rednoteQR from '../../assets/qrcode/rednote_qrcode.svg';
import wechatQR from '../../assets/qrcode/wechat_qrcode.png';

const SocialQRLineup = () => {
  const socials = [
    {
        name: 'Instagram',
        qr: instagramQR,
        description: '@kinesio.log.y'
      },
    {
      name: 'Facebook',
      qr: facebookQR,
      description: '@LogY Kinésiologie'
    },
    {
        name: 'WeChat',
        qr: wechatQR,
        description: '@kinesiology01'
    },
    {
      name: 'Rednote',
      qr: rednoteQR,
      description: '@LogY Kinésiologie'
    }
  ];

  return (
    <div className="social-qr-lineup">
      {socials.map((social, index) => (
        <div key={index} className="social-qr-item">
          <h3>{social.name}</h3>
          <img src={social.qr} alt={`${social.name} QR Code`} className="qr-code" />
          <p>{social.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialQRLineup;
