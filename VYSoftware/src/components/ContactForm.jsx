import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaProjectDiagram,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import "./Contactpage.css";

function Contactpage() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_1o5f24k",
        "template_g2ssv36",
        form.current,
        "Bv6VThRG1nXxKihsD"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setIsSending(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        <div className="contact-header">
          <span className="contact-label">GET IN TOUCH</span>
          <h1 className="contact-main-title">Let's Build Something Great</h1>
          <p className="contact-description">
            Have a project in mind? We'd love to hear about it. Share your ideas and let's turn them into reality.
          </p>
        </div>

        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form-modern">
            <div className="form-grid">
              <div className={`input-group ${focusedField === 'first_name' ? 'focused' : ''}`}>
                <label className="input-label">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="John"
                  required
                  className="form-input"
                  onFocus={() => setFocusedField('first_name')}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              <div className={`input-group ${focusedField === 'last_name' ? 'focused' : ''}`}>
                <label className="input-label">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  required
                  className="form-input"
                  onFocus={() => setFocusedField('last_name')}
                  onBlur={() => setFocusedField('')}
                />
              </div>
            </div>

            <div className={`input-group ${focusedField === 'user_email' ? 'focused' : ''}`}>
              <label className="input-label">Email Address</label>
              <input
                type="email"
                name="user_email"
                placeholder="john.doe@example.com"
                required
                className="form-input"
                onFocus={() => setFocusedField('user_email')}
                onBlur={() => setFocusedField('')}
              />
            </div>

            <div className={`input-group ${focusedField === 'subject' ? 'focused' : ''}`}>
              <label className="input-label">How can we help?</label>
              <select
                name="subject"
                required
                className="form-input form-select"
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField('')}
              >
                <option value="">Select a service</option>
                <option value="product-strategy">Product Strategy</option>
                <option value="ux-ui-design">UX/UI Design</option>
                <option value="web-mobile">Web & Mobile Development</option>
                <option value="cloud-devops">Cloud & DevOps</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className={`input-group ${focusedField === 'message' ? 'focused' : ''}`}>
              <label className="input-label">Tell us about your project</label>
              <textarea
                name="message"
                placeholder="Describe your project, goals, and timeline..."
                required
                className="form-input form-textarea"
                rows="6"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
              ></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="privacy" required className="custom-checkbox" />
              <label htmlFor="privacy" className="checkbox-label">
                I agree to the{" "}
                <a href="#" className="privacy-link">Privacy Policy</a>
                {" "}and{" "}
                <a href="#" className="privacy-link">Terms of Service</a>
              </label>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSending ? 'sending' : ''}`}
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <span className="button-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="button-icon" />
                </>
              )}
            </button>

            {status && (
              <div className={`status-message ${status}`}>
                {status === 'success' ? (
                  <>
                    <FaCheckCircle className="status-icon" />
                    <div>
                      <strong>Message sent successfully!</strong>
                      <p>We'll get back to you within 24 hours.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="status-icon" />
                    <div>
                      <strong>Something went wrong</strong>
                      <p>Please try again or contact us directly via email.</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </form>

          <div className="contact-info-card">
            <h3 className="info-card-title">Other Ways to Connect</h3>
            <p className="info-card-subtitle">
              Prefer to reach out directly? Choose your preferred channel below.
            </p>

            <div className="info-items">
              <a href="mailto:vysoftware98y@gmail.com,placementhub9@gmail.com" className="info-item">
                <div className="info-icon-wrapper purple">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>vysoftware98@gmail.com</p>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-wrapper blue">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <a 
                    href="https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh/"
                    className="info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bareilly, Uttar Pradesh
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper gradient">
                  <FaLinkedin />
                </div>
                <div className="info-content">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a 
                      href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <span>•</span>
                    <a 
                      href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-links">
              <h4 className="quick-links-title">Quick Links</h4>
              <Link to="/" state={{ scrollTo: "projects" }} className="quick-link">
                <FaProjectDiagram />
                View Our Projects
              </Link>
              <Link to="/" state={{ scrollTo: "leadership" }} className="quick-link">
                <FaUsers />
                Meet the Team
              </Link>
            </div>

            <div className="response-time-badge">
              <div className="pulse-dot"></div>
              <span>We typically respond within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
