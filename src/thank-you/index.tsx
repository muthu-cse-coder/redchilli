import { FunctionComponent } from "react";
import style from "./index.module.scss";

const ThankYou: FunctionComponent = () => {
  return (
    <div className={style.thankYouContainer}>
      <div className={style.thankYouCard}>
        <div className={style.iconCircle}>
          <span className={style.checkmark}>✓</span>
        </div>
        
        <h1 className={style.title}>THANK <span>YOU!</span></h1>
        <p className={style.message}>
          We have received your message. Our team will get back to you shortly.
        </p>
        
        <div className={style.divider}></div>
        
        <p className={style.subtext}>For urgent inquiries, please call us at:</p>
        <p className={style.phone}>+91  7550188731</p>

        <a href="/" className={style.backBtn}>
          BACK TO HOME
        </a>
      </div>
    </div>
  );
};

export default ThankYou;