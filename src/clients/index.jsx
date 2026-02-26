// // import React from "react";
// // import style from "./index.module.scss";

// // import logo1 from "../assets/logo1.png";
// // import logo2 from "../assets/logo2.png";
// // import logo3 from "../assets/logo3.png";
// // import logo4 from "../assets/logo4.png";
// // import logo5 from "../assets/logo5.png";
// // import logo6 from "../assets/logo6.png";
// // import logo7 from "../assets/logo7.png";
// // import logo8 from "../assets/logo8.png";
// // import logo9 from "../assets/logo9.png";
// // import logo10 from "../assets/logo10.png";
// // import logo11 from "../assets/logo11.png";
// // import logo12 from "../assets/logo12.png";
// // import logo13 from "../assets/logo13.png";
// // import logo14 from "../assets/logo14.png";
// // import logo15 from "../assets/logo15.png";

// // const inner = [logo1, logo2, logo3, logo4, logo5];
// // const middle = [logo6, logo7, logo8, logo9, logo10];
// // const outer = [logo11, logo12, logo13, logo14, logo15];

// // const Orbit = ({ logos, radius, startAngle = 0 }) => (
// //   <>
// //     {logos.map((logo, i) => {
// //       const angle =
// //         ((i / logos.length) * 360 + startAngle) * (Math.PI / 180);
// //       const x = Math.cos(angle) * radius;
// //       const y = Math.sin(angle) * radius;

// //       return (
// //         <div
// //           key={i}
// //           className={style.logoWrapper}
// //           style={{
// //             transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
// //           }}
// //         >
// //           <img src={logo} alt={`client-${i}`} />
// //         </div>
// //       );
// //     })}
// //   </>
// // );

// // function Clients() {
// //   return (
// //     <div className={style.wrapper}>
// //       <div className={style.orbitContainer}>
// //         <div className={`${style.ring} ${style.ring1}`} />
// //         <div className={`${style.ring} ${style.ring2}`} />
// //         <div className={`${style.ring} ${style.ring3}`} />
// //         <div className={style.centerText}>Our Clients</div>
// //         <Orbit logos={inner} radius={150} startAngle={0} />
// //         <Orbit logos={middle} radius={250} startAngle={20} />
// //         <Orbit logos={outer} radius={360} startAngle={10} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Clients;


import React, { useEffect, useState } from "react";
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

const positions = [
  { radius: 150, index: 0, total: 5 },
  { radius: 150, index: 1, total: 5 },
  { radius: 150, index: 2, total: 5 },
  { radius: 150, index: 3, total: 5 },
  { radius: 150, index: 4, total: 5 },
  { radius: 250, index: 0, total: 5 },
  { radius: 250, index: 1, total: 5 },
  { radius: 250, index: 2, total: 5 },
  { radius: 250, index: 3, total: 5 },
  { radius: 250, index: 4, total: 5 },
  { radius: 360, index: 0, total: 5 },
  { radius: 360, index: 1, total: 5 },
  { radius: 360, index: 2, total: 5 },
  { radius: 360, index: 3, total: 5 },
  { radius: 360, index: 4, total: 5 },
];

function Clients() {
  const [currentSet, setCurrentSet] = useState(0);
  const [fade, setFade] = useState(true);

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

  const logos = allSets[currentSet];

  return (
    <div id="documentation" className={`${style.wrapper} d-flex flex-column justify-content-between p-5`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" data-aos-delay="1000">
      <h1 className="text-bold" style={{ fontWeight: "800" }}>OUR CLIENTS</h1>
      <div className={style.orbitContainer}>
        <div className={`${style.ring} ${style.ring1}`} />
        <div className={`${style.ring} ${style.ring2}`} />
        <div className={`${style.ring} ${style.ring3}`} />

        <div className={style.centerText}>Our Clients</div>

        <div className={style.logoOrbit}>
          {logos.map((logo, i) => {
            const { radius, index, total } = positions[i];
            const startAngle =
              radius === 150 ? 0 : radius === 250 ? 20 : 10;

            const angle =
              ((index / total) * 360 + startAngle) * (Math.PI / 180);

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
