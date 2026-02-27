import { useState } from "react";
import styles from "./index.module.scss";

const faqData = [
   {
    question: "What types of LED display solutions do you provide?",
    answer:"We provide indoor and outdoor LED screens, video walls, digital display boards, and scrolling LED boards as per customer requirements"
  },
  {
    question: "How much does an LED advertising board cost?",
    answer:
      "Pricing depends on screen size, resolution, and installation location. Contact us for a customized quotation."
  },
  {
    question: "Can we update content on the LED screen easily?",
    answer:
      " Yes, content can be updated easily. We also provide basic training and remote update options."
  },
  {
    question: " Do you offer installation and maintenance services?",
    answer:
      "Yes, we provide complete installation along with ongoing service and maintenance support."
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation is usually completed within 3–7 working days after confirmation."
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

        <div className={styles.faqList} data-aos="flip-right" data-aos-delay="350" data-aos-duration="1000">
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
