import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaUsers, FaProjectDiagram } from "react-icons/fa";

function ContactPage() {
  return (
    <div id="contact-page" style={styles.container}>
      {/* Left Column: Contact Form */}
      <form className="contact-form" style={styles.form}>
        <div style={styles.formHeader}>
          <h2 style={styles.title}>Connect with us</h2>
          <p style={styles.subtitle}>We’d love to hear from you 💬</p>
        </div>

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
          style={{ ...styles.input, height: "120px" }}
        ></textarea>

       

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
          Send Message 🚀
        </button>
      </form>

      {/* Right Column: Website Info */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>More ways to connect</h3>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>
            <FaEnvelope style={styles.icon} /> 
            <a href="mailto:placementhub9@gmail.com" style={styles.link}>
              placementhub9@gmail.com
            </a>
          </li>
          <li style={styles.infoItem}>
            <FaLinkedin style={styles.icon} /> 
            <a href="https://www.linkedin.com/company/108454811/admin/page-posts/published/" style={styles.link}>LinkedIn</a>
            <span style={{ margin: "0 5px" }}>|</span>
            <FaInstagram style={styles.icon} /> 
            <a href="https://www.instagram.com/vy_software/?next=%2F&hl=en" style={styles.link}>Instagram</a>
          </li>
          <li style={styles.infoItem}>
            <FaMapMarkerAlt style={styles.icon} /> 
            <a href="https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh/" style={styles.link}>
              Find our location
            </a>
          </li>
          <li style={styles.infoItem}>
            <FaProjectDiagram style={styles.icon} /> 
            <Link to="/" state={{ scrollTo: "projects" }} style={styles.link}>
              Check our latest projects
            </Link>
          </li>
          <li style={styles.infoItem}>
            <FaUsers style={styles.icon} /> 
            <Link to="/" state={{ scrollTo: "leadership" }} style={styles.link}>
              Know more about our team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ✅ Improved Interactive Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1100px",
    margin: "50px auto",
    padding: "20px",
    gap: "25px",
  },
  form: {
    flex: "1 1 480px",
    padding: "25px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease-in-out",
  },
  formHeader: {
    marginBottom: "15px",
    borderBottom: "2px solid #0073e6",
    paddingBottom: "10px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#222",
  },
  subtitle: {
    fontSize: "15px",
    color: "#555",
  },
  input: {
    marginBottom: "14px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
    width: "100%",
    outline: "none",
    transition: "border 0.2s ease, box-shadow 0.2s ease",
  },
  
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "14px",
  },
  label: {
    marginLeft: "8px",
    fontSize: "14px",
    color: "#444",
  },
  link: {
    color: "#0073e6",
    fontWeight: "500",
    textDecoration: "none",
  },
  button: {
    background: "linear-gradient(135deg, #0073e6, #00bcd4)",
    color: "#fff",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
  },
  infoBox: {
    flex: "1 1 320px",
    padding: "25px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  infoTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "18px",
    color: "#222",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "1.8em",
  },
  infoItem: {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    color: "#333",
  },
  icon: {
    marginRight: "10px",
    color: "#0073e6",
  },
};

export default ContactPage;
