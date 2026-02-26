// // // // import { FunctionComponent, useState, useEffect } from "react";
// // // // import style from './index.module.scss';

// // // // const AdminPage: FunctionComponent = () => {
// // //   // const [showSecondImage, setShowSecondImage] = useState(false);

// // //   // useEffect(() => {
// // //   //   const timer = setTimeout(() => { setShowSecondImage(true); }, 800);
// // //   //   return () => clearTimeout(timer);
// // //   // }, []);

// // // //   return (
// // // //     <div className={style.stAdminWrapper}>
// // // //   <img src="/Admin.png" alt="First" className={style.stFristImageWrapper} />
// // // //   {showSecondImage && (
// // // //     <img
// // // //       src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
// // // //       alt="Second"
// // // //       data-aos="fade-up"
// // // //       className={style.stSecondImageWrapper}/>
// // // //   )}
// // // // </div>
// // // //   );
// // // // };

// // // // // export default AdminPage;
// // // // import { useState, useEffect } from "react";
// // // // import style from './index.module.scss';

// // // // const AdminPage = () => {
// // // //    const [showSecondImage, setShowSecondImage] = useState(false);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => { setShowSecondImage(true); }, 800);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);
// // // //   const [scrollY, setScrollY] = useState(0);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScrollY(window.scrollY);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   // Scroll panna panna zoom level increase aagum (1 la irundhu 1.5 varaikkum)
// // // //   const scaleValue = 1 + scrollY / 1000;
// // // //   // Navbar opacity scroll panna panna increase aagum
// // // //   const navOpacity = Math.min(scrollY / 300, 1);

// // // //   return (
// // // //     <div className={style.stAdminWrapper}>
// // // //       {/* Dynamic Navbar */}
// // // //       <nav
// // // //         className={style.stNavbar}
// // // //         style={{ opacity: navOpacity, transform: `translateY(${scrollY > 50 ? 0 : -20}px)` }}
// // // //       >
// // // //         <div className={style.logo}>LOGO</div>
// // // //         <ul>
// // // //           <li>Home</li>
// // // //           <li>Dashboard</li>
// // // //           <li>Settings</li>
// // // //         </ul>
// // // //       </nav>

// // // //       {/* Zooming Image Section */}
// // // //       <div className={style.stImageContainer}>
// // // //         <img
// // // //           src="public/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif"
// // // //           alt="Admin Truck"
// // // //           className={style.stSecondImageWrapper}
// // // //           style={{ transform: `scale(${scaleValue})` }}
// // // //         />
// // // //         <div className={style.heroText} style={{ opacity: 1 - scrollY / 200 }}>
// // // //           {/* <h1>Scroll to Explore</h1> */}
// // // //         </div>
// // // //       </div>

// // // //       {/* Second Page Content */}
// // // //       <div className={style.stContentPage}>
// // // //         <img src="/Admin.png" alt="First" className={style.stFristImageWrapper} />
// // // //         {showSecondImage && (
// // // //           <img
// // // //             src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
// // // //             alt="Second"
// // // //             data-aos="fade-up"
// // // //             className={style.stSecondImageWrapper} />
// // // //         )}
// // // //       </div>
// // // //       <img
// // // //         src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
// // // //         alt="Second"
// // // //         data-aos="fade-up"
// // // //         className={style.stSecondImageWrapper} />

// // // //     </div>
// // // //     </div >
// // // //   );
// // // // };

// // // // export default AdminPage;
// // // import { useState, useEffect } from "react";
// // // import style from './index.module.scss';

// // // const AdminPage = () => {
// // //   const [showSecondImage, setShowSecondImage] = useState(false);
// // //   const [scrollY, setScrollY] = useState(0);

// // //   // Initial delay for the second image
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => { setShowSecondImage(true); }, 800);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   // Optimized scroll listener
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       // requestAnimationFrame helps keep the animation smooth
// // //       window.requestAnimationFrame(() => {
// // //         setScrollY(window.scrollY);
// // //       });
// // //     };

// // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   // Calculation Logic
// // //   const scaleValue = 1 + scrollY / 1000;
// // //   const navOpacity = Math.min(scrollY / 300, 1);
// // //   const heroOpacity = Math.max(1 - scrollY / 400, 0); // Fades out as you scroll

// // //   return (
// // //     <div className={style.stAdminWrapper}>
// // //       <div className={style.stImageContainer}>
// // //         <img
// // //           src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" 
// // //           alt="Admin Truck"
// // //           className={style.stZoomImage}
// // //           style={{ transform: `scale(${scaleValue})` }}
// // //         />
// // //         {/* <div className={style.heroText} style={{ opacity: heroOpacity }}>
// // //           <h1>Scroll to Explore</h1>
// // //         </div> */}
// // //       </div>
// // //       <div className={style.stContentPage}>
// // //         <img src="/Admin.png" alt="First" className={style.stFristImageWrapper} />
        
// // //         {showSecondImage && (
// // //           <img
// // //             src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
// // //             alt="Second"
// // //             data-aos="fade-up"
// // //             className={style.stSecondImageWrapper} 
// // //           />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminPage;
// // import { useState, useEffect } from "react";
// // import style from './index.module.scss';

// // const AdminPage = () => {
//   const [showSecondImage, setShowSecondImage] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       window.requestAnimationFrame(() => {
//         setScrollY(window.scrollY);
//       });
//     };
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Delay the second image (LED/Admin) appearing after a certain scroll point
// //   useEffect(() => {
// //     if (scrollY > 400) {
// //       const timer = setTimeout(() => { setShowSecondImage(true); }, 500);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [scrollY]);

// //   // Calculations
// //   const scaleValue = 1 + scrollY / 800;
// //   // First section fades out as you scroll down
// //   const firstSectionOpacity = Math.max(1 - scrollY / 600, 0); 

// //   return (
// //     <div className={style.stAdminWrapper}>
// //       {/* SECTION 1: The Zooming Truck */}
// //       <div 
// //         className={style.stImageContainer} 
// //         style={{ opacity: firstSectionOpacity, pointerEvents: firstSectionOpacity === 0 ? 'none' : 'auto' }}
// //       >
// //         <img
// //           src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" 
// //           alt="Admin Truck"
// //           className={style.stZoomImage}
// //           style={{ transform: `scale(${scaleValue})` }}
// //         />
// //       </div>

// //       {/* SECTION 2: The Content (LED and Second Image) */}
// //       <div className={style.stContentPage}>
// //         {/* The LED/Admin image appears first */}
// //         <img 
// //           src="/Admin.png" 
// //           alt="First" 
// //           className={style.stFristImageWrapper} 
// //           style={{ opacity: scrollY > 300 ? 1 : 0, transition: 'opacity 0.8s ease' }}
// //         />
// //         {/* The second image appears with a slight delay after scrolling */}
        // {showSecondImage && (
        //   <img
        //     src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
        //     alt="Second"
        //     className={style.stSecondImageWrapper} 
        //   />
        // )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminPage;
// import { useState, useEffect } from "react";
// import style from './index.module.scss';

// const AdminPage = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       window.requestAnimationFrame(() => {
//         setScrollY(window.scrollY);
//       });
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Zoom logic for the truck
//   const scaleValue = 1 + scrollY / 500; 
  
//   // Appearance logic for the second image (LED/Admin)
//   // Starts appearing after 100px of scroll
//   const secondImgOpacity = Math.min((scrollY - 100) / 400, 1);
//   const secondImgScale = 0.8 + (scrollY / 2000); // Slight grow effect

//   return (
//     <div className={style.stAdminWrapper}>
//       {/* Background Zooming Truck */}
//       <div className={style.stImageContainer}>
//         <img
//           src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" 
//           alt="Admin Truck"
//           className={style.stZoomImage}
//           style={{ transform: `scale(${scaleValue})` }}
//         />
//       </div>

//       {/* Overlapping Content Section */}
//       <div className={style.stOverlayContent}>
//         <img 
//           src="/Admin.png" 
//           alt="LED Admin" 
//           className={style.stFristImageWrapper} 
//           style={{ 
//             opacity: secondImgOpacity > 0 ? secondImgOpacity : 0,
//             // transform: `scale(${secondImgScale})`,
//             // transition: 'opacity 0.3s ease-out'
//           }}
//         />
        
//         {/* Third Image (The PNG) appears later */}
//         {scrollY > 600 && (
//           <img
//             src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
//             alt="Second"
//             className={style.stSecondImageWrapper} 
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// // export default AdminPage;
// import { useState, useEffect } from "react";
// import style from './index.module.scss';

// const AdminPage = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll panna panna zoom level increase aagum (1 la irundhu 1.5 varaikkum)
//   const scaleValue = 1 + scrollY / 1000;
//   // Navbar opacity scroll panna panna increase aagum
//   const navOpacity = Math.min(scrollY / 300, 1);

//   return (
//     <div className={style.stAdminWrapper}>
//       {/* Zooming Image Section */}
//       <div className={style.stImageContainer}>
//         <img
//           src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif"
//           alt="Admin Truck"
//           className={style.stSecondImageWrapper}
//           style={{ transform: `scale(${scaleValue})` }}
//         />
//         {/* <div className={style.heroText} style={{ opacity: 1 - scrollY / 200 }}>
//           <h1>Scroll to Explore</h1>
//         </div> */}
//       </div>

//       {/* Second Page Content */}
//       <div className={style.stContentPage}>
//         {/* {showSecondImage && ( */}
//         {/* <img src="/Admin.png" alt="" />
//           <img
//             src="/Gemini_Generated_Image_qudajpqudajpquda-removebg-preview.png"
//             alt="Second"
//             className={style.stSecondImageWrapper} 
//              data-aos="flip-right"
//           /> */}
//           <video width="100%" height="auto" controls>
//   <source src="/Untitled design.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
import { useState, useEffect } from "react";
import style from './index.module.scss';

const AdminPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleValue = 1 + scrollY / 1000;

  return (
    <div className={style.stAdminWrapper}>
      <div className={style.stImageContainer}>
        <img
          src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif"
          alt="Admin Truck"
          className={style.stTruckImg}
          style={{ transform: `scale(${scaleValue})`,width:"100%" }}
        />
      </div>
      <div className={style.stContentPage}>
        <div className={style.stLedWrapper}>
          <div className={style.stVideoContainer}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={style.stEmbeddedVideo}
            >
              <source src="/Untitled design.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;