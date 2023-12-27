import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // The path should be relative to the current file

const Header = ({ language, toggleLanguage }) => {

    return (
      <header className="site-header">
        <a href="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></a>
        <nav>
          <ul>
            <li><a href="/about">{language === 'EN' ? 'About' : '关于'}</a></li>
            <li><a href="/contact">{language === 'EN' ? 'Contact' : '联系'}</a></li>
            <li><a href="/join">{language === 'EN' ? 'Join' : '加入'}</a></li>
          </ul>
        </nav>
        <div className="language-switcher">
            <button onClick={toggleLanguage}>
                {language === 'EN' ? '中文' : 'English'}
            </button>
        </div>
        
      </header>
    );
  };
  
  export default Header;
