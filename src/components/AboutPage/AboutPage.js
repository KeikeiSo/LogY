import React from 'react';
import './AboutPage.css'; // Make sure to create and import the corresponding CSS file

const AboutPage = ({ language }) => {
  return (
    <div className="about-page">
      <h1>{language === 'EN' ? 'About Us' : '关于我们'}</h1>
      <section>
        <h2>{language === 'EN' ? 'Mission Statement' : '我们的使命'}</h2>
        <p>{language === 'EN' ? 'translate to chinese:At KinesioLog[Y], we aim to empower individuals towards optimal wellness through personalized care, education, and scientific evidence-based practices.' : '在KinesioLog[Y]，我们的目标是通过个性化护理、教育和基于科学证据的实践，帮助个人实现最佳健康状态。'}</p>
      </section>

      <section>
        <h2>{language === 'EN' ? 'Our Services' : '我们的服务'}</h2>
        <ul>
          <li>{language === 'EN' ? 'Massage Therapy - Personalized Swedish Massage sessions for tension relief and improved circulation.' : '按摩疗法 - 针对紧张缓解和改善循环的个性化瑞典按摩课程。'}</li>
          <li>{language === 'EN' ? 'Personal Training - Tailored fitness programs, suitable for beginners and experienced individuals.' : '个人训练 - 适合初学者和有经验者的定制健身计划。'}</li>
          <li>{language === 'EN' ? 'Boxing Training - Combining cardio, strength, and skill development for a dynamic workout experience.' : '拳击训练 - 结合有氧运动、力量和技能发展，提供动态的锻炼体验。'}</li>
        </ul>
      </section>
      
      <section className="price-list-section">
        <h2>{language === 'EN' ? 'Price List' : '我们的定价'}</h2>
        <div className="price-list">
          <h3>{language === 'EN' ? 'Massage Therapy / Bian stone Therapy:' : '按摩疗法 / 砭石疗法：'}</h3>
          <table>
            <tbody>
              <tr>
                <td>{language === 'EN' ? '60 min Massage Therapy (1)' : '60分钟按摩疗法 (1)'}</td>
                <td>$80</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Massage Therapy (5)' : '60分钟按摩疗法 (5)'}</td>
                <td>$375</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Massage Therapy (10)' : '60分钟按摩疗法 (10)'}</td>
                <td>{language === 'EN' ? '$750 (Includes a free p.m. session)' : '$750 (包括一个免费的下午时段)'}</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '90 min Massage Therapy (1)' : '90分钟按摩疗法 (1)'}</td>
                <td>$110</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Bian stone Therapy (1)' : '60分钟砭石疗法 (1)'}</td>
                <td>$80</td>
              </tr>
              {/* ... more items ... */}
            </tbody>
          </table>
          
          <h3>{language === 'EN' ? 'Personal Training' : '个人训练'}</h3>
          <table>
            <tbody>
              <tr>
                <td>{language === 'EN' ? '60 min Personal Training (1)' : '60分钟个人训练 (1)'}</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Personal Training (12)' : '60分钟个人训练 (12)'}</td>
                <td>{language === 'EN' ? '$696 ($58/session)' : '$696 ($58/课)'}</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Personal Training (24)' : '60分钟个人训练 (24)'} </td>
                <td>{language === 'EN' ? '$1320 ($55/session)' : '$1320 ($55/课)'}</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? '60 min Personal Training (36)' : '60分钟个人训练 (36)'}</td>
                <td>{language === 'EN' ? '$1872 ($52/session)' : '$1872 ($52/课)'}</td>
              </tr>
              {/* ... more items ... */}
            </tbody>
          </table>

          <h3>{language === 'EN' ? 'Service' : '设计服务'}</h3>
          <table>
            <tbody>
              <tr>
                <td>{language === 'EN' ? 'Personalized Program Design (1)' : '个性化训练设计 (1)'}</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? 'Personalized Program Design (3 Month)' : '个性化训练设计 (3个月)'} </td>
                <td>$105 </td>
              </tr>
              <tr>
                <td>{language === 'EN' ? 'Personalized Program Design (6 Month)' : '个性化训练设计 (6个月)'} </td>
                <td>$180</td>
              </tr>
              <tr>
                <td>{language === 'EN' ? 'Personalized Program Design (12 Month)' : '个性化训练设计 (12个月)'} </td>
                <td>$300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
