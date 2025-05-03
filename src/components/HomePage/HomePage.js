import React, { useContext, useRef, useState, useEffect } from 'react';
import './HomePage.css';
import ReserveButton from '../ReserveButton/ReserveButton';
import { TranslationsContext } from '../../App';
import massageImg from '../../assets/massage.png';
import rehabImg from '../../assets/rehab.png';
import fitnessImg from '../../assets/fitness.png';
import chineseMedImg from '../../assets/chinese_med.png';
import csepLogo from '../../assets/logos/csep.png';
import amqLogo from '../../assets/logos/amq.png';
import nscaLogo from '../../assets/logos/nsca.png';
import pnLogo from '../../assets/logos/pn.png';
import starIcon from '../../assets/icons/star.svg';
import leftArrow from '../../assets/icons/leftArrow.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import addressIcon from '../../assets/icons/address.svg';
import metroIcon from '../../assets/icons/metro.svg';
import hourIcon from '../../assets/icons/hour.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  // reserve url for the reserve button
  const reserveUrl = "#"

  const { translations } = useContext(TranslationsContext);
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      setShowLeftArrow(slider.scrollLeft > 0);
      setShowRightArrow(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 1
      );
    };

    slider.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="home-page">
      <section className='home-page--general'>
        <div className='home-page--general-left'>
          <h1>{translations.welcome}</h1>
          <p>{translations.homeDescription}</p>
          <p>{translations.servicesList}</p>
          <ReserveButton 
            reserveUrl={reserveUrl}
            colorOption='orange'
          >
            {translations.reserve}
        </ReserveButton>
        </div>
      </section>
      <section className='home-page--service'>
        <h2>{translations.doYouFeel}</h2>
        <div className='home-page--problems'>
          <div className='home-page--problem'>
            <p>{translations.chronicPainDescription}</p>
            <p className='home-page--problem-hashtag'>{translations.chronicPainProblem}</p>
          </div>
          <div className='home-page--problem'>
            <p>{translations.mobilityDescription}</p>
            <p className='home-page--problem-hashtag'>{translations.mobilityProblem}</p>
          </div>
          <div className='home-page--problem'>
            <p>{translations.injuryDescription}</p>
            <p className='home-page--problem-hashtag'>{translations.injuryProblem}</p>
          </div>
          <div className='home-page--problem'>
            <p>{translations.surgeryDescription}</p>
            <p className='home-page--problem-hashtag'>{translations.surgeryProblem}</p>
          </div>
        </div>
        <h2>{translations.takecare}</h2>
        <h3>{translations.ourservice}</h3>
        <div className='home-page--service-photos'>
          <div className='home-page--service-photo'>
            <img src={massageImg} alt="Massage Therapy" />
            <NavLink>{translations.massage}</NavLink>
          </div>
          <div className='home-page--service-photo'>
            <img src={rehabImg} alt="Physical Rehabilitation" />
            <NavLink>{translations.physicRehab}</NavLink>
          </div>
          <div className='home-page--service-photo'>
            <img src={fitnessImg} alt="Performance Fitness" />
            <NavLink>{translations.perforFitness}</NavLink>
          </div>
          <div className='home-page--service-photo'>
            <img src={chineseMedImg} alt="Chinese Medicine" />
            <NavLink>{translations.chineseMedicine}</NavLink>
          </div>
        </div>
        <div className='home-page--service-checkall'>
          <button onClick={() => window.location.href = 'https://example.com'}>{"Check All"}</button>
        </div>
      </section>
      <section className='home-page--professional'>
        <h2>{translations.professional}</h2>
        <div className='home-page--logos'>
          <div className='home-page--logo'>
            <img src={csepLogo} alt="CSEP Certified" />
            <p>{translations.csepCertified}</p>
          </div>
          <div className='home-page--logo'>
            <img src={amqLogo} alt="AMQ Registered" />
            <p>{translations.amqRegistered}</p>
          </div>
          <div className='home-page--logo'>
            <img src={nscaLogo} alt="NSCA Certified" />
            <p>{translations.nscaCertified}</p>
          </div>
          <div className='home-page--logo'>
            <img src={pnLogo} alt="PN Certified" />
            <p>{translations.pnCertified}</p>
          </div>
        </div>
      </section>
      <section className='home-page--reviews'>
        <h2>{translations.weHelpPeople}</h2>
        <div className='home-page--comments-container'>
          {showLeftArrow && (
            <button className='home-page--slider-arrow left' onClick={slideLeft}>
              <img src={leftArrow} alt="Previous reviews"></img>
            </button>
          )}
          <div className='home-page--comments-slider' ref={sliderRef}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className='home-page--comment'>
                <div className='home-page--reviewer'>
                  <img 
                    src={require(`../../assets/icons/reviewer${i}.svg`)} 
                    alt="Reviewer icon"
                    className='home-page--reviewer-icon'
                  />
                  <p>{translations[`reviewer${i}`]}</p>
                </div>
                <div className='home-page--review'>
                  <p>{translations[`review${i}`]}</p>
                  <div className='home-page--review-stars'>
                    {[...Array(5)].map((_, j) => (
                      <img key={j} src={starIcon} alt="star"/>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showRightArrow && (
            <button className='home-page--slider-arrow right' onClick={slideRight}>
              <img src={rightArrow} alt="Next reviews"></img>
            </button>
          )}
        </div>
      </section>
      <section className='home-page--find-us'>
        <h2>{translations.findUsHere}</h2>
        <div className='home-page-find-us-container'>
          <div className='home-page--map'>
            <iframe title="google map embed" width="100%" height="300" load="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:EjYxNDcwIFJ1ZSBQZWVsIHN1aXRlIDgyMCwgTW9udHLDqWFsLCBRQyBIM0EgMVQxLCBDYW5hZGEiJRojChYKFAoSCXsv2WVBGslMEQmbsvcuow3XEglzdWl0ZSA4MjA&key=AIzaSyAx4r2NNwSaHb51Yf24lb0lrfA1xJ330Vk"></iframe>
          </div>
          <div className='home-page--address'>
            <h3>{translations.addressTitle}</h3>
            <div className='home-page--address-detail'>
              <img src={addressIcon} alt="Address" />
              <p>{translations.addressDetail}</p>
            </div>
            <div className='home-page--metro-station'>
              <img src={metroIcon} alt="Metro" />
              <p>{translations.metroStation}</p>
            </div>
            <div className='home-page--open-hour'>
              <img src={hourIcon} alt="Hours" />
              <p>{translations.openHour}</p>
            </div>
            <div className='home-page--phone-number'>
              <img src={phoneIcon} alt="Phone" />
              <p>{translations.phoneNumber}</p>
            </div>
            <ReserveButton 
            reserveUrl={reserveUrl}
            colorOption='orange'
              >
            {translations.reserve}
            </ReserveButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
