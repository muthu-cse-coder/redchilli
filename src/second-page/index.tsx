// import React from "react";
// import style from './index.module.scss';

// const SecondPage = () => {
//     return (
//         <div className={`${style.stSeconPageWrapper} row w-100 m-0`} data-aos="fade-up"
//             data-aos-duration="1200">
//             <div className={`${style.stLeftSideWrapper} col-lg-8 col-md-12`}
//                 data-aos="fade-up"
//                 data-aos-duration="1300">
//                 <h1 className={style.mainHeading}
//                     data-aos="fade-up"
//                     data-aos-duration="1300">
//                     <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
//                     <span className={style.highlight}>Your Brand On The Move</span>
//                 </h1>
//                 <p className={style.subHeading}
//                     data-aos="fade-up"
//                     data-aos-delay="400"
//                     data-aos-duration="1300">
//                     Transform city streets into your showroom.
//                 </p>
//                 <ul className={style.featureList}
//                     data-aos="fade-up"
//                     data-aos-delay="650"
//                     data-aos-duration="1300">
//                     <li><span className={style.checkIcon}>✓</span> High-Definition Outdoor LED Screens</li>
//                     <li><span className={style.checkIcon}>✓</span> GPS Tracked Routes for Real-time Data</li>
//                     <li><span className={style.checkIcon}>✓</span> 24/7 Dynamic Content Management</li>
//                 </ul>
//                 <div className={`${style.ctaButtons} mt-2`}
//                     data-aos="fade-up"
//                     data-aos-delay="380"
//                     data-aos-duration="1200">
//                     <button className={style.stButtonWrapper}>Get Free Quote...</button>
//                     <a href="tel:1234567894" className={style.stSecondButtonWrapper}>Call Now...</a>
//                 </div>
//                 <div className={style.statsContainer} data-aos="fade-up" data-aos-delay="750" data-aos-duration="1200">
//                     <div className={style.statItem}>
//                         <h3>50K+</h3>
//                         <p>Daily Views</p>
//                     </div>
//                     <div className={style.statItem}>
//                         <h3>100%</h3>
//                         <p>Mobile Reach</p>
//                     </div>
//                     <div className={style.statItem}>
//                         <h3>20+</h3>
//                         <p>Cities Covered</p>
//                     </div>
//                 </div>
//             </div>
//             <div className={`${style.stRightSideWrapper} col-lg-4 col-md-12 p-0`}
//                 data-aos="zoom-in"
//                 data-aos-duration="1300">
//                 <img src="public/ecb01452-b655-42b5-8fcf-da57b35acbd2.jfif" alt="Mobile LED Truck" />
//             </div>
//         </div>
//     );
// };

// export default SecondPage;

// // import React from "react";
// // import style from './index.module.scss';

// // const SecondPage = () => {
// //     return (
// //         <div className={`${style.stSecondPageWrapper} row w-100 m-0`} 
// //              data-aos="fade-up"
// //              data-aos-duration="1200">

// //             <div className={`${style.stLeftSideWrapper} col-lg-7 col-md-12`}
// //                 data-aos="fade-right"
// //                 data-aos-duration="1300">

// //                 <h1 className={style.mainHeading}>
// //                     <div className={style.firstLine}>LED WALL DISPLAY SOLUTIONS</div>
// //                     <span className={style.highlight}>Indoor & Outdoor LED Walls</span>
// //                 </h1>
// //                 <p className={style.subHeading}>
// //                     Custom-size LED Walls for all events. Suitable for Conferences, Malls, Exhibitions & Weddings.
// //                 </p>

// //                 <div className={style.infoGrid}>
// //                     <div className={style.infoBox}>
// //                         <h3>Technical</h3>
// //                         <ul>
// //                             <li><span className={style.bullet}>•</span> High Refresh Rate</li>
// //                             <li><span className={style.bullet}>•</span> Weatherproof Forces</li>
// //                             <li><span className={style.bullet}>•</span> Low Power Consumption</li>
// //                             <li><span className={style.bullet}>•</span> Seamless Integration</li>
// //                         </ul>
// //                     </div>
// //                     <div className={style.infoBox}>
// //                         <h3>Applications</h3>
// //                         <ul>
// //                             <li><span className={style.bullet}>•</span> Corporate Events & Meetings</li>
// //                             <li><span className={style.bullet}>•</span> Concerts & Live Shows</li>
// //                             <li><span className={style.bullet}>•</span> Wedding Backdrops</li>
// //                             <li><span className={style.bullet}>•</span> Retail Branding</li>
// //                         </ul>
// //                     </div>
// //                 </div>

// //                 <div className={`${style.ctaButtons} mt-4`}>
// //                     <button className={style.stButtonWrapper}>Get Free Quote</button>
// //                     <a href="tel:9150445241" className={style.stSecondButtonWrapper}>9150445241</a>
// //                 </div>
// //             </div>

// //             <div className={`${style.stRightSideWrapper} col-lg-5 col-md-12`}
// //                 data-aos="zoom-in-left"
// //                 data-aos-duration="1300">
// //                 <div className={style.imageContainer}>
// //                     <div className={style.glowEffect}></div>
// //                     <img 
// //                         src="/34047e7c-b451-4f4c-bcf1-fc5811ca885e.jfif" 
// //                         alt="Mobile LED Truck" 
// //                         className={style.truckImg}
// //                     />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SecondPage;
import React from "react";
import style from './index.module.scss';

const SecondPage = () => {
    return (
        <div className={`${style.stSeconPageWrapper} row w-100 m-0`} data-aos="fade-up">
            <div className={`${style.stLeftSideWrapper} col-lg-7 col-md-12`}
                data-aos="fade-right"
                data-aos-duration="1200">

                <h1 className={style.mainHeading}>
                    <div className={style.firstLine}>LED MARKETING & ADVERTISING</div>
                    <span className={style.highlight}>Your Brand On The Move</span>
                </h1>

                <div className={style.subHeadingWrapper}>
                    <p className={style.subHeading}>
                        Transform city streets into your showroom with high-impact mobile digital billboards that capture every eye.
                    </p>
                </div>

                <ul className={style.featureList}>
                    <li><span className={style.checkIcon}>●</span> High-Definition Outdoor LED Screens</li>
                    <li><span className={style.checkIcon}>●</span> GPS Tracked Routes for Real-time Data</li>
                    <li><span className={style.checkIcon}>●</span> 24/7 Dynamic Content Management</li>
                </ul>

                <div className={style.ctaButtons}>
                    <button className={style.stButtonWrapper}>
                        Get Free Quote <span>→</span>
                    </button>
                    <a href="tel:1234567894" className={style.stSecondButtonWrapper}>
                        Call Now <span>⚡</span>
                    </a>
                </div>

                <div className={style.statsContainer}>
                    <div className={style.statItem}>
                        <h3>50K+</h3>
                        <p>Daily Views</p>
                    </div>
                    <div className={style.statDivider}></div>
                    <div className={style.statItem}>
                        <h3>100%</h3>
                        <p>Mobile Reach</p>
                    </div>
                    <div className={style.statDivider}></div>
                    <div className={style.statItem}>
                        <h3>20+</h3>
                        <p>Cities Covered</p>
                    </div>
                </div>
            </div>

            {/* <div className={`${style.stRightSideWrapper} col-lg-5 col-md-12 p-0`}
                data-aos="zoom-in-left"
                data-aos-duration="1300">
                <div className={style.imageContainer}>
                    <div className={style.redFloatingCard}>LIVE ADVERTISING</div>
                    <img src="public/ecb01452-b655-42b5-8fcf-da57b35acbd2.jfif" alt="Mobile LED Truck" />
                </div>
            </div> */}
            <div className={`${style.stRightSideWrapper} col-lg-5 col-md-12 p-0`}
                data-aos="zoom-in-left"
                data-aos-duration="1300">
                <div className={style.imageContainer}>
                    <div className={style.redFloatingCard}>LIVE ADVERTISING</div>

                    <img src="/ecb01452-b655-42b5-8fcf-da57b35acbd2.jfif" alt="Mobile LED Truck" />

                    {/* Mobile only content */}
                    <div className={style.mobileOnlyContent}>
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
            </div>
        </div>
    );
};

export default SecondPage;