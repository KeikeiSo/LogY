import React from 'react';
import './SocialQRLineup.css';
import facebookQR from '../../assets/socialMedia/qrcode/facebook_qrcode.svg';
import instagramQR from '../../assets/socialMedia/qrcode/instagram_qrcode.svg';
import rednoteQR from '../../assets/socialMedia/qrcode/rednote_qrcode.svg';
import wechatQR from '../../assets/socialMedia/qrcode/wechat_qrcode.png';
import { redirect } from 'react-router-dom';

const SocialQRLineup = () => {
  const socials = [
    {
        name: 'Instagram',
        qr: instagramQR,
        description: '@kinesio.log.y',
        redirectUrl: "https://www.instagram.com/kinesio.log.y/"
    },
    {
        name: 'Facebook',
        qr: facebookQR,
        description: '@LogY Kinésiologie',
        redirectUrl: "https://www.facebook.com/share/19HL4T2ufw/?mibextid=wwXIfr"
    },
    {
        name: 'WeChat',
        qr: wechatQR,
        description: '@kinesiology01',
        redirectUrl: "#"
    },
    {
        name: 'Rednote',
        qr: rednoteQR,
        description: '@LogY Kinésiologie',
        redirectUrl: "https://www.xiaohongshu.com/user/profile/5edc356f0000000001001ad0?xsec_token=YB3Z9S5dlK9g3hnZqLNpVIs-k46OoMXy2AQ1fdsToiVEQ=&xsec_source=app_share&xhsshare=CopyLink&appuid=5c7a473b0000000016029f15&apptime=1746190852&share_id=fa4f704b00d94a06ace3e50d77963490"
    }
  ];

  return (
    <div className="social-qr-lineup">
      {socials.map((social, index) => (
        <div key={index} className="social-qr-item">
          <h3>{social.name}</h3>
          <img src={social.qr} alt={`${social.name} QR Code`} className="qr-code" />
          <a href={social.redirectUrl} target="_blank" rel="noopener noreferrer">{social.description}</a>
        </div>
      ))}
    </div>
  );
};

export default SocialQRLineup;
