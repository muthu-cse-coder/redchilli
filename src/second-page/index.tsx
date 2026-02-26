
import React from "react";
import style from './index.module.scss';

const SecondPage = () => {
  return (
    <div className={`${style.stSeconPageWrapper} row w-100 m-0`}   data-aos="fade-up" 
           data-aos-duration="1200">
      <div className={`${style.stLeftSideWrapper} col-lg-8 col-md-12`} 
           data-aos="fade-up" 
           data-aos-duration="1300">
        
        <h1 className={style.mainHeading}  
            data-aos="fade-up" 
            data-aos-duration="1300">
          <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
          <span className={style.highlight}>Your Brand On The Move</span>
        </h1>

        <p className={style.subHeading} 
           data-aos="fade-up" 
           data-aos-delay="400"
           data-aos-duration="1300">
          Transform city streets into your showroom. 
        </p>

        <ul className={style.featureList} 
            data-aos="fade-up" 
            data-aos-delay="650" 
            data-aos-duration="1300">
          <li><span className={style.checkIcon}>✓</span> High-Definition Outdoor LED Screens</li>
          <li><span className={style.checkIcon}>✓</span> GPS Tracked Routes for Real-time Data</li>
          <li><span className={style.checkIcon}>✓</span> 24/7 Dynamic Content Management</li>
        </ul>

        <div className={`${style.ctaButtons} mt-2`} 
             data-aos="fade-up" 
             data-aos-delay="380" 
             data-aos-duration="1200">
          <button className={style.stButtonWrapper}>Get Free Quote...</button>
          <button className={style.stSecondButtonWrapper}>Call Now...</button>
        </div>

        <div className={style.statsContainer} data-aos="fade-up" data-aos-delay="750" data-aos-duration="1200">
          <div className={style.statItem}>
            <h3>50K+</h3>
            <p>Daily Views</p>
          </div>
          <div className={style.statItem}>
            <h3>100%</h3>
            <p>Mobile Reach</p>
          </div>
          <div className={style.statItem}>
            <h3>20+</h3>
            <p>Cities Covered</p>
          </div>
        </div>
      </div>

      <div className={`${style.stRightSideWrapper} col-lg-4 col-md-12 p-0`} 
           data-aos="zoom-in" 
           data-aos-duration="1300">
        <img src="/34047e7c-b451-4f4c-bcf1-fc5811ca885e.jfif" alt="Mobile LED Truck" />
      </div>
    </div>
  );
};

export default SecondPage;
