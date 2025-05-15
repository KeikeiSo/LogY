import React, { useContext, useState, useEffect } from 'react';
import { TranslationsContext } from '../../App';
import './Header.css';
import logo from '../../assets/logos/logo.png'; 
import icon from '../../assets/icons/language_switch_icon.svg'
import menu from '../../assets/icons/hamburger_menu.svg'
import close from '../../assets/icons/close.svg'
import ReserveButton from '../ReserveButton/ReserveButton';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleLanguage }) => {
  // reserve button url
  const reserveUrl = "https://forms.gle/AT8h5w7q477KVPTR7"

  const { translations, language } = useContext(TranslationsContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

    return (
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {isMobile ? (
          <>
          {isMobileMenuOpen ? (<>
            <button 
              className="close-button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <img src={close} alt='close button'></img>
            </button> </>)
            : (<> <button 
              className="hamburger-menu" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <img src={menu} alt='hamburger menu'></img>
            </button> </>)}
            <NavLink to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></NavLink>
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><NavLink to="" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{translations.home}</NavLink></li>
                <li><NavLink to="/our-team" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{translations.about}</NavLink></li>
                <li><NavLink to="/services" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{translations.services}</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{translations.contact}</NavLink></li>
              </ul>
            </nav>
            <div className="language-switcher">
              <button onClick={toggleLanguage}>
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/"><img src={logo} alt="KinesioLog[Y] Logo" className="logo" /></NavLink>
            <nav>
              <ul>
                <li><NavLink to="">{translations.home}</NavLink></li>
                <li><NavLink to="/our-team">{translations.about}</NavLink></li>
                <li><NavLink to="/services">{translations.services}</NavLink></li>
                <li><NavLink to="/contact">{translations.contact}</NavLink></li>
              </ul>
            </nav>
            <div className="language-switcher">
              <button onClick={toggleLanguage}>
                <img src={icon} alt="Language switch icon" className='language-icon'/>
                {language === 'en' ? 'Français' : 'English'}
              </button>
            </div>
          </>
        )}
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
