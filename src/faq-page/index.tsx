// // import { useState } from "react";
// // import styles from "./index.module.scss";

// // const faqData = [
// //   {
// //     question: "What types of LED display solutions do you provide?",
// //     answer:"We provide indoor and outdoor LED screens, video walls, digital display boards, and scrolling LED boards as per customer requirements"
// //   },
// //   {
// //     question: "How much does an LED advertising board cost?",
// //     answer:
// //       "Pricing depends on screen size, resolution, and installation location. Contact us for a customized quotation."
// //   },
// //   {
// //     question: "Can we update content on the LED screen easily?",
// //     answer:
// //       " Yes, content can be updated easily. We also provide basic training and remote update options."
// //   },
// //   {
// //     question: " Do you offer installation and maintenance services?",
// //     answer:
// //       "Yes, we provide complete installation along with ongoing service and maintenance support."
// //   },
// //   {
// //     question: "How long does installation take?",
// //     answer:
// //       "Installation is usually completed within 3–7 working days after confirmation."
// //   }
// // ];

// // const FaqPage = () => {
// //   const [activeIndex, setActiveIndex] = useState<number | null>(null);

// //   const toggleFAQ = (index: number) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <div className={styles.faqWrapper}>
// //       <div className={styles.container}>
// //         <h1 className={styles.title}>
// //           🚛 RedChilly Mobile LED Billboard Truck
// //         </h1>
// //         <p className={styles.subtitle}>
// //           Your Brand. On The Move.
// //         </p>

// //         <div className={styles.faqList}>
// //           {faqData.map((faq, index) => (
// //             <div
// //               key={index}
// //               data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
// //               className={`${styles.faqItem} ${
// //                 activeIndex === index ? styles.active : ""
// //               }`}
// //             >
// //               <div
// //                 className={styles.question}
// //                 onClick={() => toggleFAQ(index)}
// //               >
// //                 {faq.question}
// //                 <span>{activeIndex === index ? "-" : "+"}</span>
// //               </div>

// //               {activeIndex === index && (
// //                 <div className={styles.answer}>
// //                   {faq.answer}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FaqPage;
// import { useState } from "react";
// import styles from "./index.module.scss";

// const faqData = [
//   {
//     question: "What types of LED display solutions do you provide?",
//     answer:"We provide indoor and outdoor LED screens, video walls, digital display boards, and scrolling LED boards as per customer requirements"
//   },
//   {
//     question: "How much does an LED advertising board cost?",
//     answer:
//       "Pricing depends on screen size, resolution, and installation location. Contact us for a customized quotation."
//   },
//   {
//     question: "Can we update content on the LED screen easily?",
//     answer:
//       " Yes, content can be updated easily. We also provide basic training and remote update options."
//   },
//   {
//     question: " Do you offer installation and maintenance services?",
//     answer:
//       "Yes, we provide complete installation along with ongoing service and maintenance support."
//   },
//   {
//     question: "How long does installation take?",
//     answer:
//       "Installation is usually completed within 3–7 working days after confirmation."
//   }
// ];

// const FaqPage = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className={styles.faqWrapper}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>
//           🚛 RedChilly Mobile LED Billboard Truck
//         </h1>
//         <p className={styles.subtitle}>
//           Your Brand. On The Move.
//         </p>

//         <div className={styles.faqList}>
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
//               className={`${styles.faqItem} ${
//                 activeIndex === index ? styles.active : ""
//               }`}
//             >
//               <div
//                 className={styles.question}
//                 onClick={() => toggleFAQ(index)}
//               >
//                 {faq.question}
//                 <span>{activeIndex === index ? "-" : "+"}</span>
//               </div>

//               {activeIndex === index && (
//                 <div className={styles.answer}>
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqPage;
import { useState } from "react";
import styles from "./index.module.scss";

const faqData = [
  {
    question: "What is RedChilli Mobile LED Billboard Truck?",
    answer:
      "RedChilli Mobile LED Billboard Truck is a high-impact outdoor advertising solution where your brand is displayed on a large digital LED screen mounted on a moving truck. It travels across prime locations to maximize visibility and brand reach.",
   animation: "fade-up",
      offset: "1000"
    },
  {
    question: "Why choose RedChilli for Mobile LED Advertising?",
    answer:
      "We offer high brightness LED screens, targeted route planning, city-wide coverage, affordable pricing, and guaranteed brand visibility. We take your brand directly to your customers.",
       animation: "fade-down",
      offset: "1000"
  },
  {
    question: "Where does the truck operate?",
    answer:
      "Our trucks operate in high-traffic roads, IT corridors, shopping zones, event venues, commercial hubs, and customized routes based on your target audience.",
       animation: "fade-right",
      offset: "1000"
  },
  {
    question: "What type of content can be displayed?",
    answer:
      "You can display HD video ads, product launches, event promotions, political campaigns, brand awareness ads, and festive offers.",
       animation: "fade-left",
      offset: "1000"
  },
  {
    question: "How do I book a campaign?",
    answer:
      "Contact our RedChilli team, choose your route and campaign duration, share your creative, and we’ll get your brand moving on the roads.",
       animation: "fade-up",
      offset: "1000"
  }
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper} id="features">
      <div className={styles.container}>
        <h1 className={styles.title}>
          RedChilli Mobile LED Billboard Truck
        </h1>
        <p className={styles.subtitle}>
          Your Brand. On The Move.
        </p>

        <div className={styles.faqList} data-aos="flip-right"data-aos-delay="500">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div className={styles.answer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;