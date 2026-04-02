import React, { useEffect, useMemo, useState } from "react";
import style from "./index.module.scss";

import logo16 from "../assets/logo16.png";
import logo17 from "../assets/logo17.png";
import logo18 from "../assets/logo18.png";
import logo19 from "../assets/logo19.png";
import logo20 from "../assets/logo20.png";
import logo21 from "../assets/logo21.png";
import logo22 from "../assets/logo22.png";
import logo23 from "../assets/logo23.png";
import logo24 from "../assets/logo24.png";
import logo25 from "../assets/logo25.png";
import logo26 from "../assets/logo26.png";
import logo27 from "../assets/logo27.png";
import logo28 from "../assets/logo28.png";
import logo29 from "../assets/logo29.png";
import logo30 from "../assets/logo30.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.png";
import logo13 from "../assets/logo13.png";
import logo14 from "../assets/logo14.png";
import logo15 from "../assets/logo15.png";

const set1 = [logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30];
const set2 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15];
const allSets = [set1, set2];

const SLOT_COUNT_PER_RING = 5;
const START_ANGLES = [0, 20, 10];

const getOrbitConfig = (width) => {
  if (width <= 380) {
    return {
      containerSize: 280,
      radii: [50, 90, 130],
    };
  }

  if (width <= 600) {
    return {
      containerSize: 320,
      radii: [60, 105, 150],
    };
  }

  if (width <= 992) {
    return {
      containerSize: 550,
      radii: [110, 190, 270],
    };
  }

  return {
    containerSize: 800,
    radii: [150, 255, 365],
  };
};

function Clients() {
  const [currentSet, setCurrentSet] = useState(0);
  const [fade, setFade] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % allSets.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const orbitConfig = useMemo(
    () => getOrbitConfig(viewportWidth),
    [viewportWidth]
  );

  const logos = allSets[currentSet];

  return (
    <div id="documentation" className={style.wrapper} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="850" data-aos-delay="350">
      <h1 className={style.sectionTitle}>OUR CLIENTS</h1>
      <div
        className={style.orbitContainer}
        style={{
          width: `${orbitConfig.containerSize}px`,
          height: `${orbitConfig.containerSize}px`,
        }}
      >
        <div
          className={`${style.ring} ${style.ring1}`}
          style={{
            width: `${orbitConfig.radii[0] * 2}px`,
            height: `${orbitConfig.radii[0] * 2}px`,
          }}
        />
        <div
          className={`${style.ring} ${style.ring2}`}
          style={{
            width: `${orbitConfig.radii[1] * 2}px`,
            height: `${orbitConfig.radii[1] * 2}px`,
          }}
        />
        <div
          className={`${style.ring} ${style.ring3}`}
          style={{
            width: `${orbitConfig.radii[2] * 2}px`,
            height: `${orbitConfig.radii[2] * 2}px`,
          }}
        />

        <div className={style.centerText}>Our Clients</div>

        <div className={style.logoOrbit}>
          {logos.map((logo, i) => {
            const ringIndex = Math.floor(i / SLOT_COUNT_PER_RING);
            const index = i % SLOT_COUNT_PER_RING;
            const radius = orbitConfig.radii[ringIndex];
            const startAngle = START_ANGLES[ringIndex];

            const angle =
              ((index / SLOT_COUNT_PER_RING) * 360 + startAngle) *
              (Math.PI / 180);

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={`${currentSet}-${i}`}
                className={`${style.logoWrapper} ${fade ? style.visible : ""
                  }`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <img src={logo} alt={`client-${i}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
