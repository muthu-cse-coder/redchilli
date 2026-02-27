import { FunctionComponent, useState } from "react";
import style from "./index.module.scss";

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "#demos", label: "Demos" },
        { href: "#OurServices", label: "Our Services" },
        { href: "#features", label: "Features" },
        { href: "#support", label: "Support" },
        { href: "#documentation", label: "Documentation" },
    ];

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${style.stNavBarWrapper} w-100`}>
            <div className={style.stNavbarLogo}>
                 <div className={style.logoCircle}>
                    <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli Logo" />
                </div>
                <span className={style.stlogoText}>RedChilli</span>
            </div>
            <ul className={style.stNavBarLinks}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <button type="button" className={style.stPurchaseButton}>
                Book LED Vehicle <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span>
            </button>
            <button
                type="button"
                className={`${style.stHamburgerButton} ${isMenuOpen ? style.stHamburgerOpen : ""}`}
                onClick={handleToggleMenu}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav-menu"
            >
                <span />
                <span />
                <span />
            </button>
            {isMenuOpen && (
                <div className={style.stMobileMenu} id="mobile-nav-menu">
                    <ul className={style.stMobileNavLinks}>
                        {navItems.map((item) => (
                            <li key={`mobile-${item.href}`}>
                                <a href={item.href} onClick={handleCloseMenu}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button type="button" className={style.stMobilePurchaseButton}>
                        Book LED Vehicle <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
