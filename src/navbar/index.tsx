import { FunctionComponent } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav className={`${style.stNavBarWrapper} w-100`}>
            <div className={`${style.stNavbarLogo} gap-4`}>
                {/* <div className={`${style.stNavLogoCircle}`}><img src="public/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="" /></div> */}
                <div className={style.logoCircle}>
                    <img src="/ba24dfb3-537b-4db6-8f79-41b1fad2c646.jfif" alt="RedChilli Logo" />
                </div>
                <span className={`${style.stlogoText}`}>RedChilli</span>
            </div>
            <ul className={`${style.stNavBarLinks}`}>
                <li>
                    <a href="#demos">Demos</a>
                </li>
                <li>
                    <a href="#OurServices">Our Serices</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#support">Support</a>
                </li>
                <li>
                    <a href="#documentation">Documentation</a>
                </li>
            </ul>
            <button className={`${style.stPurchaseButton}`}>
                Book LED Vehicle <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span>
            </button>
        </nav>
    );
};

export default Navbar;