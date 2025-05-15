import React, { useContext } from 'react';
import './ServiceTeaser.css';
import { TranslationsContext } from '../../App';
import ReserveButton from '../ReserveButton/ReserveButton';

const ServiceTeaser = ({ service }) => {
  const { translations, language} = useContext(TranslationsContext);

  return (
    <div className="service-teaser" itemProp="item">
      <h3 className="service-name" itemProp="name">{language === 'fr' ? service.nameFr : service.name}</h3>
      <img src={service.image} alt={service.name} className="service-image" itemProp="image" />
      <p className="service-description" itemProp="description">{language === 'fr' ? service.descriptionFr : service.description}</p>
      
      <div className="service-prices">
        <ul>
          {service.prices.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
      </div>

      <div className="service-benefits">
        <ul>
          {language === 'fr' ? 
          service.benefitsFr.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          )) :
          service.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <ReserveButton 
        reserveUrl={service.reserveUrl}
        colorOption="green"
      >
        {translations.book}
      </ReserveButton>
    </div>
  );
};

export default ServiceTeaser;
