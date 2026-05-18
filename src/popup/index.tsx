// // // // import React, { useState } from "react";
// // // // import styles from "./index.module.scss";

// // // // const services = [
// // // //   "Search Engine Optimization",
// // // //   "Social Media Marketing",
// // // //   "Graphic Designing",
// // // //   "Web Development",
// // // //   "Mobile App Development",
// // // //   "Video Creation",
// // // //   "Branding",
// // // //   "Live Chat",
// // // //   "LED Indoor and Outdoor Installation",
// // // //   "LED Truck Outdoor for Campaign and Advertising"
// // // // ];

// // // // function Popup() {

// // // //   const [open, setOpen] = useState(false);

// // // //   return (
// // // //     <div className={styles.page}>
// // // //       <h1>OUR SERVICES</h1>
// // // //       <div className={styles.wrapper}>
// // // //         <div
// // // //           className={styles.header}
// // // //           onClick={() => setOpen(!open)}
// // // //         >
// // // //           <span>Services</span>

// // // //           <div className={`${styles.icon} ${open ? styles.rotate : ""}`}>
// // // //             ▼
// // // //           </div>
// // // //         </div>

// // // //         <div className={`${styles.dropdown} ${open ? styles.show : ""}`}>
// // // //           {services.map((item, index) => (
// // // //             <div key={index} className={styles.item}>
// // // //               {item}
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // export default Popup;

// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import styles from "./index.module.scss";

// // // const digitalServices = [
// // //   "Search Engine Optimization", "Social Media Marketing",
// // //   "Graphic Designing", "Web Development",
// // //   "Mobile App Development", "Video Creation"
// // // ];

// // // const ledServices = [
// // //   "LED Indoor and Outdoor Installation", "LED Truck Outdoor for Advertising",
// // //   "Digital Standee Display", "LED Van Campaigns"
// // // ];

// // // function Popup() {
// // //   const [digitalOpen, setDigitalOpen] = useState(false);
// // //   const [ledOpen, setLedOpen] = useState(false);

// // //   return (
// // //     <div className={styles.page}>
// // //       <div className={styles.bgGlow} />
// // //       <motion.div
// // //         className={styles.headerBox}
// // //         initial={{ opacity: 0, scale: 0.8 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         transition={{ duration: 0.8, ease: "easeOut" }}
// // //       >
// // //         <h1 className={styles.mainTitle}>OUR <span>SERVICES</span></h1>
// // //       </motion.div>

// // //       <div className={styles.pyramidContainer}>
// // //         <svg className={styles.lineSvg} viewBox="0 0 1000 200">
// // //           <motion.path
// // //             d="
// // //     M500 0
// // //     L500 70

// // //     Q500 90 470 90
// // //     L230 90
// // //     Q200 90 200 120
// // //     L200 200

// // //     M500 70

// // //     Q500 90 530 90
// // //     L770 90
// // //     Q800 90 800 120
// // //     L800 200
// // //   "
// // //             stroke="#ff1f4b"
// // //             strokeWidth="3"
// // //             fill="none"
// // //             strokeLinecap="round"
// // //             initial={{ pathLength: 0, opacity: 0 }}
// // //             animate={{ pathLength: 1, opacity: 1 }}
// // //             transition={{ duration: 1.5, ease: "easeInOut" }}
// // //           />
// // //         </svg>

// // //         <div className={styles.servicesWrapper}>
// // //           <motion.div
// // //             className={styles.serviceBox}
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 1.2, duration: 0.6 }}
// // //           >
// // //             <div className={`${styles.wrapper} ${digitalOpen ? styles.active : ""}`}>
// // //               <div className={styles.header} onClick={() => setDigitalOpen(!digitalOpen)}>
// // //                 <div className={styles.titleInfo}>
// // //                   <motion.div
// // //                     className={styles.dot}
// // //                     animate={{ scale: [1, 1.5, 1] }}
// // //                     transition={{ repeat: Infinity, duration: 2 }}
// // //                   />
// // //                   <span>Digital Services</span>
// // //                 </div>
// // //                 <div className={`${styles.icon} ${digitalOpen ? styles.rotate : ""}`}>
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
// // //                 </div>
// // //               </div>
// // //               <AnimatePresence>
// // //                 {digitalOpen && (
// // //                   <motion.div
// // //                     className={styles.dropdown}
// // //                     initial={{ height: 0, opacity: 0 }}
// // //                     animate={{ height: "auto", opacity: 1 }}
// // //                     exit={{ height: 0, opacity: 0 }}
// // //                   >
// // //                     {digitalServices.map((item, index) => (
// // //                       <div key={index} className={styles.item}>{item}</div>
// // //                     ))}
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div
// // //             className={styles.serviceBox}
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 1.4, duration: 0.6 }}
// // //           >
// // //             <div className={`${styles.wrapper} ${ledOpen ? styles.active : ""}`}>
// // //               <div className={styles.header} onClick={() => setLedOpen(!ledOpen)}>
// // //                 <div className={styles.titleInfo}>
// // //                   <motion.div
// // //                     className={styles.dot}
// // //                     animate={{ scale: [1, 1.5, 1] }}
// // //                     transition={{ repeat: Infinity, duration: 2 }}
// // //                   />
// // //                   <span>LED Services</span>
// // //                 </div>
// // //                 <div className={`${styles.icon} ${ledOpen ? styles.rotate : ""}`}>
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
// // //                 </div>
// // //               </div>
// // //               <AnimatePresence>
// // //                 {ledOpen && (
// // //                   <motion.div
// // //                     className={styles.dropdown}
// // //                     initial={{ height: 0, opacity: 0 }}
// // //                     animate={{ height: "auto", opacity: 1 }}
// // //                     exit={{ height: 0, opacity: 0 }}
// // //                   >
// // //                     {ledServices.map((item, index) => (
// // //                       <div key={index} className={styles.item}>{item}</div>
// // //                     ))}
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Popup;
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import styles from "./index.module.scss";

// // const digitalServices = [
// //   "Search Engine Optimization",
// //   "Social Media Marketing",
// //   "Influencer Marketing",
// //   "Paid Marketing Campaigns",
// //   "Website Design & Development",
// //   "Video Marketing & Reels Creation"

// // ];

// // const ledServices = [
// //   "LED Van Campaigns",
// //   "LED Indoor and Outdoor Installation",
// //   "LED Truck Outdoor for Advertising",
// //   "Digital Standee Display",
// //   "Digital Sinage",
// //   "Touch Display"
// // ];

// // function Popup() {
// //   const [digitalOpen, setDigitalOpen] = useState(false);
// //   const [ledOpen, setLedOpen] = useState(false);

// //   return (
// //     <div className={styles.page}>
// //       <div className={styles.bgGlow} />
// //       <motion.div
// //         className={styles.headerBox}
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //       >
// //         <h1 className={styles.mainTitle}>
// //           OUR <span>SERVICES</span>
// //         </h1>
// //       </motion.div>
// //       <div className={styles.pyramidContainer}>
// //         <svg className={styles.lineSvg} viewBox="0 0 1000 200">
// //          <motion.path
// //   d="
// //     M500 0
// //     L500 70

// //     Q500 90 470 90
// //     L290 90
// //     Q270 90 270 120
// //     L270 200

// //     M500 70
// //     Q500 90 530 90
// //     L710 90
// //     Q730 90 730 120
// //     L730 200
// //   "
// //   stroke="#ff1f4b"
// //   strokeWidth="3"
// //   fill="none"
// //   strokeLinecap="round"
// //   initial={{ pathLength: 0, opacity: 0 }}
// //   animate={{ pathLength: 1, opacity: 1 }}
// //   transition={{ duration: 1.5, ease: "easeInOut" }}
// // />
// //         </svg>
// //         <div className={styles.servicesWrapper}>
// //           <motion.div
// //             className={styles.serviceBox}
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.2, duration: 0.6 }}
// //           >
// //             <div
// //               className={`${styles.wrapper} ${ledOpen ? styles.active : ""
// //                 }`}
// //             >
// //               <div
// //                 className={styles.header}
// //                 onClick={() => setLedOpen(!ledOpen)}
// //               >
// //                 <div className={styles.titleInfo}>
// //                   <motion.div
// //                     className={styles.dot}
// //                     animate={{ scale: [1, 1.5, 1] }}
// //                     transition={{ repeat: Infinity, duration: 2 }}
// //                   />
// //                   <span>LED Services</span>
// //                 </div>
// //                 <div
// //                   className={`${styles.icon} ${ledOpen ? styles.rotate : ""
// //                     }`}
// //                 >
// //                   <svg
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                   >
// //                     <path d="M6 9l6 6 6-6" />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <AnimatePresence>
// //                 {ledOpen && (
// //                   <motion.div
// //                     className={styles.dropdown}
// //                     initial={{ height: 0, opacity: 0 }}
// //                     animate={{ height: "auto", opacity: 1 }}
// //                     exit={{ height: 0, opacity: 0 }}
// //                     transition={{ duration: 0.4 }}
// //                   >
// //                     {ledServices.map((item, index) => (
// //                       <div key={index} className={styles.item}>
// //                         {item}
// //                       </div>
// //                     ))}
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </motion.div>
// //           <motion.div
// //             className={styles.serviceBox}
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.4, duration: 0.6 }}
// //           >
// //             <div
// //               className={`${styles.wrapper} ${digitalOpen ? styles.active : ""
// //                 }`}
// //             >
// //               <div
// //                 className={styles.header}
// //                 onClick={() => setDigitalOpen(!digitalOpen)}
// //               >
// //                 <div className={styles.titleInfo}>
// //                   <motion.div
// //                     className={styles.dot}
// //                     animate={{ scale: [1, 1.5, 1] }}
// //                     transition={{ repeat: Infinity, duration: 2 }}
// //                   />
// //                   <span>Digital Marketing</span>
// //                 </div>
// //                 <div
// //                   className={`${styles.icon} ${digitalOpen ? styles.rotate : ""
// //                     }`}
// //                 >
// //                   <svg
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                   >
// //                     <path d="M6 9l6 6 6-6" />
// //                   </svg>
// //                 </div>
// //               </div>
// //               <AnimatePresence>
// //                 {digitalOpen && (
// //                   <motion.div
// //                     className={styles.dropdown}
// //                     initial={{ height: 0, opacity: 0 }}
// //                     animate={{ height: "auto", opacity: 1 }}
// //                     exit={{ height: 0, opacity: 0 }}
// //                     transition={{ duration: 0.4 }}
// //                   >
// //                     {digitalServices.map((item, index) => (
// //                       <div key={index} className={styles.item}>
// //                         {item}
// //                       </div>
// //                     ))}
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Popup;
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./index.module.scss";

// const digitalServices = [
//   "Search Engine Optimization",
//   "Social Media Marketing",
//   "Influencer Marketing",
//   "Paid Marketing Campaigns",
//   "Website Design & Development",
//   "Video Marketing & Reels Creation"
// ];

// const ledServices = [
//   "LED Van Campaigns",
//   "LED Indoor and Outdoor Installation",
//   "LED Truck Outdoor for Advertising",
//   "Digital Standee Display",
//   "Digital Sinage",
//   "Touch Display"
// ];

// function Popup() {
//   const [digitalOpen, setDigitalOpen] = useState(false);
//   const [ledOpen, setLedOpen] = useState(false);
//   const [mobileTab, setMobileTab] = useState<"led" | "digital">("led"); // ✅ mobile tab

//   return (
//     <div className={styles.page}>
//       <div className={styles.bgGlow} />
//       <motion.div
//         className={styles.headerBox}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className={styles.mainTitle}>
//           OUR <span>SERVICES</span>
//         </h1>
//       </motion.div>

//       {/* ✅ DESKTOP LAYOUT — same as before */}
//       <div className={styles.pyramidContainer}>
//         <svg className={styles.lineSvg} viewBox="0 0 1000 200">
//           <motion.path
//             d="
//               M500 0
//               L500 70
//               Q500 90 470 90
//               L290 90
//               Q270 90 270 120
//               L270 200
//               M500 70
//               Q500 90 530 90
//               L710 90
//               Q730 90 730 120
//               L730 200
//             "
//             stroke="#ff1f4b"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 1 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//         </svg>
//         <div className={styles.servicesWrapper}>
//           {/* LED */}
//           <motion.div
//             className={styles.serviceBox}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//           >
//             <div className={`${styles.wrapper} ${ledOpen ? styles.active : ""}`}>
//               <div className={styles.header} onClick={() => setLedOpen(!ledOpen)}>
//                 <div className={styles.titleInfo}>
//                   <motion.div
//                     className={styles.dot}
//                     animate={{ scale: [1, 1.5, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                   />
//                   <span>LED Services</span>
//                 </div>
//                 <div className={`${styles.icon} ${ledOpen ? styles.rotate : ""}`}>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                     <path d="M6 9l6 6 6-6" />
//                   </svg>
//                 </div>
//               </div>
//               <AnimatePresence>
//                 {ledOpen && (
//                   <motion.div
//                     className={styles.dropdown}
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     {ledServices.map((item, index) => (
//                       <div key={index} className={styles.item}>{item}</div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Digital */}
//           <motion.div
//             className={styles.serviceBox}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.6 }}
//           >
//             <div className={`${styles.wrapper} ${digitalOpen ? styles.active : ""}`}>
//               <div className={styles.header} onClick={() => setDigitalOpen(!digitalOpen)}>
//                 <div className={styles.titleInfo}>
//                   <motion.div
//                     className={styles.dot}
//                     animate={{ scale: [1, 1.5, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                   />
//                   <span>Digital Marketing</span>
//                 </div>
//                 <div className={`${styles.icon} ${digitalOpen ? styles.rotate : ""}`}>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                     <path d="M6 9l6 6 6-6" />
//                   </svg>
//                 </div>
//               </div>
//               <AnimatePresence>
//                 {digitalOpen && (
//                   <motion.div
//                     className={styles.dropdown}
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     {digitalServices.map((item, index) => (
//                       <div key={index} className={styles.item}>{item}</div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ✅ MOBILE LAYOUT — tab switcher design */}
//       <div className={styles.mobileLayout}>
//         <div className={styles.tabBar}>
//           <button
//             className={`${styles.tabBtn} ${mobileTab === "led" ? styles.tabActive : ""}`}
//             onClick={() => setMobileTab("led")}
//           >
//             <div className={styles.cardIcon}>
//               <img
//                 src={"/Display-icon.png"}
//                 alt="LED Services"
//                 className={styles.cardIconImg}
//               />
//             </div>
//              LED Services
//           </button>
//           <button
//             className={`${styles.tabBtn} ${mobileTab === "digital" ? styles.tabActive : ""}`}
//             onClick={() => setMobileTab("digital")}
//           >
//             📱 Digital Marketing
//           </button>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={mobileTab}
//             className={styles.mobileCard}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             {(mobileTab === "led" ? ledServices : digitalServices).map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={styles.mobileItem}
//                 initial={{ opacity: 0, x: -15 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.07 }}
//               >
//                 <span className={styles.mobileItemDot} />
//                 {item}
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default Popup;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.scss";

const digitalServices = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Influencer Marketing",
  "Paid Marketing Campaigns",
  "Website Design & Development",
  "Video Marketing & Reels Creation",
];

const ledServices = [
  "LED Van Campaigns",
  "LED Indoor and Outdoor Installation",
  "LED Truck Outdoor for Advertising",
  "Digital Standee Display",
  "Digital Signage",
  "Touch Display",
];

function Popup() {
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [ledOpen, setLedOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<"led" | "digital">("led");

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} />

      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.mainTitle}>
          OUR <span>SERVICES</span>
        </h1>
      </motion.div>
      <div className={styles.pyramidContainer}>
        <svg className={styles.lineSvg} viewBox="0 0 1000 200">
          <motion.path
            d="
              M500 0 L500 70
              Q500 90 470 90
              L290 90
              Q270 90 270 120
              L270 200
              M500 70
              Q500 90 530 90
              L710 90
              Q730 90 730 120
              L730 200
            "
            stroke="#ff1f4b"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        <div className={styles.servicesWrapper}>
          <motion.div
            className={styles.serviceBox}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className={`${styles.wrapper} ${ledOpen ? styles.active : ""}`}>
              <div className={styles.header} onClick={() => setLedOpen(!ledOpen)}>
                <div className={styles.titleInfo}>
                  <motion.div
                    className={styles.dot}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span>LED Services</span>
                </div>
                <div className={`${styles.icon} ${ledOpen ? styles.rotate : ""}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {ledOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {ledServices.map((item, index) => (
                      <div key={index} className={styles.item}>{item}</div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            className={styles.serviceBox}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className={`${styles.wrapper} ${digitalOpen ? styles.active : ""}`}>
              <div className={styles.header} onClick={() => setDigitalOpen(!digitalOpen)}>
                <div className={styles.titleInfo}>
                  <motion.div
                    className={styles.dot}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span>Digital Marketing</span>
                </div>
                <div className={`${styles.icon} ${digitalOpen ? styles.rotate : ""}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {digitalOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {digitalServices.map((item, index) => (
                      <div key={index} className={styles.item}>{item}</div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.mobileLayout}>
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${mobileTab === "led" ? styles.tabActive : ""}`}
            onClick={() => setMobileTab("led")}
          >
            <img
              src="/Display-icon.png"
              alt=""
              className={styles.tabIcon}
            />
            <span>LED Services</span>
          </button>
          <button
            className={`${styles.tabBtn} ${mobileTab === "digital" ? styles.tabActive : ""}`}
            onClick={() => setMobileTab("digital")}
          >
            <span className={styles.tabEmoji}>📱</span>
            <span>Digital Marketing</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mobileTab}
            className={styles.mobileCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(mobileTab === "led" ? ledServices : digitalServices).map((item, index) => (
              <motion.div
                key={index}
                className={styles.mobileItem}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <span className={styles.mobileItemDot} />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Popup;