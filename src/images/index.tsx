import { FunctionComponent } from "react";
import styles from "./index.module.scss";

interface SixthPageProps { }

const SixthPage: FunctionComponent<SixthPageProps> = () => {
  const benefits = [
    { title: "On-Site Support", desc: "Professional installation and on-site technical support." },
    { title: "Safe Management", desc: "Safe power and cable management for all setups." },
    { title: "Brand Visibility", desc: "Reliable performance and strong brand visibility." },
    { title: "Real-time Updates", desc: "Real-time content updates and live feed integration." },
    { title: "Custom Packages", desc: "Competitive pricing with customized packages." },
  ];
  return (
    <section className={styles.sixthWrapper} id="support">
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <span className={styles.subTitle}>Why Choose Us</span>
          <h2 className={styles.title}>Support & Client Benefits</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.gridContainer}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitCard} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-offset="500">
              <div className={styles.iconBox}>0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthPage;