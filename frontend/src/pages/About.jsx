import React from 'react';
import '../App.css';
import teamWorking from '../assets/team-working.png';
import planning from '../assets/planning.png';

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
        <div className="process-box">
          {/* Left - Image and Intro */}
          <div className="process-image-col">
            <img src={planning} alt="planning" className="process-photo" />
            <p className="process-desc">
             As a software and service company, VY follows a comprehensive, value-driven methodology across every engagement—ensuring that each solution is smooth, strategic, and successful from discovery through launch
            </p>
            <button className="process-cta-btn">Start your work</button>
          </div>

          {/* Right - Steps */}
          <div className="process-steps-col">
            <div className="process-steps-list">
              <div className="process-step">
                <span className="process-step-icon">🔎</span>
                <div className="process-step-content">
                  <h4>Discovery</h4>
                  <p>
                    During the discovery phase, VY takes the time to get to know key
                    stakeholders, understand project goals, and define clear success
                    criteria. This collaborative approach sets a strong foundation
                    for the rest of the engagement.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-step-icon">🗂️</span>
                <div className="process-step-content">
                  <h4>Planning</h4>
                  <p>
                    Clear timelines, requirements, and priorities drive the project
                    plan to ensure success—every step documented for transparency
                    and client buy-in.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-step-icon">🎨</span>
                <div className="process-step-content">
                  <h4>Design</h4>
                  <p>
                    Creative and collaborative interface prototyping sets the design
                    phase apart, with feedback rounds and usability in focus before
                    build-out begins.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-step-icon">💻</span>
                <div className="process-step-content">
                  <h4>Development</h4>
                  <p>
                    Once the strategies are approved, VY begins the environment setup
                    and core software engineering—always agile, modular, and secure.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-step-icon">🧪</span>
                <div className="process-step-content">
                  <h4>Testing</h4>
                  <p>
                    Before the solution is launched, rigorous diagnostics identify
                    bugs, performance gaps, and usability issues—each resolved for a
                    seamless final product.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-step-icon">🚀</span>
                <div className="process-step-content">
                  <h4>Launch</h4>
                  <p>
                    With the new system or website completed, VY handles the launch
                    and continues to provide training, support, and strategic insight
                    for ongoing success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
