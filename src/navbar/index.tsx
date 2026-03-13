import { FunctionComponent, useState, useEffect } from "react";
import style from "./index.module.scss";

const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Services hover state

    const services = [
        "Search Engine Optimization", "Social Media Marketing", "Graphic Designing",
        "Web Development", "Mobile App Development", "Video Creation",
        "Branding", "Live Chat", "LED Indoor and Outdoor Installation",
        "LED Truck Outdoor for Campaign and Advertising"
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${style.stNavBarWrapper} ${scrolled ? style.scrolled : ""}`}>
            <div className={style.stNavbarLogo}>
                <div className={style.logoCircle}>
                    <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli" />
                </div>
                <span className={style.stlogoText}>Red<span>Chilli</span></span>
            </div>

            <ul className={style.stNavBarLinks}>
                <li><a href="#demos">Demos</a></li>
                
                {/* Services Dropdown logic starts here */}
                <li 
                    className={style.dropdownContainer}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <a href="#OurServices">Services <span className={style.arrow}>▼</span></a>
                    
                    {isServicesOpen && (
                        <div className={style.dropdownMenu}>
                            {services.map((item, index) => (
                                <div key={index} className={style.dropdownItem}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </li>

                <li><a href="#features">Features</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#documentation">Clients</a></li>
            </ul>

            <div className={style.navRight}>
                <button type="button" className={style.stPurchaseButton}>
                    BOOK VEHICLE
                    <span className={style.icon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>

                <button
                    type="button"
                    className={`${style.stHamburgerButton} ${isMenuOpen ? style.stHamburgerOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span /><span /><span />
                </button>
            </div>
            
            {/* Mobile Menu logic... (Keep your existing code here) */}
        </nav>
    );
};

export default Navbar;