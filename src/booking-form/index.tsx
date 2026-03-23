import { FunctionComponent } from "react";
import style from "./index.module.scss";

const BookingForm: FunctionComponent = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formCard}>
        <div className={style.formHeader}>
          <h2>GET IN <span>TOUCH</span></h2>
          <p>Share your requirements with us!</p>
        </div>
        
        <form className={style.stForm}>
          <div className={style.inputGroup}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className={style.inputGroup}>
            <input type="tel" placeholder="Phone Number" required />
            <select required>
              <option value="" disabled selected>Select a Service</option>
              <option>Search Engine Optimization</option>
              <option>Web Development</option>
              <option>LED Truck Advertising</option>
              <option>Graphic Designing</option>
            </select>
          </div>

          <textarea placeholder="Your Message..." rows={5}></textarea>
          
          <button type="submit" className={style.formSubmitBtn}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;