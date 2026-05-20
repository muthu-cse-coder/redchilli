import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, useEffect , useState } from "react";
const ORG_EMAIL = "muthuselvantsy22@gmail.com";

const BookingForm: FunctionComponent = () => {
  const navigate = useNavigate();

  // ✅ State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // ✅ Input change handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // ✅ Back Button
  const handleBack = () => {
    navigate(-1);
  };

  // ✅ Form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${ORG_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "👤 Name": formData.name,
            "📧 Email": formData.email,
            "📞 Phone": formData.phone,
            "🛠️ Service": formData.service,
            "💬 Message": formData.message,
            "📅 Submitted On": new Date().toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            }),

            _subject: `📩 New Enquiry — ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        window.scrollTo(0, 0);

        navigate("/thankyou");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.formContainer} id="form">
      <div className={style.formCard}>

        {/* ✅ Back Button */}
        <button
          className={style.backBtn}
          onClick={handleBack}
        >
          ← Back
        </button>

        <div className={style.formHeader}>
          <h2>
            GET IN <span>TOUCH</span>
          </h2>

          <p>Share your requirements with us!</p>
        </div>

        <form className={style.stForm} onSubmit={handleSubmit}>
          
          {/* Name + Email */}
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

          {/* Phone + Service */}
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
                LED Truck Outdoor For Campaign and Advertising
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
                LED Indoor and Outdoor Installation
              </option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />

          {/* Error */}
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "0.85rem",
                marginBottom: "10px",
              }}
            >
              ⚠️ {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className={style.formSubmitBtn}
            disabled={loading}
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;