import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ServicesPage.css';
import Services, {ServiceGroups} from '../ServiceComponent/ServicesData';
import ServiceTeaser from '../ServiceComponent/ServiceTeaser';
import { TranslationsContext } from '../../App';

const ServicesPage = () => {
  const { translations, language } = useContext(TranslationsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');

  // Initialize filter from URL on component mount
  useEffect(() => {
    const filterFromUrl = searchParams.get('filter');
    if (filterFromUrl && ServiceGroups.has(filterFromUrl)) {
      setActiveFilter(filterFromUrl);
    }
  }, [searchParams]);
  
  // Get unique service groups
  const serviceGroups = ['All', ...ServiceGroups.keys()];
  
  // Filter services based on active filter
  const filteredServices = activeFilter === 'All' 
    ? Services 
    : Services.filter(service => service.group === activeFilter);

  // Generate meta description from services
  const metaDescription = language === 'fr' 
    ? `Services de ${translations.ourservice} incluant ${ServiceGroups.get('Massage Therapy')}, ${ServiceGroups.get('Physical Rehabilitation')}, et plus.`
    : `${translations.ourservice} services including ${[...ServiceGroups.keys()].join(', ')}.`;

  return (
    <div className="services-page">
      <Helmet>
        <title>{translations.ourservice} | Logy Kinesiologie</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${translations.ourservice} | Logy Kinesiologie`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://logykinesiologie.ca/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": Services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.name,
                "description": service.description,
                "image": `https://logykinesiologie.ca${service.image}`,
                "offers": {
                  "@type": "Offer",
                  "price": service.prices[0].replace(/[^0-9.]/g, ''),
                  "priceCurrency": "CAD"
                }
              }
            }))
          })}
        </script>
      </Helmet>
      <h2>{translations.ourservice}</h2>
      <div className="filter-buttons">
        {serviceGroups.map(group => (
          <button
            key={group}
            className={`filter-button ${activeFilter === group ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(group);
              setSearchParams(group === 'All' ? {} : { filter: group });
            }}
          >
            {language === 'fr' ? ( group === 'All' ? 'Tout' : ServiceGroups.get(group) ) : group}
          </button>
        ))}
      </div>
      <p>{translations.allPricesTaxExcluded}</p>
      <div className="services-grid" itemScope itemType="https://schema.org/ItemList">
        {filteredServices.map((service, index) => (
          <div itemScope itemType="https://schema.org/Service" itemProp="itemListElement" key={service.name}>
            <ServiceTeaser 
              service={service} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
