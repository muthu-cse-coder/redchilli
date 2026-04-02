import React, { useState } from "react";
import styles from "./index.module.scss";

const services = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Graphic Designing",
  "Web Development",
  "Mobile App Development",
  "Video Creation",
  "Branding",
  "Live Chat",
  "LED Indoor and Outdoor Installation",
  "LED Truck Outdoor for Campaign and Advertising"
];

function Popup() {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
<h1>OUR SERVICES</h1>

      <div className={styles.wrapper}>
        <div 
          className={styles.header}
          onClick={() => setOpen(!open)}
        >
          <span>Services</span>

          <div className={`${styles.icon} ${open ? styles.rotate : ""}`}>
            ▼
          </div>
        </div>

        <div className={`${styles.dropdown} ${open ? styles.show : ""}`}>
          {services.map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Popup;