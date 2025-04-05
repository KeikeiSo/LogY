import React, { useContext } from 'react';
import './HomePage.css';
import ReserveButton from '../ReserveButton/ReserveButton';
import { TranslationsContext } from '../../App';

const HomePage = () => {
  const { translations } = useContext(TranslationsContext);
  
  return (
    <div className="home-page">
      <section className='general'>
        <h1>{translations.welcome}</h1>
        <p>{translations.homeDescription}</p>
        <p>{translations.servicesList}</p>
        <ReserveButton />
      </section>
      <section className='service'>
        <h2>{translations.feelQuestion}</h2>
        <div className='problems'>
          <div className='problem'>
            <p className='quote'>{translations.welcome}</p>
          </div>
        </div>
        <ReserveButton />
      </section>
    </div>
  );
};

export default HomePage;
