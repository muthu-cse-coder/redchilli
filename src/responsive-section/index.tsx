import styles from "./index.module.scss";

const ResponsiveSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageSection} data-aos="flip-right" data-aos-delay="250" data-aos-duration="1000">
          <img src="/LED.png" alt="Devices Preview" />
        </div>
        <div className={styles.contentSection} data-aos="zoom-out-left" data-aos-delay="250" data-aos-duration="1000">
          <h2>
            LED Wall Display Solutions 
          </h2>
          <ul>
            <li>Custom-size indoor and outdoor LED walls.</li>
            <li> HD / Full HD / 4K display support.
            </li>
            <li>High refresh rate and seamless panels.</li>
            <li>Weather-proof outdoor options.</li>
            <li>Suitable for concerts, weddings, exhibitions, retail branding, and corporate events</li>
          </ul>
          <button className={styles.purchaseBtn}>
            Purchase Now <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResponsiveSection;
