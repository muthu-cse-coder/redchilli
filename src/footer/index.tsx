// import React from "react";
// import styles from "./index.module.scss";

// const Footer = () => {
//     return (
//         <footer className={styles.stFooterWrapper}>
//             <div className={styles.container}>
//                 <div className={styles.footerGrid}>
//                     <div className={styles.brandCol}>
//                         <div className={styles.logo}>
//                             <div className={styles.logoCircle}>
//                                 <img src="/Rectangle 4232.png" alt="RedChilli Logo" />
//                             </div>
//                             <span>RedChilli</span>
//                         </div>
//                         <p className={styles.description}>
//                             Elevate your brand with high-impact Mobile LED Advertising. Your message, moving across the heart of the city.
//                         </p>
//                     </div>
//                     <div className={styles.linksCol}>
//                         <h4>Quick Links</h4>
//                         <ul>
//                             <li><a href="#demos">Demos</a></li>
//                             <li><a href="#features">Features</a></li>
//                             <li><a href="#support">Support</a></li>
//                             <li><a href="#documentation">Documentation</a></li>
//                         </ul>
//                     </div>
//                     <div className={styles.contactCol}>
//                         <h4>Contact Us</h4>
//                         <p>📍11/31 Raj Bhavan Colony,
//                           Velachery Check Post ,
//                             Chennai</p>
//                             <p>📞 +91 96591 71935</p>
//                         <p>📞 +91 7550188731</p>
//                         <p>✉️ redchilliads@gmail.com</p>
//                     </div>
//                 </div>
//                 {/* <div className={styles.bottomBar}>
//                     <p>© 2026 RedChilli. All Rights Reserved.</p>
//                     <div className={styles.socialIcons}>
//                         <span>FB</span>
//                         <span>IG</span>
//                         <span>TW</span>
//                     </div>
//                 </div> */}
//             </div>
//         </footer>
//     );
// };

// export default Footer;
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
                                <img src="/Rectangle 4232.png" alt="RedChilli Logo" />
                            </div>
                            <span>RED<span>CHILLI</span></span>
                        </div>

                        <p className={styles.description}>
                            High-impact mobile LED advertising that moves your brand across the city with visibility and power.
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
                        <h4>Contact</h4>

                        <div className={styles.contactItem}>
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                            </svg>
                            <span>11/31 Raj Bhavan Colony,
                                Velachery Check Post ,
                                Chennai</span>
                        </div>

                        <div className={styles.contactItem}>
                            <svg viewBox="0 0 24 24">
                                <path d="M6.6 10.8a15.05 15.05 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.72 11.72 0 0 0 3.7.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .6 3.7 1 1 0 0 1-.25 1z" />
                            </svg>
                            <span>+91 96591 71935</span>
                            <span>+91 75501 88731</span>
                        </div>

                        <div className={styles.contactItem}>
                            <svg viewBox="0 0 24 24">
                                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z" />
                            </svg>
                            <span>redchilliads@gmail.com</span>
                        </div>
                    </div>

                </div>
                <div className={styles.bottomBar}>
                    <p>© 2026 RedChilli. All Rights Reserved.</p>

                    <div className={styles.socialIcons}>
                        <a href="#">
                            <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h2.5v3H14a1 1 0 0 0-1 1V12h3l-.5 3H13v7A10 10 0 0 0 22 12z" /></svg>
                        </a>

                        <a href="#">
                            <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
                        </a>

                        <a href="#">
                            <svg viewBox="0 0 24 24"><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7A4.2 4.2 0 0 0 21.4 4a8.4 8.4 0 0 1-2.7 1A4.2 4.2 0 0 0 12 8.2c0 .3 0 .7.1 1A11.9 11.9 0 0 1 3 5.1a4.2 4.2 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.5 11.8 11.8 0 0 0 8.4 20c7.7 0 11.9-6.4 11.9-11.9v-.5A8.4 8.4 0 0 0 22 5.8z" /></svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;