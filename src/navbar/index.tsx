import { FunctionComponent, useState, useEffect } from "react";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDMSOpen, setIsDMSOpen] = useState(false); 
  
  const [isBookDropdownOpen, setIsBookDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const services = [ 
    "LED van", "Outdoor LED", "LED Standee", "Touch Displays", 
    "Digital Tables", "Digital Sinage"
  ];
  const dmServices = [
    "Digital Marketing Strategy", "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)", "Email Marketing",
    "Content Marketing", "Lead Generation Funnels",
    "Website Design & Development", "Landing Page Creation",
    "Video Marketing & Reels Creation", "Influencer Marketing",
    "Social Media Post Design", "WhatsApp Marketing"
  ];

  const ledServices = services.filter(s => 
    s.includes("LED") || 
    s.includes("Display") || 
    s.includes("Digital") || 
    s.includes("Touch")
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = () => {
    navigate("/form");
    setIsMenuOpen(false); 
    setIsBookDropdownOpen(false);
  };

  return (
    <>
      <nav className={`${style.stNavBarWrapper} ${scrolled ? style.scrolled : ""}`}>
        <div className={style.stNavbarLogo} onClick={() => navigate("/")}>
          <div className={style.logoCircle}>
            <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli" />
          </div>
          <span className={style.stlogoText}>Red<span>Chilli</span></span>
        </div>

        <ul className={style.stNavBarLinks}>
          <li><a href="#demos">Demos</a></li>
          
          <li 
            className={style.dropdownContainer}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="#OurServices" style={{"marginTop":"3px"}}>Services <span className={style.arrow}>▼</span></a>
            {isServicesOpen && (
              <div className={style.dropdownMenu} style={{left: '50%', transform: 'translateX(-50%)'}}>
                {services.map((s, i) => <div key={i} className={style.dropdownItem}>{s}</div>)}
              </div>
            )}
          </li>
          <li 
            className={style.dropdownContainer}
            onMouseEnter={() => setIsDMSOpen(true)}
            onMouseLeave={() => setIsDMSOpen(false)}
          >
            <a href="#dm-services" style={{"marginTop":"3px"}}>Digital Marketing Services <span className={style.arrow}>▼</span></a>
            {isDMSOpen && (
              <div className={style.dropdownMenu} style={{left: '50%', transform: 'translateX(-50%)'}}>
                {dmServices.map((s, i) => (
                  <div key={i} className={style.dropdownItem}>{s}</div>
                ))}
              </div>
            )}
          </li>

          <li><a href="#features">Features</a></li>
          <li><a href="#support">Support</a></li>
        </ul>

        <div className={style.navRight}>
          <div 
            className={style.bookButtonWrapper} 
            onMouseEnter={() => setIsBookDropdownOpen(true)}
            onMouseLeave={() => setIsBookDropdownOpen(false)}
          >
            <button type="button" className={style.stPurchaseButton} onClick={handleNavigate}>
              For Enquiries
            </button>
            {isBookDropdownOpen && (
              <div className={style.dropdownMenu}>
                {ledServices.map((s, i) => (
                  <div key={i} className={style.dropdownItem} onClick={handleNavigate}>
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className={`${style.stHamburgerButton} ${isMenuOpen ? style.stHamburgerOpen : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div 
        className={`${style.mobileOverlay} ${isMenuOpen ? style.overlayVisible : ""}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
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
          <li className={style.mobileActionItem}>
             <button className={style.mobileBookBtn} onClick={handleNavigate}>
                BOOK VEHICLE
             </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;