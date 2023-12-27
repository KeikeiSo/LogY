import './App.css';
import Header from './components/Header/Header'; // Adjust the path as needed
import MainHero from './components/MainHero/MainHero';
import SecondPage from './components/SecondPage/SecondPage';
import TeamMemberComponent from './components/TeamMember/TeamMemberComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import React, { useState } from 'react';
function App() {
  const [language, setLanguage] = useState('EN'); // Start with 'EN' for English

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'CN' : 'EN'); // Toggle between 'EN' and 'CN'
  };
  return (
    <div className="App">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <MainHero language={language} />
      <SecondPage language={language} />
      <TeamMemberComponent language={language} />
      <FooterComponent language={language} />
    </div>
  );
}

export default App;
