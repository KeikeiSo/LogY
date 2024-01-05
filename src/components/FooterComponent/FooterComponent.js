import React from 'react';
import './FooterComponent.css';
import xhs from '../../assets/xhs.svg';
import ins from '../../assets/ins.svg';
// Import your social media icons here

const FooterComponent = ({ language }) => {
  return (
    <div className="footer-container">
      <h2>{language === 'EN' ? 'Support our start up?' : '支持我们的灵感？'}</h2>
      <p>{language === 'EN' ? 'Register to receive unique updates on human biomechanics and sports care. Follow our progress on the launch of new videos and gain early access opportunities. We provide only essential news and never send spam.' : '注册以获取关于人体机能学，运动护理的独特更新。关注我们推出新视频的进展，并获取提前访问的机会。只提供必要的新闻，绝不发送垃圾邮件。'}</p>
      <form className="email-signup">
        <input type="email" placeholder="Email" />
        <button type="submit">→</button>
      </form>
      <div className="social-media">
        <a href="https://www.xiaohongshu.com/user/profile/5edc356f0000000001001ad0?xhsshare=CopyLink&appuid=63038f9d00000000120033dc&apptime=1703434324&fbclid=IwAR1HxdoBZK8PbIpE5Oqh2Es-jdRIos142NVeEGfdQcZ0a4SqUSJgkt13VC4" target="_blank" rel="noopener noreferrer">
            <img src={xhs} alt="Xiaohongshu" />
        </a>
        <a href="https://www.instagram.com/kinesio.log.y/?fbclid=IwAR32TO9BgRaVwAyJnbgN3inpZUe08qvw_rgaveqCZpkiSe07SyEJ_7HHgdE" target="_blank" rel="noopener noreferrer">
            <img src={ins} alt="ins" />
        </a>
      </div>
      <footer>
        © 2024, KinesioLog[Y] Powered by Noshin & Kaifan
      </footer>
    </div>
  );
};

export default FooterComponent;