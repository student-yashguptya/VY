import React from "react";
import { FaArrowRight, FaMapPin, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Career.css";
import SectionHeading from "./SectionHeading.jsx";

const positions = [
  {
    id: 1,
    title: "Frontend Developer Internship",
    type: "Internship",
    location: "Remote",
    experience: "0-1 years",
    description: "Join our team and work on cutting-edge React projects. Perfect for final-year students learning modern web development.",
    requirements: [
      "Strong knowledge of React and JavaScript",
      "Understanding of HTML/CSS",
      "Git and version control basics",
      "Ability to work in a team environment",
    ],
    benefits: [
      "Flexible working hours",
      "Certificate of completion",
      "Potential full-time offer",
      "Mentorship from senior developers",
    ],
    icon: FaGraduationCap,
    color: "#6B4FBF",
  },
  {
    id: 2,
    title: "Backend Developer Internship",
    type: "Internship",
    location: "Remote",
    experience: "0-1 years",
    description: "Build scalable backend systems using Node.js and MongoDB. Great hands-on learning opportunity for aspiring backend developers.",
    requirements: [
      "Node.js and Express.js basics",
      "Database design concepts",
      "RESTful API development",
      "Problem-solving skills",
    ],
    benefits: [
      "Real-world project experience",
      "Code review and feedback",
      "Certificate upon completion",
      "Networking opportunities",
    ],
    icon: FaBriefcase,
    color: "#8B5FDF",
  },
  {
    id: 3,
    title: "Full Stack Developer Internship",
    type: "Internship",
    location: "Remote",
    experience: "0-1 years",
    description: "Work on complete web applications from frontend to backend. Ideal for aspiring full-stack developers ready to learn.",
    requirements: [
      "React and JavaScript knowledge",
      "Node.js basics",
      "Database fundamentals",
      "Problem-solving ability",
    ],
    benefits: [
      "End-to-end project experience",
      "Career guidance and mentoring",
      "Certificate of completion",
      "Performance-based opportunities",
    ],
    icon: FaBriefcase,
    color: "#FF006E",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "On-site / Remote",
    experience: "1-3 years",
    description: "Develop and maintain full-stack web applications using modern technologies. Work with a talented team on production applications.",
    requirements: [
      "1-3 years of web development experience",
      "Proficiency in React and Node.js",
      "Database design and optimization",
      "Problem-solving fundamentals",
      "Strong communication skills",
    ],
    benefits: [
      "Competitive compensation",
      "Health insurance coverage",
      "Work-life balance",
      "Professional growth opportunities",
      "Flexible working arrangements",
    ],
    icon: FaBriefcase,
    color: "#F72585",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    type: "Full-time",
    location: "On-site",
    experience: "2-4 years",
    description: "Manage cloud infrastructure and deployment pipelines. Build scalable systems that power our applications.",
    requirements: [
      "Experience with AWS or GCP",
      "Docker and Kubernetes knowledge",
      "CI/CD pipeline experience",
      "Infrastructure automation",
      "Linux administration",
    ],
    benefits: [
      "Competitive package",
      "Professional development budget",
      "Team building events",
      "Performance incentives",
      "Flexible hours",
    ],
    icon: FaBriefcase,
    color: "#00D9FF",
  },
  {
    id: 6,
    title: "Senior React Developer",
    type: "Full-time",
    location: "On-site / Remote",
    experience: "4+ years",
    description: "Lead frontend development initiatives and mentor junior developers. Shape the future of our user interfaces.",
    requirements: [
      "4+ years of React development",
      "Advanced JavaScript/TypeScript",
      "Team leadership experience",
      "System design knowledge",
      "Mentoring experience",
    ],
    benefits: [
      "Premium compensation",
      "Leadership role",
      "Stock options available",
      "Conference attendance budget",
      "Sabbatical opportunities",
    ],
    icon: FaBriefcase,
    color: "#F72585",
  },
];

export default function Career() {
  const handleApply = () => {
    window.open(
      "https://forms.gle/jNL5Zo3muWsAKX3h7",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const internships = positions.filter((p) => p.type === "Internship");
  const fullTime = positions.filter((p) => p.type === "Full-time");

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero section">
        <div className="container">
          <div className="career-hero-content reveal">
            <h1>Join Our Team</h1>
            <p className="career-subtitle">
              We're building amazing products and we need talented people like you. 
              Whether you're starting your career or bringing years of experience, 
              there's a place for you at VY Software.
            </p>
            <div className="career-stats">
              <div className="stat">
                <div className="stat-number">{positions.length}+</div>
                <div className="stat-label">Open Positions</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Remote Friendly</div>
              </div>
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section alt-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Why VY Software"
            title="Why Join Us?"
          />

          <div className="benefits-grid">
            {[
              {
                icon: "🚀",
                title: "Career Growth",
                desc: "Mentorship, training, and opportunities to work on impactful projects that accelerate your growth.",
              },
              {
                icon: "🏠",
                title: "Work Flexibility",
                desc: "Remote work, flexible hours, and a culture that trusts you to deliver great results.",
              },
              {
                icon: "💡",
                title: "Learning Culture",
                desc: "Tech talks, workshops, and access to cutting-edge tools and technologies.",
              },
              {
                icon: "👥",
                title: "Amazing Team",
                desc: "Collaborate with talented, passionate developers and designers who love building software.",
              },
              {
                icon: "🎯",
                title: "Impact",
                desc: "Your work directly impacts thousands of users. See the real-world results of what you build.",
              },
              {
                icon: "⚡",
                title: "Work-Life Balance",
                desc: "No crunch culture. Health benefits, paid time off, and genuine support for well-being.",
              },
            ].map((item, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p className="muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Start Your Journey"
            title="Internship Opportunities"
            subtitle="Perfect for students to gain real-world experience and accelerate your career."
          />

          <div className="job-grid">
            {internships.map((position) => {
              const IconComponent = position.icon;
              return (
                <div key={position.id} className="job-card reveal">
                  <div className="job-header">
                    <div className="job-icon" style={{ color: position.color }}>
                      <IconComponent size={32} />
                    </div>
                    <div className="job-title-group">
                      <h3>{position.title}</h3>
                      <div className="job-meta">
                        <span className="job-type">{position.type}</span>
                        <span className="job-location">
                          <FaMapPin size={12} /> {position.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="job-description">{position.description}</p>

                  <div className="job-info">
                    <div className="info-section">
                      <h5>What You'll Need</h5>
                      <ul className="info-list">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-section">
                      <h5>What You'll Get</h5>
                      <ul className="info-list">
                        {position.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary job-btn"
                    onClick={handleApply}
                  >
                    Apply Now
                    <FaArrowRight />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-time Section */}
      <section className="section alt-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Build Your Future"
            title="Full-Time Careers"
            subtitle="Join us for the long haul. Build amazing products with a talented team."
          />

          <div className="job-grid">
            {fullTime.map((position) => {
              const IconComponent = position.icon;
              return (
                <div key={position.id} className="job-card reveal">
                  <div className="job-header">
                    <div className="job-icon" style={{ color: position.color }}>
                      <IconComponent size={32} />
                    </div>
                    <div className="job-title-group">
                      <h3>{position.title}</h3>
                      <div className="job-meta">
                        <span className="job-type">{position.type}</span>
                        <span className="job-location">
                          <FaMapPin size={12} /> {position.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="job-description">{position.description}</p>

                  <div className="job-info">
                    <div className="info-section">
                      <h5>Requirements</h5>
                      <ul className="info-list">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-section">
                      <h5>Benefits</h5>
                      <ul className="info-list">
                        {position.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary job-btn"
                    onClick={handleApply}
                  >
                    Apply Now
                    <FaArrowRight />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="career-cta">
            <div className="cta-content">
              <h2>Didn't find the right role?</h2>
              <p className="muted">
                We're always looking for talented people. Share your profile and let's connect!
              </p>
            </div>
            <button className="btn btn-primary cta-btn" onClick={handleApply}>
              Send Your Profile
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
