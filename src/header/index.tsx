import { FunctionComponent } from "react";
import style from './index.module.scss'
import { Link } from "react-router-dom";
interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <nav className={`${style.stNavBarWrapper}`}>
      <div className={`${style.stImageswrapper}`}>
        <h2>RedChilli</h2>
      </div>
      <div className={`${style.stUnorderlistWrapper}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
