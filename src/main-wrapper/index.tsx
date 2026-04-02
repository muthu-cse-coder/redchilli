import { FunctionComponent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import style from './index.module.scss';
import AdminPage from "../admin-page";

const MainWrapper: FunctionComponent = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const chillyScale = useTransform(scrollYProgress, [0, 0.4], [1, 10]);
    const chillyOpacity = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
    const adminScale = useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1]);
    const adminOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <div ref={containerRef} className={style.mainScrollContainer}>
            <div className={style.stickyWrapper}>
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
                <motion.div
                    style={{ 
                        scale: adminScale, 
                        opacity: adminOpacity, 
                        zIndex: 2,
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