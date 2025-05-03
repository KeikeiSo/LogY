import React, { useContext, useState, useEffect } from 'react';
import { TranslationsContext } from '../../App';
import './Header.css';
import logo from '../../assets/logos/logo.png'; 
import icon from '../../assets/icons/language_switch_icon.svg'
import ReserveButton from '../ReserveButton/ReserveButton';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleLanguage }) => {
  // reserve button url
  const reserveUrl = "https://meet.google.com/landing"

  const { translations, language } = useContext(TranslationsContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

    return (
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <NavLink to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></NavLink>
        <nav>
          <ul>
            <li><NavLink to="/home">{translations.home}</NavLink></li>
            <li><NavLink to="/about">{translations.about}</NavLink></li>
            <li><NavLink to="/services">{translations.services}</NavLink></li>
            <li><NavLink to="/contact">{translations.contact}</NavLink></li>
          </ul>
        </nav>
        <div className="language-switcher">
            <button onClick={toggleLanguage}>
              <img src={icon} alt="Laguage switch icon" className='language-icon'/>
                {language === 'en' ? 'Français' : 'English'}
            </button>
        </div>
        <ReserveButton 
          reserveUrl={reserveUrl}
          colorOption='orange'
        >
          {translations.reserve}
        </ReserveButton>
      </header>
    );
  };
  
  export default Header;
