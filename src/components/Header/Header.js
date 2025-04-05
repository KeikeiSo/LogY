import React, { useContext } from 'react';
import { TranslationsContext } from '../../App';
import './Header.css';
import logo from '../../assets/logo.jpg'; // The path should be relative to the current file
import { Link } from 'react-router-dom';
import ReserveButton from '../ReserveButton/ReserveButton';
const Header = ({ toggleLanguage }) => {
  const { translations, language } = useContext(TranslationsContext);

    return (
      <header className="site-header">
        <Link to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></Link>
        <nav>
          <ul>
            <li><Link to="/home">{translations.home}</Link></li>
            <li><Link to="/about">{translations.about}</Link></li>
            <li><Link to="/service">{translations.services}</Link></li>
            <li><Link to="/contact">{translations.contact}</Link></li>
          </ul>
        </nav>
        <div className="language-switcher">
            <button onClick={toggleLanguage}>
                {language === 'en' ? 'Français' : 'English'}
            </button>
        </div>
        <ReserveButton language={language}/>
      </header>
    );
  };
  
  export default Header;
