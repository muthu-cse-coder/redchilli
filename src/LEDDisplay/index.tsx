import React from 'react';
import style from './index.module.scss';

const GoldLanding = () => {
  return (
    <div className={style.mainContainer}>
      <section className={style.heroSection}>
        <header>
          <h1>RED CHILLI ADS</h1>
        </header>

        <div className={style.textBox}>
          <h2>LED Wall Solutions</h2>
          <ul>
            <li>
              <strong>Custom-size</strong>
              <p>Tailored indoor and outdoor LED walls for any space.</p>
            </li>
            <li>
              <strong>HD / 4K Support</strong>
              <p>Crystal clear displays with high-resolution support.</p>
            </li>
            <li>
              <strong>High Refresh Rate</strong>
              <p>Ultra-smooth visuals for live streaming and videos.</p>
            </li>
            <li>
              <strong>Weather-proof</strong>
              <p>Built to withstand extreme outdoor conditions 24/7.</p>
            </li>
          </ul>
        </div>

        <div className={style.visualContainer}>
          <div className={style.truckMockup}></div>
        </div>

        <div className={style.infoPanel}>
          <div className={style.panelColumn}>
            <h3>Specifications</h3>
            <ul>
              <li>P3 / P4 / P10 Panels</li>
              <li>High Brightness</li>
              <li>Low Power Use</li>
            </ul>
          </div>
          <div className={style.panelDivider}></div>
          <div className={style.panelColumn}>
            <h3>Applications</h3>
            <ul>
              <li>Events & Expos</li>
              <li>Retail Displays</li>
              <li>Political Rallies</li>
            </ul>
          </div>
        </div>

        <div className={style.footerContact}>
          <span>Book Your Slot Now</span>
          <p>98765 43210</p>
        </div>
      </section>
    </div>
  );
};

export default GoldLanding;