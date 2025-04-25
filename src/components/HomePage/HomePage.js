import React, { useContext } from 'react';
import './HomePage.css';
import ReserveButton from '../ReserveButton/ReserveButton';
import { TranslationsContext } from '../../App';

const HomePage = () => {
  const { translations } = useContext(TranslationsContext);
  
  return (
    <div className="home-page">
      <section className='home-page--general'>
        <h1>{translations.welcome}</h1>
        <p>{translations.homeDescription}</p>
        <p>{translations.servicesList}</p>
        <ReserveButton />
      </section>
      <section className='home-page--service'>
        <h2>{translations.feelQuestion}</h2>
        <div className='home-page--problem'>
          <p className='home-page--quote'>{}</p>
          <p className='home-page--quote'>{}</p>
          <p className='home-page--quote'>{}</p>
          <p className='home-page--quote'>{}</p>
        </div>
        <h2>{translations.takecare}</h2>
        <div className='home-page--service-photos'>
          <div className='home-page--service-photo'>
          </div>
          <div className='home-page--service-photo'>
          </div>
          <div className='home-page--service-photo'>
          </div>
          <div className='home-page--service-photo'>
          </div>
        </div>
        <button onClick={() => window.location.href = 'https://example.com'}>{"Check All"}</button>
      </section>
      <section className='home-page--professional'>
        <h2>{"We are professional"}</h2>
        <div className='home-page--logos'>
          <div className='home-page--logo'>
          </div>
          <div className='home-page--logo'>
          </div>
          <div className='home-page--logo'>
          </div>
          <div className='home-page--logo'>
          </div>
        </div>
      </section>
      <section className='home-page--reviews'>
        <h2>{"We’ve helped countless people relax and recover"}</h2>
        <div className='home-page--comments'>
          <div className='home-page--comment'>
          </div>
          <div className='home-page--comment'>
          </div>
          <div className='home-page--comment'>
          </div>
          <div className='home-page--comment'>
          </div>
        </div>
      </section>
      <section className='home-page--find-us'>
        <h2>{"Find us here"}</h2>
        <div className='home-page--map'>
        </div>
        <div className='home-page--address'>
          <div className='home-page--address-detail'>
          </div>
          <div className='home-page--metro-station'>
          </div>
          <div className='home-page--open-hour'>
          </div>
          <div className='home-page--phone-number'>
          </div>
          <ReserveButton />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
