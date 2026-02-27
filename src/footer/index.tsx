import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.stFooterWrapper}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <div className={styles.logoCircle}>
                                <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli Logo" />
                            </div>
                            <span>RedChilli</span>
                        </div>
                        <p className={styles.description}>
                            Elevate your brand with high-impact Mobile LED Advertising. Your message, moving across the heart of the city.
                        </p>
                    </div>
                    <div className={styles.linksCol}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#demos">Demos</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#documentation">Documentation</a></li>
                        </ul>
                    </div>
                    <div className={styles.contactCol}>
                        <h4>Contact Us</h4>
                        <p>📍11/31 Raj Bhavan Colony,
                          Velachery Check Post ,
                            Chennai</p>
                        <p>📞 +91 7550188731</p>
                        <p>✉️ redchilliads@gmail.com</p>
                    </div>
                </div>

                {/* <div className={styles.bottomBar}>
                    <p>© 2026 RedChilli. All Rights Reserved.</p>
                    <div className={styles.socialIcons}>
                        <span>FB</span>
                        <span>IG</span>
                        <span>TW</span>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;