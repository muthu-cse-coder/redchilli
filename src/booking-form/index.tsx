import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, useEffect, useState } from "react";

const ACCESS_KEY = "f41a3b72-c436-4d35-9792-b8624b08c5ef";

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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
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
  const handleBack = () => {
    navigate(-1);
  };
  const validate = (): boolean => {
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!formData.service) {
      setError("Please select a service.");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setError("");

    try {
      const form = new FormData();
      form.append("access_key", ACCESS_KEY);
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("service", formData.service);
      form.append("message", formData.message);
      form.append(
        "submitted_on",
        new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      );
      form.append("subject", `📩 New Enquiry — ${formData.name}`);
      form.append("from_name", "Red Chilli Advertisement");
      form.append("botcheck", "")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
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
        setError(data.message || "Failed to send. Please try again.");
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
              <option value="" disabled >
                Select a Service
              </option>

              <option value="SEO" >
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
                marginBottom: "10px",
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