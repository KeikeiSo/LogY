import React, { useContext } from 'react';
import { TranslationsContext } from '../../App';
import './Header.css';
import logo from '../../assets/logos/logo.png'; 
import icon from '../../assets/icons/language_switch_icon.svg'
import ReserveButton from '../ReserveButton/ReserveButton';
import { NavLink } from 'react-router-dom';
const Header = ({ toggleLanguage }) => {
  const { translations, language } = useContext(TranslationsContext);

    return (
      <header className="site-header">
        <NavLink to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></NavLink>
        <nav>
          <ul>
            <li><NavLink to="/home">{translations.home}</NavLink></li>
            <li><NavLink to="/about">{translations.about}</NavLink></li>
            <li><NavLink to="/service">{translations.services}</NavLink></li>
            <li><NavLink to="/contact">{translations.contact}</NavLink></li>
          </ul>
        </nav>
        <div className="language-switcher">
            <button onClick={toggleLanguage}>
              <img src={icon} alt="Laguage switch icon" className='language-icon'/>
                {language === 'en' ? 'Français' : 'English'}
            </button>
        </div>
        <ReserveButton language={language}/>
      </header>
    );
  };
  
  export default Header;
