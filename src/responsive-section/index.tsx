// import styles from "./index.module.scss";

// const ResponsiveSection = () => {
//   return (
//     <section className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.imageSection} data-aos="flip-right" data-aos-delay="250" data-aos-duration="1000">
//           <img src="/ad2d96f6-f952-4450-99c7-ed63c2087365.jfif" alt="Devices Preview" />
//         </div>
//         <div className={styles.contentSection} data-aos="zoom-out-left" data-aos-delay="250" data-aos-duration="1000">
//           <h2>
//             LED Wall Display Solutions 
//           </h2>
//           <ul>
//             <li>Custom-size indoor and outdoor LED walls.</li>
//             <li> HD / Full HD / 4K display support.
//             </li>
//             <li>High refresh rate and seamless panels.</li>
//             <li>Weather-proof outdoor options.</li>
//             <li>Suitable for concerts, weddings, exhibitions, retail branding, and corporate events</li>
//           </ul>
//           <button className={styles.purchaseBtn}>
//             Purchase Now <span>→</span>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ResponsiveSection;
import styles from "./index.module.scss";

const ResponsiveSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.imageSection} data-aos="fade-right" data-aos-duration="1200">
          <div className={styles.glowBackdrop}></div>
          <div className={styles.imageWrapper}>
            <img src="/ad2d96f6-f952-4450-99c7-ed63c2087365.jfif" alt="LED Wall Display" />
            <div className={styles.floatingBadge}>
              <span className={styles.pulse}></span>
              4K ULTRA HD
            </div>
          </div>
        </div>

        <div className={styles.contentSection} data-aos="fade-left" data-aos-duration="1200">
          <span className={styles.topTag}>ELITE SOLUTIONS</span>
          <h2 className={styles.mainTitle}>
            LED Wall <br />
            <span className={styles.highlight}>Display Solutions</span>
          </h2>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.dot}></div>
              <p><strong>Custom-size</strong> indoor and outdoor LED walls.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.dot}></div>
              <p><strong>HD / 4K</strong> seamless display support.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.dot}></div>
              <p><strong>High Refresh Rate</strong> for smooth visuals.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.dot}></div>
              <p><strong>Weather-proof</strong> durable outdoor options.</p>
            </div>
          </div>

          <p className={styles.description}>
            Perfect for concerts, weddings, exhibitions, and premium corporate events.
          </p>

          <button className={styles.purchaseBtn}>
            Enquire Now <span className={styles.arrow}>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResponsiveSection;