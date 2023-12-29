import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // The path should be relative to the current file
import { Link } from 'react-router-dom';
const Header = ({ language, toggleLanguage }) => {

    return (
      <header className="site-header">
        <Link to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></Link>
        <nav>
          <ul>
            <li><Link to="/about">{language === 'EN' ? 'About' : '关于'}</Link></li>
            <li><Link to="/contact">{language === 'EN' ? 'Contact' : '联系'}</Link></li>
            <li><Link to="/join">{language === 'EN' ? 'Join' : '加入'}</Link></li>
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
