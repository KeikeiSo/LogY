import './App.css';
import Header from './components/Header/Header'; // Adjust the path as needed
import MainHero from './components/MainHero/MainHero';
import SecondPage from './components/SecondPage/SecondPage';
import TeamMemberComponent from './components/TeamMember/TeamMemberComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ContactPage from './components/ContactPage/ContactPage';
import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import JoinPage from './components/JoinPage/JoinPage';


function App() {
  const [language, setLanguage] = useState('EN'); // Start with 'EN' for English

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'CN' : 'EN'); // Toggle between 'EN' and 'CN'
  };

  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };
  return (
    <div className="App">
      <Router basename="/Kinesiolog-Y-Startup-Website">
        <ScrollToTop />
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={
            <>
            <MainHero language={language} />
            <SecondPage language={language} />
            <TeamMemberComponent language={language} />
            <FooterComponent language={language} />
            </>
          } />
          <Route path="/contact" element={<> <ContactPage language={language}/> <FooterComponent language={language} /></>} />
          <Route path="/about" element={<> <AboutPage language={language}/> <FooterComponent language={language} /></>} />
          <Route path="/join" element={<> <JoinPage language={language}/> <FooterComponent language={language} /></>} />
          {/* Define other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
