// import styles from "./index.module.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FunctionComponent, useEffect } from "react";

// interface SeventhPageProps {}

// const SeventhPage: FunctionComponent<SeventhPageProps> = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const services = [
//     {
//       title: "LED Truck Advertising",
//       desc: "Reach your audience anywhere with high-impact mobile billboard trucks.",
//       image: "public/Mobile-LED-Screen-Trailer-Rental.jpg",
//       tag: "Mobile Ads",
//       animation: "fade-down-right" , data-aos-offset="900"
//     },
//     {
//       title: "Indoor LED Wall Rental",
//       desc: "Perfect for weddings, corporate events, and concerts with 4K clarity.",
//       image: "public/Gemini_Generated_Image_btj126btj126btj1.png",
//       tag: "Events",
//       animation: "fade-down-left" 
//     },
//     {
//       title: "Outdoor LED Installation",
//       desc: "Durable, weather-proof, and bright solutions for permanent displays.",
//       image: "public/Gemini_Generated_Image_r5qi0xr5qi0xr5qi.png",
//       tag: "Permanent",
//       animation: "fade-up"
//     },
//     {
//       title: "Event Display Solutions",
//       desc: "Comprehensive visual setups for exhibitions and large-scale roadshows.",
//       image: "public/Gemini_Generated_Image_80ef5e80ef5e80ef.png",
//       tag: "Exhibitions",
//       animation: "fade-down" 
//     }
//   ];

//   return (
//     <section className={styles.visualWrapper}>
//       <div className={styles.container}>
//         <div className={styles.headerSection} data-aos="fade-up"  data-aos-offset="900">
//           <h2>Our Specialized Services</h2>
//           <div className={styles.redLine}></div>
//         </div>

//         <div className={styles.serviceLayout}  data-aos-offset="900">
//           {services.map((item, index) => (
//             <div 
//               key={index} 
//               className={styles.itemCard}
//               data-aos={item.animation} 
//             >
//               <div className={styles.imageBox}>
//                 <img src={item.image} alt={item.title} />
//                 <div className={styles.overlay}>
//                   <span className={styles.tag}>{item.tag}</span>
//                 </div>
//               </div>
//               <div className={styles.infoBox}>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//                 <button className={styles.btnLink}>Learn More →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeventhPage;
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FunctionComponent, useEffect } from "react";

interface SeventhPageProps {}

const SeventhPage: FunctionComponent<SeventhPageProps> = () => {
  useEffect(() => {
    // Duration and once setting for global feel
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "LED Truck Advertising",
      desc: "Reach your audience anywhere with high-impact mobile billboard trucks.",
      image: "/Mobile-LED-Screen-Trailer-Rental.jpg", 
      tag: "Mobile Ads",
      animation: "fade-right",
      offset: "900"
    },
    {
      title: "Indoor LED Wall Rental",
      desc: "Perfect for weddings, corporate events, and concerts with 4K clarity.",
      image: "/Gemini_Generated_Image_btj126btj126btj1.png",
      tag: "Events",
      animation: "fade-left",
      offset: "1000"
    },
    {
      title: "Outdoor LED Installation",
      desc: "Durable, weather-proof, and bright solutions for permanent displays.",
      image: "/Gemini_Generated_Image_r5qi0xr5qi0xr5qi.png",
      tag: "Permanent",
      animation: "fade-up",
      offset: "1000"
    },
    {
      title: "Event Display Solutions",
      desc: "Comprehensive visual setups for exhibitions and large-scale roadshows.",
      image: "/Gemini_Generated_Image_80ef5e80ef5e80ef.png",
      tag: "Exhibitions",
      animation: "fade-up",
      offset: "1000"
    }
  ];

  return (
    <section id="OurServices" className={styles.visualWrapper}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerSection} data-aos="fade-down">
          <h2>Our Specialized Services</h2>
          <div className={styles.redLine}></div>
        </div>
        {/* Services Grid */}
        <div className={styles.serviceLayout}>
          {services.map((item, index) => (
            <div 
              key={index} 
              className={styles.itemCard}
              data-aos={item.animation} 
              data-aos-offset={item.offset}
            >
              <div className={styles.imageBox}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
              </div>
              <div className={styles.infoBox}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className={styles.btnLink}>
                  Learn More 
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ff0000">
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhPage;