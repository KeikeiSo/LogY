import React, { useContext } from 'react';
import './ServiceTeaser.css';
import { TranslationsContext } from '../../App';
import ReserveButton from '../ReserveButton/ReserveButton';

const ServiceTeaser = ({ service }) => {
  const { translations } = useContext(TranslationsContext);

  return (
    <div className="service-teaser">
      <img src={service.image} alt={service.name} className="service-image" />
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      
      <div className="service-prices">
        <h4>{translations.prices || 'Prices'}:</h4>
        <ul>
          {service.prices.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
      </div>

      <div className="service-benefits">
        <h4>{translations.benefits || 'Benefits'}:</h4>
        <ul>
          {service.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <ReserveButton 
        reserveUrl={service.reserveUrl}
        colorOption="green"
      >
        {translations.book || 'Book'}
      </ReserveButton>
    </div>
  );
};

export default ServiceTeaser;
