import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaCode, FaUsers, FaLightbulb } from "react-icons/fa";
import "./ServiceDetail.css";

const servicesData = {
  "product-strategy": {
    title: "Product Strategy",
    subtitle: "Define, Validate, and Deliver Products That Matter",
    description: "Product strategy is the foundation of successful software. We help you define clear product vision, validate market assumptions, and build a roadmap that aligns with business goals.",
    icon: "🧭",
    color: "#6B4FBF",
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    
    overview: "Every great product starts with strategy. We guide you through the discovery and planning phase, ensuring your product solves real problems and resonates with your target market.",
    
    whatWeOffer: [
      {
        title: "Discovery Workshops",
        description: "Interactive sessions with stakeholders to understand business goals, user needs, and market opportunities."
      },
      {
        title: "User Research & Analysis",
        description: "In-depth interviews, surveys, and analytics to understand your target audience deeply."
      },
      {
        title: "Competitive Analysis",
        description: "Comprehensive market research to identify opportunities and differentiation strategies."
      },
      {
        title: "Product Roadmapping",
        description: "Clear, prioritized roadmaps aligned with OKRs and business objectives."
      },
      {
        title: "OKR Definition",
        description: "Measurable goals and key results framework for tracking success and impact."
      },
      {
        title: "Go-to-Market Strategy",
        description: "Launch plans, pricing strategies, and positioning for maximum market impact."
      }
    ],

    benefits: [
      "Reduced time-to-market with clear priorities",
      "Higher product adoption with user-validated features",
      "Aligned stakeholders and clear vision",
      "Data-driven decision making",
      "Risk mitigation through validation",
      "Increased ROI on development investment"
    ],

    process: [
      { step: 1, title: "Discovery", description: "Understand your business, market, and users" },
      { step: 2, title: "Analysis", description: "Identify opportunities and validate assumptions" },
      { step: 3, title: "Strategy", description: "Define vision, roadmap, and OKRs" },
      { step: 4, title: "Planning", description: "Create detailed execution plan and timeline" }
    ],

    timeline: "4-6 weeks",
    audience: "Startups, Scale-ups, Enterprises"
  },

  "ux-ui-design": {
    title: "UX/UI Design",
    subtitle: "Create Interfaces That Users Love",
    description: "Beautiful, intuitive interfaces don't happen by accident. We design delightful experiences through research, testing, and iterative design.",
    icon: "🎨",
    color: "#8B5FDF",
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    
    overview: "Design is where strategy meets user experience. We create design systems and interfaces that are both beautiful and functional, driving engagement and satisfaction.",
    
    whatWeOffer: [
      {
        title: "Design System Creation",
        description: "Comprehensive design systems with components, tokens, and guidelines for consistency."
      },
      {
        title: "User Research & Testing",
        description: "Usability testing, user interviews, and data-driven design decisions."
      },
      {
        title: "Interaction Design",
        description: "Thoughtful interactions and micro-animations that delight users."
      },
      {
        title: "Responsive Design",
        description: "Designs that work beautifully across all devices and screen sizes."
      },
      {
        title: "Accessibility Design",
        description: "WCAG compliant designs that work for everyone, including users with disabilities."
      },
      {
        title: "Design Prototyping",
        description: "Interactive prototypes for user testing and stakeholder alignment."
      }
    ],

    benefits: [
      "Higher user engagement and retention",
      "Reduced support costs through intuitive design",
      "Faster development with design systems",
      "Better accessibility and inclusivity",
      "Stronger brand identity and recognition",
      "Data-driven design decisions"
    ],

    process: [
      { step: 1, title: "Research", description: "Understand user needs and behaviors" },
      { step: 2, title: "Design", description: "Create wireframes, mockups, and prototypes" },
      { step: 3, title: "Test", description: "Validate designs through user testing" },
      { step: 4, title: "Iterate", description: "Refine based on feedback and data" }
    ],

    timeline: "6-10 weeks",
    audience: "Web Apps, Mobile Apps, Dashboards"
  },

  "web-mobile": {
    title: "Web & Mobile Development",
    subtitle: "Build Scalable, Production-Ready Applications",
    description: "From concept to scale, we build robust web and mobile applications using modern technologies and best practices.",
    icon: "⚙️",
    color: "#6B4FBF",
    hero: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    
    overview: "We build applications that scale. Using React, React Native, and Node.js, we create high-performance applications with clean architecture and best practices.",
    
    whatWeOffer: [
      {
        title: "React Web Development",
        description: "Modern, scalable web applications with React.js and Next.js."
      },
      {
        title: "React Native Mobile",
        description: "Cross-platform mobile apps for iOS and Android with shared codebase."
      },
      {
        title: "Backend API Development",
        description: "Scalable APIs with Node.js, Express, and databases optimized for performance."
      },
      {
        title: "CI/CD Pipeline Setup",
        description: "Automated testing, deployment, and monitoring infrastructure."
      },
      {
        title: "Database Design & Optimization",
        description: "SQL and NoSQL databases designed for scalability and performance."
      },
      {
        title: "DevOps & Deployment",
        description: "Cloud deployment on AWS, Vercel, and other modern platforms."
      }
    ],

    benefits: [
      "Faster time-to-market with modern frameworks",
      "Better performance and user experience",
      "Easier maintenance with clean code",
      "Scalability to handle growth",
      "Automated testing and deployment",
      "Cost-effective cross-platform development"
    ],

    process: [
      { step: 1, title: "Architecture", description: "Design scalable system architecture" },
      { step: 2, title: "Development", description: "Build features with best practices" },
      { step: 3, title: "Testing", description: "Comprehensive testing and QA" },
      { step: 4, title: "Deployment", description: "Launch and monitor in production" }
    ],

    timeline: "8-16 weeks",
    audience: "SaaS, E-commerce, Web Apps, Mobile Apps"
  },

  "cloud-devops": {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure That Scales With Your Growth",
    description: "Build reliable, secure, and scalable infrastructure. We handle cloud architecture, CI/CD pipelines, monitoring, and security hardening.",
    icon: "🔐",
    color: "#8B5FDF",
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    
    overview: "Modern applications need modern infrastructure. We design and manage cloud infrastructure that's secure, observable, and automatically scales with demand.",
    
    whatWeOffer: [
      {
        title: "Cloud Architecture Design",
        description: "AWS and cloud infrastructure designed for scalability and reliability."
      },
      {
        title: "Infrastructure as Code",
        description: "Terraform and CloudFormation for reproducible, versionable infrastructure."
      },
      {
        title: "CI/CD Pipeline Implementation",
        description: "Automated testing, building, and deployment workflows."
      },
      {
        title: "Monitoring & Observability",
        description: "Comprehensive logging, metrics, and alerting for production systems."
      },
      {
        title: "Security Hardening",
        description: "Security best practices, encryption, and compliance management."
      },
      {
        title: "Performance Optimization",
        description: "Optimization for speed, cost, and resource efficiency."
      }
    ],

    benefits: [
      "99.9%+ uptime and reliability",
      "Automatic scaling for traffic spikes",
      "Reduced operational costs",
      "Faster deployment cycles",
      "Better security and compliance",
      "Real-time visibility into system health"
    ],

    process: [
      { step: 1, title: "Assessment", description: "Evaluate current infrastructure and needs" },
      { step: 2, title: "Design", description: "Design cloud architecture" },
      { step: 3, title: "Implementation", description: "Deploy and configure infrastructure" },
      { step: 4, title: "Optimization", description: "Monitor and continuously optimize" }
    ],

    timeline: "4-8 weeks",
    audience: "All applications, Especially High-traffic Apps"
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="service-error">
        <h2>Service Not Found</h2>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <button className="back-btn" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back
      </button>

      <div className="service-hero">
        <div className="hero-content">
          <span className="hero-icon">{service.icon}</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
        </div>
        <div className="hero-image">
          <img src={service.hero} alt={service.title} />
        </div>
      </div>

      <div className="service-container">
        <section className="service-section overview">
          <h2>Overview</h2>
          <p>{service.overview}</p>
        </section>

        <section className="service-section offerings">
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            {service.whatWeOffer.map((offer, idx) => (
              <div key={idx} className="offering-card">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section benefits">
          <h2>Benefits</h2>
          <ul className="benefits-list">
            {service.benefits.map((benefit, idx) => (
              <li key={idx}>
                <FaCheckCircle />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-section process">
          <h2>Our Process</h2>
          <div className="process-timeline">
            {service.process.map((p, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section info-cards">
          <div className="info-grid">
            <div className="info-card">
              <h3>Timeline</h3>
              <p>{service.timeline}</p>
            </div>
            <div className="info-card">
              <h3>Best For</h3>
              <p>{service.audience}</p>
            </div>
          </div>
        </section>

        <section className="service-section cta">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help with your {service.title} needs.</p>
            <button onClick={() => navigate('/contact')}>Get in Touch</button>
          </div>
        </section>
      </div>
    </div>
  );
}
