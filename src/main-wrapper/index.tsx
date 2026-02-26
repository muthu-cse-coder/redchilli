// import { FunctionComponent, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import style from './index.module.scss';
// import AdminPage from "../admin-page";
// // ... imports same
// const MainWrapper: FunctionComponent = () => {
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"]
//     });

//     const chillyScale = useTransform(scrollYProgress, [0, 0.5], [1, 15]);
//     const chillyOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
//     const adminScale = useTransform(scrollYProgress, [0.3, 0.8], [0.8, 1]);
//     const adminOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

//     return (
//         <div ref={containerRef} className={style.mainScrollContainer}>
//             <div className={style.stickyWrapper}>
//                 <motion.div
//                     style={{ scale: chillyScale, opacity: chillyOpacity, zIndex: 1 }}
//                     className={style.layer}
//                 >
//                     <div className={style.sloganContent}>
//                         {/* FIX: Removed 'public/' prefix */}
//                         <img src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" alt="Chilly" />
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     style={{ 
//                         scale: adminScale, 
//                         opacity: adminOpacity, 
//                         zIndex: 2,
//                         // Scroll panna munnadi ithu interfere aaga koodathu
//                         pointerEvents: adminOpacity.get() > 0.1 ? "auto" : "none" 
//                     }}
//                     className={`${style.layer} ${style.adminLayer}`}
//                 >
//                     <AdminPage />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
// // const MainWrapper: FunctionComponent = () => {
// //     const containerRef = useRef(null);
// //     const { scrollYProgress } = useScroll({
// //         target: containerRef,
// //         offset: ["start start", "end end"]
// //     });
// //     const chillyScale = useTransform(scrollYProgress, [0, 0.5], [1, 15]);
// //     const chillyOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
// //     const adminScale = useTransform(scrollYProgress, [0.3, 0.8], [0.8, 1]);
// //     const adminOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

// //     return (
// //         <div ref={containerRef} className={style.mainScrollContainer}>
// //             <div className={style.stickyWrapper}>
// //                 <motion.div
// //                     style={{ scale: chillyScale, opacity: chillyOpacity }}
// //                     className={style.layer}
// //                 >
// //                     <div className={`${style.sloganContent} `}>
// //                      <img src="public/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" />
// //                     </div>
// //                 </motion.div>
// //                 <motion.div
// //                     style={{ scale: adminScale, opacity: adminOpacity }}
// //                     className={`${style.layer} ${style.adminLayer}`}
// //                 >
// //                     <AdminPage />
// //                 </motion.div>

// //             </div>
// //         </div>
// //     );
// // }

// export default MainWrapper;
import { FunctionComponent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import style from './index.module.scss';
// import AdminPage from "./AdminPage"; // path-ai check pannikonga
// import AdminPage from './admin-page'
import AdminPage from "../admin-page";

const MainWrapper: FunctionComponent = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // First Image (Chilly): 1-la irunthu 10-ku zoom aagum
    const chillyScale = useTransform(scrollYProgress, [0, 0.4], [1, 10]);
    const chillyOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);

    // Admin Page: 0.5-la irunthu 1-ku scale aagi ulla varum
    const adminScale = useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1]);
    const adminOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <div ref={containerRef} className={style.mainScrollContainer}>
            <div className={style.stickyWrapper}>
                
                {/* Layer 1: Chilly Image (First Page) */}
                <motion.div
                    style={{ 
                        scale: chillyScale, 
                        opacity: chillyOpacity, 
                        zIndex: 1 
                    }}
                    className={style.layer}
                >
                    <div className={style.sloganContent}>
                        <img src="/e237c98f-8a50-426c-8d51-8463f543ed9f.jfif" alt="Chilly" />
                    </div>
                </motion.div>

                {/* Layer 2: Admin Page (Next Page) */}
                <motion.div
                    style={{ 
                        scale: adminScale, 
                        opacity: adminOpacity, 
                        zIndex: 2,
                        // Scroll panna munnadi ithu mouse clicks-ai thadukkum
                        pointerEvents: scrollYProgress.get() > 0.5 ? "auto" : "none" 
                    }}
                    className={`${style.layer} ${style.adminLayer}`}
                >
                    <AdminPage />
                </motion.div>
                
            </div>
        </div>
    );
}

export default MainWrapper;