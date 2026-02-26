// // // import { FunctionComponent } from "react";
// // // import style from './index.module.scss'
// // // interface FixthPageProps {

// import { FunctionComponent } from "react";

// // // }

// // // const FixthPage: FunctionComponent<FixthPageProps> = () => {
// // //     return (
// // //         <div className={`${style.stFixthWrapper}  row w-100`}>
// // //             <div className={`${style.stLeftSideWrapper} col m-0 p-0`}>
// // //                 <div className={`${style.stContentWrapper} `}>
// // //                     <h1>dfghjkl;</h1>
// // //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos alias impedit molestiae molestias, accusantium voluptatum distinctio minima perferendis dignissimos consequatur quam nostrum fugiat in ipsum laboriosam facilis tenetur voluptatem ab!</p>
// // //                 </div>
// // //                 <img src="public/Gemini_Generated_Image_eidqiaeidqiaeidq-Photoroom.png" alt="" />

// // //             </div>
// // //             <div className={`${style.stRightSideWrapper} col`}>
// // //                 <span>logo</span>
// // //                 <div>
// // //                     <span>  carpooling Made easy</span>
// // //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aliquid exercitationem maiores omnis necessitatibus error quaerat minima consequuntur obcaecati nulla?</p>
// // //                 </div>
// // //                 <span>contact :23456789</span>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default FixthPage;
// // import { FunctionComponent } from "react";
// // import style from "./index.module.scss";

// // const FixthPage: FunctionComponent = () => {
// //     return (
// //         <div className={`${style.stFixthWrapper}`}>
// //             <div className={`${style.stRowWrapper} row w-100`}>
// //             <div className={`${style.stLeftSideWrapper} col `}>
// //                 <div className={style.stContentWrapper}>
// //                     <h2>Enjoy a Safe Trip with Us!</h2>
// //                     <p>
// //                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                         Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
// //                     </p>
// //                 </div>

// //                 <img
// //                     src="/Gemini_Generated_Image_eidqiaeidqiaeidq-Photoroom.png"
// //                     alt="Car"
// //                     className={style.carImage}
// //                 />
// //             </div>
// //             <div className={`${style.stRightSideWrapper} col `}>
// //                 <div className={style.logo}>🚗 Your Logo</div>
// //                 <div className={style.greenCard}>
// //                     <h1>Carpooling</h1>
// //                     <h2>Made Easy</h2>
// //                     <p>
// //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
// //                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// //                     </p>
// //                 </div>

// //                 <div className={style.contact}>
// //                     Contact: XXX-XXXX-XXX
// //                 </div>
// //             </div>
// //         </div>
// //         </div>
// //     );
// // };

// // // export default FixthPage;
// // import style from './index.module.scss'
// // interface FixthPageProps {

// // }

// // const FixthPage: FunctionComponent<FixthPageProps> = () => {
// //     return (
// //         <div className={`${style.stFixthWrapper}`}>
// //             <div className={`${style.stRowWrapper}`}>
// //                 <div className={`${style.stFristColumnWrapper}`}>
// //                     <h2>Find work</h2>
// //                     <p>Browse design jobs and find your next career opportunity.

// //                         Some of the world’s best design-forward companies including Apple, Airbnb, IDEO, Meta, Google, Shopify and tens of thousands more hire creatives on  . Find your next project today!</p>
// //                     <button>get start</button>
// //                 </div>
// //                 <div className={`${style.stSecondColumnWrapper}`}>
// //                     <h3>fghjkl;</h3>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default FixthPage;
// // import { FunctionComponent } from "react";
// import style from "./index.module.scss";

// interface FixthPageProps { }

// const FixthPage: FunctionComponent<FixthPageProps> = () => {
//     return (
//         <div className={style.stFixthWrapper}>
//             <div className={style.stRowWrapper}>
//                 <div className={style.stFristColumnWrapper} data-aos="fade-up-right">
//                     <h2>LED Truck Advertising Services</h2>
//                     {/* <p>
//                         Take your brand to the streets with RedChilly’s high-impact
//                         Mobile LED Billboard Trucks. We bring your advertisement
//                         directly to your customers through dynamic digital displays
//                         across prime city locations.
//                         Perfect for product launches, political campaigns,
//                         real estate promotions, movie releases, and event marketing.
//                         Your brand. On Wheels.
//                     </p> */}
//                     <ul>
//                         <li>
//                             360-degree visibility across cities and crowded locations.
//                         </li>
//                         <li> Day and night clear display.</li>
//                         <li>Ideal for product launches, political campaigns, roadshows, and event promotions</li>
//                         <li>  Live video, animations, and promotional advertisements.
//                         </li>
//                     </ul>
//                     <button>Book Your Campaign</button>
//                 </div>
//                 <div className={style.stSecondColumnWrapper} data-aos="fade-right"
//                     data-aos-offset="300"
//                     data-aos-easing="ease-in-sine">
//                     <img src="public/Gemini_Generated_Image_ji4d7eji4d7eji4d.png" alt="" />
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default FixthPage;
import React, { FunctionComponent } from 'react';
import style from "./index.module.scss";

const FixthPage: FunctionComponent = () => {
    return (
        <div className={style.stFixthWrapper}>
            <div className={style.stRowWrapper}>
                 
                <div className={style.stFristColumnWrapper} data-aos="fade-up-right" data-aos-offset="0" data-aos-duration="900">
                    <h2>RedChilli LED Truck Advertising</h2>
                    <ul>
                        <li>360-degree visibility across cities and crowded locations.</li>
                        <li>High-definition display crystal clear Day and Night.</li>
                        <li>Ideal for product launches, political campaigns, and roadshows.</li>
                        <li>Supports live video, animations, and real-time advertisements.</li>
                    </ul>
                    <button>Book Your Campaign</button>
                </div>

                <div className={style.stSecondColumnWrapper}
                    data-aos="fade-left"
                    // data-aos-offset="420"
                    data-aos-duration="900">
                    {/* Make sure to use the high-quality white-background truck image here */}
                    {/* <img src="public/Gemini_Generated_Image_ji4d7eji4d7eji4d.png" alt="RedChilly LED Advertising Truck" /> */}
                   <img src="/93560a11-9928-4426-ab0c-3650b09fdaf8.jfif" alt="" />

                </div>
            </div>
        </div>
    );
};

export default FixthPage;
