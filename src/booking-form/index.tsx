import { FunctionComponent, useState } from "react";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const ORG_EMAIL = "malathim@riserone.in";

const BookingForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${ORG_EMAIL}`, {
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
          _subject: `📩 New Enquiry — ${formData.name}`, // ✅ FIXED
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/thankyou");
      } else {
        setError("Failed to send. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.formContainer} id="form">
      <div className={style.formCard}>
        <div className={style.formHeader}>
          <h2>
            GET IN <span>TOUCH</span>
          </h2>
          <p>Share your requirements with us!</p>
        </div>

        <form className={style.stForm} onSubmit={handleSubmit}>
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

          <div className={style.inputGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}" // ✅ optional validation
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
              <option value="SEO">Search Engine Optimization</option>
              <option value="Web Development">Web Development</option>
              <option value="LED Ads">LED Truck Advertising</option>
              <option value="Design">Graphic Designing</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "0.85rem",
                marginBottom: "8px",
              }}
            >
              ⚠️ {error}
            </p>
          )}

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