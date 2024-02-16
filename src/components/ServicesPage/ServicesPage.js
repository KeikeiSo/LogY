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

const ServicesPage = ({ language }) => {
  return (
    <div className="servicesPage">
      <Section
        title={language === 'EN' ? 'Massage Therapy' : '按摩疗法'}
        description={language === 'EN' ? '"Relax & Revitalize: Swedish massage induces deep relaxation, helping to reduce stress and anxiety. The soothing strokes and movements help calm the nervous system and improve muscle stiffness"' : '瑞典式按摩能够让人深度放松，有助于减轻压力和焦虑。舒缓的手法和动作有助于镇静神经系统，改善肌肉僵硬。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={massage}
        altText="Massage Therapy"
        price="80$ / 60 minutes || 118$ / 90 minutes"
      />
      <Section
        title= {language === 'EN' ? 'Deep Tissue' : '深层组织'}
        description= {language === 'EN' ? 'Focuses on realigning deeper layers of muscles and connective tissue. It is particularly beneficial for chronic pain such as stiff neck and upper back, and sore shoulders by improving blood circulation' : '专注于重新排列更深层次肌肉和结缔组织。通过促进血液循环，对颈部和上背部僵硬、肩膀酸痛等慢性疼痛，有明显的改善效果。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={deeptissue}
        altText="Deep Tissue"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title= {language === 'EN' ? ' Therapeutic' : '理疗'}
        description= {language === 'EN' ? 'Involves manipulating the soft tissues of the body, to help alleviate pain, reduce muscle tension, improve circulation, enhance joint flexibility. It is beneficial for people with various conditions, such as chronic pain, sports injuries, headaches, muscle tension, or spasms. It is used to support rehabilitation after an injury' : '通过放松软组织，可以帮助缓解疼痛、减少肌肉紧张、促进血液循环和增强关节灵活性。对于患有慢性疼痛、运动损伤、头痛、肌肉紧张或痉挛的人群，有利于加速伤后康复。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={therapeutic}
        altText="Therapeutic"
        price="60$ / 30 minutes || 90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title={language === 'EN' ? 'Sports' : '运动恢复'}
        description= {language === 'EN' ? 'Sports massage is especially beneficial for athletes and people who engage in sports regularly. It is designed to help prevent injuries, enhance athletic performance, and aid in recovery from workouts or sports events by integrating massage and stretchings to improve muscle quality and joint range of motion' : '针对运动人群，通过按摩和拉伸来改善肌肉质量和关节活动范围。有助于预防损伤、增强运动表现，并帮助比赛和运动后的恢复。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={sports}
        altText="Sports"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      <Section
        title= {language === 'EN' ? 'Cupping' : '拔罐'}
        description= {language === 'EN' ? 'Can accelerate the healing process and has been used extensively for sore muscles.  It increases circulation, relieves muscle tension, and promotes cell repair' : '运动恢复拔罐可以促进愈合缓解肌肉紧张、酸痛，并同时促进血液循环。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={cupping}
        altText="Cupping"
        price="60$ / 30 minutes || 88$ / 60 minutes"
      />
      <Section
        title= {language === 'EN' ? 'Kinesiotherapy' : '运动疗法'}
        description= {language === 'EN' ? 'Log[Y] team offers a comprehensive evaluation and treatment plan  that skillfully integrates functional exercises and manual therapy, tailored to your specific conditions and sports needs. Utilizing the latest advancements from our biomechanics of occupation and sports lab, we are dedicated to accelerating your rehabilitation process. Our approach is designed to enhance your daily productivity and elevate your sports performance to a higher level. Experience personalized care that is focused on taking your health and athletic abilities to new heights with the Log[Y] team.' : 'Log[Y]团队提供全面评估和治疗计划，整合功能性运动和手法治疗，为您的特定状况和运动需求而量身定制。结合我们的职业和运动实验室的生物力学最新研究，我们致力于加速您的康复进程。我们的理念旨在提高您的高效生活品质，提升您的运动表现到更高水平。体验以您的健康和运动能力为中心的个性化护理，让Log[Y]团队带您迈向全新的健康水平和更高运动成就。'}
        buttonText={language === 'EN' ? 'Learn More' : '了解更多'}
        imageSrc={kinesiotherapy}
        altText="Kinesiotherapy"
        price="90$ / 60 minutes || 135$ / 90 minutes"
      />
      {/* Add more sections as needed */}
    </div>
  );
};

export default ServicesPage;
