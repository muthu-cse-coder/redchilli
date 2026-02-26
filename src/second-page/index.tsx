// import React from "react";
// import './index.module.scss'
// import style from './index.module.scss'

// const SecondPage = () => {
//   return (
//     <div className={`${style.stSeconPageWrapper} row w-100`} >
//       <div className={`${style.stLeftSideWrapper} col-8 `} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
//         <h1 className={style.mainHeading}>
//           {/* Wrap the first part in a div to force it onto its own line */}
//           <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
//           <span className={style.highlight}>
//             Your Brand On The Move
//           </span>
//         </h1>
//         <p className={style.subHeading} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" >
//           Take your brand everywhere with eye-catching mobile displays.
//         </p>
//         <div className="d-flex gap-4" data-aos="fade-right" data-aos-offset="80" >
//           <button className={`${style.stButtonWrapper}`} >Get Free Quote <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span></button>
//           <button className={`${style.stSecondButtonWrapper}`}>Call Now <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span></button>
//         </div>
//       </div>
//       <div className={`${style.stRightSideWrapper} col-4 p-0 m-0 `} data-aos="zoom-in">
//         {/* <img src="public/WhatsApp Image 2026-02-26 at 11.13.39 AM.jpeg" alt="" /> */}
//         <img src="public/34047e7c-b451-4f4c-bcf1-fc5811ca885e.jfif" alt="" />
//       </div>
//     </div>
//   );
// };

// // export default SecondPage;
// import React from "react";
// import style from './index.module.scss';

// const SecondPage = () => {
//   return (
//     <div className={`${style.stSeconPageWrapper} row w-100 m-0`}>
//       <div className={`${style.stLeftSideWrapper} col-lg-8 col-md-12`} data-aos="fade-up" data-aos-duration="8000">
        
//         <h1 className={style.mainHeading}  data-aos="fade-up" data-aos-duration="8000">
//           <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
//           <span className={style.highlight}>Your Brand On The Move</span>
//         </h1>

//         <p className={style.subHeading} data-aos="fade-up" data-aos-delay="100">
//           Transform city streets into your showroom. 
//         </p>
//         <ul className={style.featureList} data-aos="fade-up" data-aos-delay="200">
//           <li><span className={style.checkIcon}>✓</span> High-Definition Outdoor LED Screens</li>
//           <li><span className={style.checkIcon}>✓</span> GPS Tracked Routes for Real-time Data</li>
//           <li><span className={style.checkIcon}>✓</span> 24/7 Dynamic Content Management</li>
//         </ul>
//         <div className="d-flex gap-4 mt-2" data-aos="fade-up" data-aos-delay="300">
//           <button className={style.stButtonWrapper}>
//             Get Free Quote 
//             <span>
//               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
//                 <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
//               </svg>
//             </span>
//           </button>
//           <button className={style.stSecondButtonWrapper}>
//             Call Now 
//             <span>
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M640-520v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm158 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
//             </span>
//           </button>
//         </div>
      //   <div className={style.statsContainer} data-aos="fade-up" data-aos-delay="400">
      //     <div className={style.statItem}>
      //       <h3>50K+</h3>
      //       <p>Daily Views</p>
      //     </div>
      //     <div className={style.statItem}>
      //       <h3>100%</h3>
      //       <p>Mobile Reach</p>
      //     </div>
      //     <div className={style.statItem}>
      //       <h3>20+</h3>
      //       <p>Cities Covered</p>
      //     </div>
      //   </div>
      // </div>
//       <div className={`${style.stRightSideWrapper} col-lg-4 col-md-12 p-0`} data-aos="zoom-in" data-aos-duration="1200">
//         <img src="public/34047e7c-b451-4f4c-bcf1-fc5811ca885e.jfif" alt="Mobile LED Truck" />
//       </div>
//     </div>
//   );
// };

// export default SecondPage;
import React from "react";
import style from './index.module.scss';

const SecondPage = () => {
  return (
    <div className={`${style.stSeconPageWrapper} row w-100 m-0`}   data-aos="fade-up" 
           data-aos-duration="9000">
      <div className={`${style.stLeftSideWrapper} col-lg-8 col-md-12`} 
           data-aos="fade-up" 
           data-aos-duration="2500"> {/* 2.5 seconds duration */}
        
        <h1 className={style.mainHeading}  
            data-aos="fade-up" 
            data-aos-duration="2500">
          <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
          <span className={style.highlight}>Your Brand On The Move</span>
        </h1>

        <p className={style.subHeading} 
           data-aos="fade-up" 
           data-aos-delay="500" // Half second delay 
           data-aos-duration="2000">
          Transform city streets into your showroom. 
        </p>

        <ul className={style.featureList} 
            data-aos="fade-up" 
            data-aos-delay="800" 
            data-aos-duration="2000">
          <li><span className={style.checkIcon}>✓</span> High-Definition Outdoor LED Screens</li>
          <li><span className={style.checkIcon}>✓</span> GPS Tracked Routes for Real-time Data</li>
          <li><span className={style.checkIcon}>✓</span> 24/7 Dynamic Content Management</li>
        </ul>

        <div className="d-flex gap-4 mt-2" 
             data-aos="fade-up" 
             data-aos-delay="1000" 
             data-aos-duration="2000">
          <button className={style.stButtonWrapper}>Get Free Quote...</button>
          <button className={style.stSecondButtonWrapper}>Call Now...</button>
        </div>

        <div className={style.statsContainer} data-aos="fade-up" data-aos-delay="9000">
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
           data-aos-duration="3000"> {/* Maximum standard slow animation */}
        <img src="/34047e7c-b451-4f4c-bcf1-fc5811ca885e.jfif" alt="Mobile LED Truck" />
      </div>
    </div>
  );
};

export default SecondPage;