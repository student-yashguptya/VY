import React from 'react';
import '../App.css';
import teamWorking from '../assets/team-working.png';

export default function About() {
  return (
    <main>
      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">Shaping the Future with Innovation</p>

          <div className="about-content">
            <div className="about-text">
              <p>
                At <strong>VY Software Company</strong>, we specialize in building
                management websites, ERP systems, and booking platforms tailored to
                empower businesses and institutions. Our mission is to deliver
                innovative, scalable, and efficient digital solutions that create
                meaningful impact.
              </p>
              <p>
                With a dedicated team of developers, designers, and strategists,
                we focus on driving business growth through technology. From
                discovery to deployment, we ensure every project aligns with your
                vision.
              </p>
            </div>

            <div className="about-image">
              <img src={teamWorking} alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section" id="why-us">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          From idea to execution, we bring expertise, dedication, and a focus on results.
        </p>

        <div className="why-cards-container">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <div className="why-card-content">
              <h3>Expertise</h3>
              <p>Years of experience in designing and developing reliable digital solutions.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">🔍</div>
            <div className="why-card-content">
              <h3>Attention to Detail</h3>
              <p>We make sure every project is fine-tuned to perfection, ensuring quality results.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">💬</div>
            <div className="why-card-content">
              <h3>Communication</h3>
              <p>We believe in clear, transparent communication throughout the project lifecycle.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">🤝</div>
            <div className="why-card-content">
              <h3>Customer Service</h3>
              <p>Our dedicated support team is always here to assist you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" id="process">
        <div className="process-container">
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">
            A step-by-step approach to deliver reliable and high-quality software solutions.
          </p>

          <div className="process-grid">
            <div className="process-card">
              <span className="process-icon">🔎</span>
              <h3>Discovery</h3>
              <p>We take time to understand your goals, challenges, and expectations to build a tailored plan.</p>
            </div>
            <div className="process-card">
              <span className="process-icon">📝</span>
              <h3>Planning</h3>
              <p>We outline project milestones, timelines, and strategies ensuring transparency from the start.</p>
            </div>
            <div className="process-card">
              <span className="process-icon">🎨</span>
              <h3>Design</h3>
              <p>Our creative team builds engaging, user-friendly designs aligned with your brand identity.</p>
            </div>
            <div className="process-card">
              <span className="process-icon">💻</span>
              <h3>Development</h3>
              <p>Using modern technologies, we craft scalable, secure, and efficient software solutions.</p>
            </div>
            <div className="process-card">
              <span className="process-icon">🧪</span>
              <h3>Testing</h3>
              <p>We thoroughly test each feature to ensure flawless functionality, speed, and reliability.</p>
            </div>
            <div className="process-card">
              <span className="process-icon">🚀</span>
              <h3>Launch</h3>
              <p>We deliver the final product and provide post-launch support to ensure smooth operation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
