import './App.css';
import Header from './components/Header/Header'; // Adjust the path as needed
import TeamMemberPage from './components/TeamMember/TeamMemberPage';
import FooterComponent from './components/FooterComponent/FooterComponent';
import React, { useState, useEffect, createContext } from 'react';
import enTranslations from './constants/en';
import frTranslations from './constants/fr';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';


function App() {
  const [language, setLanguage] = useState('en'); // Start with English
  const translations = language === 'en' ? enTranslations : frTranslations;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en'); // Toggle between English and French
  };

  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };
  return (
    <TranslationsContext.Provider value={{ translations, language }}>
      <div className="App">
        <Router>
        <ScrollToTop />
        <Header toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={
            <>
            <HomePage/>
            <FooterComponent/>
            </>
          } />
          <Route path="/about" element={<> <AboutPage/> <FooterComponent /></>} />
          <Route path="/services" element={<> <ServicesPage/> <FooterComponent /></>} />
          <Route path="/contact" element={<> <ContactPage/> <FooterComponent/></>} />
          <Route path="/team/:name" element={<> <TeamMemberPage/> <FooterComponent/></>} />
          {/* Define other routes here */}
        </Routes>
        </Router>
      </div>
    </TranslationsContext.Provider>
  );
}

export default App;
export const TranslationsContext = createContext();
