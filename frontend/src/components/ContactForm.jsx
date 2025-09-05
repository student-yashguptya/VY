import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div id="contact-page" style={styles.container}>
      {/* Left Column: Contact Form */}
      <form className="contact-form" style={styles.form}>
        <h2 style={styles.title}>Connect with us</h2>
        <p style={styles.subtitle}>How can we help?</p>
        <p style={styles.note}>All fields are required</p>

        <input type="text" placeholder="First Name" required style={styles.input} />
        <input type="text" placeholder="Last Name" required style={styles.input} />
        <input type="email" placeholder="E-mail" required style={styles.input} />

        <select required style={styles.input}>
          <option value="">What can we help you with?</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="business">Business</option>
          <option value="feedback">Feedback</option>
        </select>

        <textarea
          placeholder="Message"
          required
          style={{ ...styles.input, height: "100px" }}
        ></textarea>

        {/* Fake reCAPTCHA placeholder */}
        <div style={styles.captchaBox}>
          <input type="checkbox" />{" "}
          <span style={{ marginLeft: "8px" }}>I'm not a robot</span>
        </div>

        <div style={styles.checkboxContainer}>
          <input type="checkbox" required />
          <label style={styles.label}>
            I have read the{" "}
            <a href="#" style={styles.link}>
              Privacy Statement
            </a>
          </label>
        </div>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {/* Right Column: Website Info */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>More ways to connect</h3>
        <ul style={styles.infoList}>
          <li>
            <strong>Email us directly</strong>
            <p>
              <a href="mailto:placementhub9@gmail.com" style={styles.link}>
                placementhub9@gmail.com
              </a>
            </p>
          </li>
          <li>
            <strong>Follow us on social media</strong>
            <p>
              <a
                href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
                style={styles.link}
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
                style={styles.link}
              >
                Instagram
              </a>
            </p>
          </li>
          <li>
            <strong>Visit our office</strong>
            <p>
              <a href="https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh/@28.3762051,79.3395384,12z/data=!3m1!4b1!4m6!3m5!1s0x39a007334d02998d:0x5b9d44cf31ee87f!8m2!3d28.3670355!4d79.4304381!16zL20vMDN5N2Nu?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D" style={styles.link}>
                Find our location
              </a>
            </p>
          </li>
          <li>
            <strong>Explore our work</strong>
            <p>
              <Link to="/" state={{ scrollTo: "projects" }} style={styles.link}>
                Check our latest projects
              </Link>
            </p>
          </li>
          <li>
            <strong>Meet our leadership</strong>
            <p>
              <Link to="/" state={{ scrollTo: "leadership" }} style={styles.link}>
                Know more about our team
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ✅ Responsive styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap", // ensures stacking on small screens
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
    gap: "20px",
  },
  form: {
    flex: "1 1 400px", // grow/shrink with min width
    padding: "20px",
    borderRadius: "8px",
    background: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "5px",
    color: "#555",
  },
  note: {
    fontSize: "12px",
    marginBottom: "15px",
    color: "#888",
  },
  input: {
    marginBottom: "12px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
  },
  captchaBox: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    marginLeft: "8px",
    fontSize: "14px",
    color: "#444",
  },
  link: {
    color: "#0073e6",
    textDecoration: "none",
  },
  button: {
    background: "#0073e6",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  infoBox: {
    flex: "1 1 300px", // responsive sizing
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  infoTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
    textAlign: "left",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
};

export default ContactPage;
