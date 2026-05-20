import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import {
  FunctionComponent,
  useEffect,
  useState,
} from "react";

const ORG_EMAIL = "muthuselvantsy22@gmail.com";

const BookingForm: FunctionComponent = () => {
  const navigate = useNavigate();

  // =========================
  // STATE
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // SCROLL TOP
  // =========================
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // =========================
  // BACK BUTTON
  // =========================
  const handleBack = () => {
    navigate(-1);
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const form = new FormData();

      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("service", formData.service);
      form.append("message", formData.message);

      form.append(
        "_subject",
        `📩 New Enquiry — ${formData.name}`
      );

      form.append("_template", "table");
      form.append("_captcha", "false");

      const res = await fetch(
        `https://formsubmit.co/ajax/${ORG_EMAIL}`,
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

      if (
        data.success === "true" ||
        data.success === true
      ) {
        // RESET FORM
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // SCROLL TOP
        window.scrollTo(0, 0);

        // THANK YOU PAGE
        navigate("/thankyou");
      } else {
        setError(
          "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.formContainer} id="form">
      <div className={style.formCard}>

        {/* BACK BUTTON */}
        <button
          className={style.backBtn}
          onClick={handleBack}
          type="button"
        >
          ← Back
        </button>

        {/* HEADER */}
        <div className={style.formHeader}>
          <h2>
            GET IN <span>TOUCH</span>
          </h2>

          <p>
            Share your requirements with us!
          </p>
        </div>

        {/* FORM */}
        <form
          className={style.stForm}
          onSubmit={handleSubmit}
        >

          {/* NAME + EMAIL */}
          <div className={style.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE + SERVICE */}
          <div className={style.inputGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a Service
              </option>

              <option value="SEO">
                Search Engine Optimization
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="LED Ads">
                LED Truck Outdoor For Campaign
                and Advertising
              </option>

              <option value="Graphic Designing">
                Graphic Designing
              </option>

              <option value="Social Media Marketing">
                Social Media Marketing
              </option>

              <option value="Mobile App Development">
                Mobile App Development
              </option>

              <option value="Video Creation">
                Video Creation
              </option>

              <option value="Branding">
                Branding
              </option>

              <option value="Live Chat">
                Live Chat
              </option>

              <option value="LED Indoor & Outdoor Installation">
                LED Indoor and Outdoor
                Installation
              </option>
            </select>
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />

          {/* ERROR */}
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
                marginBottom: "12px",
              }}
            >
              ⚠️ {error}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className={style.formSubmitBtn}
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;