import { FunctionComponent, useEffect } from "react";
import styles from "./index.module.scss";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "01",
        title: "High-Resolution LED Display",
        description:
            "Our vans and cars are equipped with ultra-bright HD LED screens that deliver crystal-clear advertisements even in daylight.",
    },
    {
        year: "02",
        title: "City-Wide Brand Visibility",
        description:
            "Promote your business across high-traffic areas, events, and commercial zones to maximize daily audience reach.",
    },
    {
        year: "03",
        title: "Flexible Campaign Scheduling",
        description:
            "Run ads by hour, day, or campaign duration with complete flexibility and real-time monitoring support.",
    },
    {
        year: "04",
        title: "Targeted Route Planning",
        description:
            "We plan optimized routes based on your target audience locations for better engagement and conversion.",
    },
    {
        year: "05",
        title: "Live Tracking & Reporting",
        description:
            "Get GPS tracking access and campaign performance reports for full transparency and analytics.",
    },
    {
        year: "06",
        title: "Perfect for Events & Promotions",
        description:
            "Ideal for product launches, political campaigns, retail sales, movie promotions, and brand activations.",
    },
];

const ThirdPage: FunctionComponent = () => {

    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.timelineItem}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.active);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.forEach((item) => observer.observe(item));
    }, []);

    return (
        <div className={styles.timelineSection}>
            <h2 className={styles.heading}>
                Why Choose Our LED Van Advertising?
            </h2>

            <div className={styles.timelineWrapper}>
                {timelineData.map((item, index) => (
                    <div
                        className={styles.timelineItem}
                        key={index}
                        style={{ transitionDelay: `${index * 0.05}s` }}
                    >
                        <div className={styles.year}>{item.year}</div>

                        <div className={styles.card}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThirdPage;