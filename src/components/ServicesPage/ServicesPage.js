import React, { useState } from 'react';
import './ServicesPage.css'; // This imports the CSS file
import massage from '../../assets/massage.jpg'; // The path should be relative to the current file
import deeptissue from '../../assets/deeptissue.jpeg'; // The path should be relative to the current file
import therapeutic from '../../assets/therapy.jpeg'; // The path should be relative to the current file
import sports from '../../assets/sports.avif'; // The path should be relative to the current file
import cupping from '../../assets/cupping.webp'; // The path should be relative to the current file
import kinesiotherapy from '../../assets/kinesiotherapy.jpg'; // The path should be relative to the current file

const Section = ({ title, description, buttonText, imageSrc, altText, price }) => {
    const [showPrice, setShowPrice] = useState(false); // State to control the visibility of the price
  const sectionStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  const handleClick = () => {
    setShowPrice(true); // Set showPrice to true to show the price and hide the button
  };

  return (
    <div className="sectionA" style={sectionStyle}>
      <div className="contentA">
        <h2 className="h2A">{title}</h2>
        <p className="pA">{description}</p>
        {!showPrice && <button className="read-button" onClick={handleClick}>{buttonText}</button>}
        {showPrice && <p className="price-info">Price: {price}</p>} {/* Show price information when showPrice is true */}
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <Section
        title="Massage Therapy"
        description="Relax & Revitalize: Swedish massage induces deep relaxation, helping to reduce stress and anxiety. The soothing strokes and movements help calm the nervous system and improve muscle stiffness"
        buttonText="Learn More"
        imageSrc={massage}
        altText="Massage Therapy"
        price="80$ / 60 minutes || 118$ / 90 minutes"
      />
      <Section
        title="Deep Tissue"
        description="Focuses on realigning deeper layers of muscles and connective tissue. It is particularly beneficial for chronic pain such as stiff neck and upper back, and sore shoulders by improving blood circulation"
        buttonText="Learn More"
        imageSrc={deeptissue}
        altText="Deep Tissue"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title="Therapeutic"
        description="Involves manipulating the soft tissues of the body, to help alleviate pain, reduce muscle tension, improve circulation, enhance joint flexibility. It is beneficial for people with various conditions, such as chronic pain, sports injuries, headaches, muscle tension, or spasms. It is used to support rehabilitation after an injury"
        buttonText="Learn More"
        imageSrc={therapeutic}
        altText="Therapeutic"
        price="60$ / 30 minutes || 90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title="Sports"
        description="Sports massage is especially beneficial for athletes and people who engage in sports regularly. It is designed to help prevent injuries, enhance athletic performance, and aid in recovery from workouts or sports events by integrating massage and stretchings to improve muscle quality and joint range of motion"
        buttonText="Learn More"
        imageSrc={sports}
        altText="Sports"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title="Cupping"
        description="Can accelerate the healing process and has been used extensively for sore muscles.  It increases circulation, relieves muscle tension, and promotes cell repair"
        buttonText="Learn More"
        imageSrc={cupping}
        altText="Cupping"
        price="60$ / 30 minutes || 88$ / 60 minutes"
      />
      <Section
        title="Kinesiotherapy"
        description="Log[Y] team offers a comprehensive evaluation and treatment plan  that skillfully integrates functional exercises and manual therapy, tailored to your specific conditions and sports needs. Utilizing the latest advancements from our biomechanics of occupation and sports lab, we are dedicated to accelerating your rehabilitation process. Our approach is designed to enhance your daily productivity and elevate your sports performance to a higher level. Experience personalized care that's focused on taking your health and athletic abilities to new heights with the Log[Y] team."
        buttonText="Learn More"
        imageSrc={kinesiotherapy}
        altText="Kinesiotherapy"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      {/* Add more sections as needed */}
    </div>
  );
};

export default ServicesPage;
