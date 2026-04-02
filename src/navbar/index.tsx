import { FunctionComponent, useState, useEffect } from "react";
import style from "./index.module.scss";

const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

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
            {/* Logo Section */}
            <div className={style.stNavbarLogo}>
                <div className={style.logoCircle}>
                    <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli" />
                </div>
                <span className={style.stlogoText}>Red<span>Chilli</span></span>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <ul className={style.stNavBarLinks}>
                <li><a href="#demos">Demos</a></li>
                <li 
                    className={style.dropdownContainer}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <a href="#OurServices">Services <span className={style.arrow}>▼</span></a>
                    {isServicesOpen && (
                        <div className={style.dropdownMenu}>
                            {services.map((s, i) => <div key={i} className={style.dropdownItem}>{s}</div>)}
                        </div>
                    )}
                </li>
                <li><a href="#features">Features</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#documentation">Clients</a></li>
            </ul>

            {/* Right Side Action */}
            <div className={style.navRight}>
                <button type="button" className={style.stPurchaseButton}>BOOK VEHICLE</button>
                
                {/* Hamburger Button - Only shows on Mobile */}
                <button
                    type="button"
                    className={`${style.stHamburgerButton} ${isMenuOpen ? style.stHamburgerOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>

            {/* Mobile Menu - Slide from Right */}
            <div className={`${style.stMobileMenu} ${isMenuOpen ? style.showMenu : ""}`}>
                <ul className={style.stMobileNavLinks}>
                    <li><a href="#demos" onClick={() => setIsMenuOpen(false)}>Demos</a></li>
                    <li className={style.mobileSubMenu}>
                        <div className={style.mobileServiceTitle} onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                            Our Services <span>{mobileServicesOpen ? "−" : "+"}</span>
                        </div>
                        <div className={`${style.mobileServicesList} ${mobileServicesOpen ? style.open : ""}`}>
                            {services.map((s, i) => (
                                <a key={i} href="#OurServices" onClick={() => setIsMenuOpen(false)}>{s}</a>
                            ))}
                        </div>
                    </li>
                    <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                    <li><a href="#support" onClick={() => setIsMenuOpen(false)}>Support</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;