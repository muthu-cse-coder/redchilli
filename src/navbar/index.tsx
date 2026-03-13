import { FunctionComponent, useState, useEffect } from "react";
import style from "./index.module.scss";

const Navbar: FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#demos", label: "Demos" },
        { href: "#OurServices", label: "Services" },
        { href: "#features", label: "Features" },
        { href: "#support", label: "Support" },
        { href: "#documentation", label: "Clients" },
    ];

    return (
        <nav className={`${style.stNavBarWrapper} ${scrolled ? style.scrolled : ""}`}>
            <div className={style.stNavbarLogo}>
                <div className={style.logoCircle}>
                    <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli" />
                </div>
                <span className={style.stlogoText}>Red<span>Chilli</span></span>
            </div>

            <ul className={style.stNavBarLinks}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className={style.navRight}>
                <button type="button" className={style.stPurchaseButton}>
                    BOOK VEHICLE
                    <span className={style.icon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                </button>

                <button
                    type="button"
                    className={`${style.stHamburgerButton} ${isMenuOpen ? style.stHamburgerOpen : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {isMenuOpen && (
                <div className={style.stMobileMenu}>
                    <ul className={style.stMobileNavLinks}>
                        {navItems.map((item) => (
                            <li key={`mobile-${item.href}`}>
                                <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                   
                </div>
            )}
        </nav>
    );
};

export default Navbar;