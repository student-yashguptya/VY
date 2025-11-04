import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import Card from "./Card.jsx";
import { 
  FaCompass, 
  FaPalette, 
  FaCode, 
  FaServer,
  FaArrowRight
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: "product-strategy",
    icon: FaCompass,
    title: "Product Strategy",
    body: "Workshops, roadmaps, user research, and measurable OKRs to define your product vision.",
    shortFeatures: ["User Research", "Roadmapping", "OKR Planning", "Market Analysis"],
    color: "#6B4FBF"
  },
  {
    id: "ux-ui-design",
    icon: FaPalette,
    title: "UX/UI Design",
    body: "Design systems, flows, prototypes, and delightful interactions that users love.",
    shortFeatures: ["Design Systems", "Prototyping", "User Testing", "Design Tokens"],
    color: "#8B5FDF"
  },
  {
    id: "web-mobile",
    icon: FaCode,
    title: "Web & Mobile",
    body: "React, React Native, Node, scalable APIs, and CI/CD for production-ready apps.",
    shortFeatures: ["React & Next.js", "React Native", "Node.js APIs", "DevOps"],
    color: "#6B4FBF"
  },
  {
    id: "cloud-devops",
    icon: FaServer,
    title: "Cloud & DevOps",
    body: "Infrastructure as code, observability, security hardening, and SRE practices.",
    shortFeatures: ["AWS & Cloud", "CI/CD Pipeline", "Monitoring", "Security"],
    color: "#8B5FDF"
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleLearnMore = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="section services-section">
      <div className="container">
        <SectionHeading 
          eyebrow="Services we offer" 
          title="End‑to‑end software delivery" 
          subtitle="From idea to impact — cross‑functional teams ship value fast." 
        />
        
        <div className="grid cards services-grid">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <Card key={i} className="service service-card">
                <div className="service-header">
                  <div className="service-icon-wrapper" style={{ 
                    background: `linear-gradient(135deg, ${s.color}15 0%, ${s.color}08 100%)`
                  }}>
                    <IconComponent className="service-icon" style={{ color: s.color }} />
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                </div>

                <p className="service-body muted">{s.body}</p>

                <div className="service-features">
                  {s.shortFeatures.map((feature, idx) => (
                    <span key={idx} className="feature-badge">{feature}</span>
                  ))}
                </div>

                <button 
                  className="service-link"
                  onClick={() => handleLearnMore(s.id)}
                >
                  <span>Learn more</span>
                  <FaArrowRight className="link-icon" />
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
