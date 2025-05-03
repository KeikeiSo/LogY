import React, { useState, useContext} from 'react';
import './ServicesPage.css';
import Services, {ServiceGroups} from '../ServiceComponent/ServicesData';
import ServiceTeaser from '../ServiceComponent/ServiceTeaser';
import { TranslationsContext } from '../../App';

const ServicesPage = () => {
  const { translations, language } = useContext(TranslationsContext);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique service groups
  const serviceGroups = ['All', ...ServiceGroups.keys()];
  
  // Filter services based on active filter
  const filteredServices = activeFilter === 'All' 
    ? Services 
    : Services.filter(service => service.group === activeFilter);

  return (
    <div className="services-page">
      <h2>{translations.ourservice}</h2>
      <div className="filter-buttons">
        {serviceGroups.map(group => (
          <button
            key={group}
            className={`filter-button ${activeFilter === group ? 'active' : ''}`}
            onClick={() => setActiveFilter(group)}
          >
            {language === 'fr' ? ( group === 'All' ? 'Tout' : ServiceGroups.get(group) ) : group}
          </button>
        ))}
      </div>
      <p>{translations.allPricesTaxExcluded}</p>
      <div className="services-grid">
        {filteredServices.map(service => (
          <ServiceTeaser 
            key={service.name} 
            service={service} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
