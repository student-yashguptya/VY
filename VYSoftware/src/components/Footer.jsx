import React, {  useState } from "react";
import { FaLinkedin, FaInstagram, FaArrowRight, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus("");

    try {
      const templateParams = {
        to_email: email,
        user_email: email,
        subject: "Welcome to VY Software Newsletter",
        message: "Thank you for subscribing to our newsletter! We'll keep you updated with the latest insights, guides, and updates from VY Software.",
      };

      await emailjs.send(
        "service_1o5f24k",
        "template_newsletter",
        templateParams,
        "Bv6VThRG1nXxKihsD"
      );

      setSubscribeStatus("success");
      setEmail("");
      setIsSubscribing(false);

      setTimeout(() => setSubscribeStatus(""), 5000);
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus("error");
      setIsSubscribing(false);
      setTimeout(() => setSubscribeStatus(""), 5000);
    }
  };

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a
              className="brand"
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
            >
              <span className="brand-badge">VY</span> Software
            </a>
            <p className="muted">Building reliable software with small, senior teams.</p>
            <div className="footer-socials-mobile">
              <a
                href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className="social-link"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <h4>Links</h4>
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  onClick={(e) => handleSmoothScroll(e, "cases")}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  onClick={(e) => handleSmoothScroll(e, "resources")}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav">
            <h4>Company</h4>
            <ul>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleSmoothScroll(e, "process")}
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => handleSmoothScroll(e, "stack")}
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="https://forms.gle/Ny25XhtL7MmtZa9z5" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </li>
            </ul>
          </nav>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <h4>Stay in the loop</h4>
            <p className="newsletter-subtitle">Subscribe to our newsletter for latest updates and insights</p>
            
            <div className="input-row">
              <input
                required
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
              />
              <button 
                className="btn btn-primary" 
                type="submit"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
                <FaArrowRight />
              </button>
            </div>

            {subscribeStatus && (
              <div className={`subscribe-message ${subscribeStatus}`}>
                {subscribeStatus === "success" ? (
                  <>
                    <FaCheckCircle className="message-icon" />
                    <span>Successfully subscribed! Check your email.</span>
                  </>
                ) : (
                  <>
                    <FaExclamationCircle className="message-icon" />
                    <span>Subscription failed. Please try again.</span>
                  </>
                )}
              </div>
            )}

            <small className="muted">No spam. Unsubscribe anytime.</small>
          </form>
        </div>

        <div className="container legal">
          <small>© {new Date().getFullYear()} VY Software. All rights reserved.</small>
          <div className="socials">
            <a
              href="https://www.linkedin.com/company/108454811/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/vy_software/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              className="social-link"
              title="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
