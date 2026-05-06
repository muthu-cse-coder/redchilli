import { FunctionComponent, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./index.module.scss";

const timelineData = [
    { year: "01", title: "High-Resolution LED Display", description: "Our vans and cars are equipped with ultra-bright HD LED screens." },
    { year: "02", title: "City-Wide Brand Visibility", description: "Promote your business across high-traffic areas and commercial zones." },
    { year: "03", title: "Flexible Campaign Scheduling", description: "Run ads by hour, day, or campaign duration with full flexibility." },
    { year: "04", title: "Targeted Route Planning", description: "We plan optimized routes based on your target audience locations." },
    { year: "05", title: "Live Tracking & Reporting", description: "Get GPS tracking access and campaign performance reports." },
    { year: "06", title: "Perfect for Events & Promotions", description: "Ideal for product launches, political campaigns, and brand activations." },
];

const ThirdPage: FunctionComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70, 
        damping: 30,
        restDelta: 0.001
    });
    const carTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className={styles.timelineSection}>
            <div className={styles.headerArea}>
                <span className={styles.topTag}>FEATURES</span>
                <h2 className={styles.heading}>Why Choose Our LED Van Advertising?</h2>
                <div className={styles.redUnderline}></div>
            </div>
            <div className={styles.timelineContainer} ref={containerRef}>
                <div className={styles.centerLine}>
                    <motion.div 
                        className={styles.movingVanWrapper}
                        style={{ top: carTop }}
                    >
                        <img 
                            // src="/LED-Photoroom.png" 
                            src="/45128f3c-95f1-4b05-98a4-04d58f9a3d16-Photoroom (1).png"
                            alt="Moving LED Van" 
                            className={styles.vanImage} 
                        />
                    </motion.div>
                </div>

                {timelineData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`} 
                    >
                        <div className={styles.dot}>
                            <span>{item.year}</span>
                        </div>
                        <div className={styles.card}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ThirdPage;