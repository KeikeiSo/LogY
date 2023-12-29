import React from 'react';
import './AboutPage.css'; // Make sure to create and import the corresponding CSS file

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section>
        <h2>Mission Statement</h2>
        <p>At KinesioLog[Y], we aim to empower individuals towards optimal wellness through personalized care, education, and scientific evidence-based practices.</p>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Massage Therapy - Personalized Swedish Massage sessions for tension relief and improved circulation.</li>
          <li>Personal Training - Tailored fitness programs, suitable for beginners and experienced individuals.</li>
          <li>Boxing Training - Combining cardio, strength, and skill development for a dynamic workout experience.</li>
        </ul>
      </section>
      
      <section className="price-list-section">
        <h2>Price List</h2>
        <div className="price-list">
          <h3>Massage Therapy / Bian stone Therapy:</h3>
          <table>
            <tbody>
              <tr>
                <td>60 min Massage Therapy (1)</td>
                <td>$80</td>
              </tr>
              <tr>
                <td>60 min Massage Therapy (5)</td>
                <td>$375</td>
              </tr>
              <tr>
                <td>60 min Massage Therapy (10)</td>
                <td>$750 (Includes a free p.m. session)</td>
              </tr>
              <tr>
                <td>90 min Massage Therapy (1)</td>
                <td>$110</td>
              </tr>
              <tr>
                <td>60 min Bian stone Therapy (1)</td>
                <td>$80</td>
              </tr>
              {/* ... more items ... */}
            </tbody>
          </table>
          
          <h3>Personal Training</h3>
          <table>
            <tbody>
              <tr>
                <td>60 min Personal Training (1)</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>60 min Personal Training (12)</td>
                <td>$696 ($58/session)</td>
              </tr>
              <tr>
                <td>60 min Personal Training (24) </td>
                <td>$1320 ($55/session)</td>
              </tr>
              <tr>
                <td>60 min Personal Training (36) </td>
                <td>$1872 ($52/session)</td>
              </tr>
              {/* ... more items ... */}
            </tbody>
          </table>

          <h3>Service</h3>
          <table>
            <tbody>
              <tr>
                <td>Personalized Program Design (1)</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Personalized Program Design (3 Month) </td>
                <td>$105 </td>
              </tr>
              <tr>
                <td>Personalized Program Design (6 Months) </td>
                <td>$180</td>
              </tr>
              <tr>
                <td>Personalized Program Design (12 Month) </td>
                <td>$300</td>
              </tr>
              {/* ... more items ... */}
            </tbody>
          </table>
          
          {/* ... more categories ... */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
