import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.stFooterWrapper}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    {/* Brand Section */}
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

                    {/* Quick Links */}
                    <div className={styles.linksCol}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#demos">Demos</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#documentation">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactCol}>
                        <h4>Contact Us</h4>
                        <p>📍1st Floor
                            292 Mani Road Mundradaippu
                            Nanguneri Taluk
                            Tirunelveli</p>
                        <p>📞 +91 1234567890</p>
                        <p>✉️ redchilliads@gmail.com</p>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© 2026 RedChilli. All Rights Reserved.</p>
                    <div className={styles.socialIcons}>
                        {/* Icons path kuduthukonga */}
                        <span>FB</span>
                        <span>IG</span>
                        <span>TW</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;