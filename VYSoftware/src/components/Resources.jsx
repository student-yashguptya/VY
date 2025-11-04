import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import { FaArrowRight, FaBook, FaVideo, FaFileAlt, FaCode } from "react-icons/fa";
import "./Resources.css";

const resourcesData = [
  {
    id: 1,
    title: "Building Scalable Node.js Applications",
    description: "A comprehensive guide to architecting production-ready Node.js applications with best practices and optimization techniques.",
    tag: "Engineering",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Nov 2025"
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    description: "Master advanced React patterns to build lightning-fast user interfaces and improve overall application performance.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaVideo,
    image: Image3,
    date: "Nov 2025"
  },
  {
    id: 3,
    title: "MongoDB Database Design Patterns",
    description: "Learn essential database design patterns and best practices for NoSQL databases using MongoDB at scale.",
    tag: "Engineering",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image4,
    date: "Oct 2025"
  },
  {
    id: 4,
    title: "Modern UI Design Systems",
    description: "Design scalable, maintainable design systems that work seamlessly across all your products and platforms.",
    tag: "Design",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Oct 2025"
  },
  {
    id: 5,
    title: "Docker & Containerization Masterclass",
    description: "Complete guide to containerizing applications and managing deployment pipelines with Docker and container orchestration.",
    tag: "DevOps",
    category: "Course",
    icon: FaVideo,
    image: Image3,
    date: "Oct 2025"
  },
  {
    id: 6,
    title: "AWS Cloud Infrastructure Essentials",
    description: "Master AWS services and build highly available, scalable cloud infrastructure for your applications and services.",
    tag: "Cloud",
    category: "Guide",
    icon: FaBook,
    image: Image4,
    date: "Sep 2025"
  },
  {
    id: 7,
    title: "TypeScript Advanced Types",
    description: "Deep dive into TypeScript's advanced type system to write more type-safe and maintainable code for production.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaCode,
    image: Image2,
    date: "Sep 2025"
  },
  {
    id: 8,
    title: "Kubernetes Orchestration Guide",
    description: "Learn how to deploy, manage, and scale containerized applications using Kubernetes at production scale.",
    tag: "DevOps",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image3,
    date: "Sep 2025"
  }
];

export default function Resources() {
  const navigate = useNavigate();

  const handleApply = () => {
    window.open("https://forms.gle/Ny25XhtL7MmtZa9z5", "_blank", "noopener,noreferrer");
  };

  const handleResourceClick = (resourceId) => {
    navigate(`/resource/${resourceId}`);
  };

  return (
    <div className="section resources-section">
      <div className="container">
        <SectionHeading 
          eyebrow="Featured" 
          title="Resources" 
          subtitle="Learn from our guides, tutorials, and case studies"
        />

        <div className="resources-grid">
          {resourcesData.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <article 
                key={resource.id} 
                className="resource-card"
              >
                <div className="resource-image-wrapper">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    loading="lazy"
                    className="resource-image"
                    decoding="async"
                  />
                  <div className="resource-overlay">
                    <button 
                      className="resource-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResourceClick(resource.id);
                      }}
                    >
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                  <span className="resource-tag">{resource.tag}</span>
                </div>

                <div className="resource-content">
                  <div className="resource-header">
                    <div className="resource-icon">
                      <IconComponent />
                    </div>
                    <span className="resource-category">{resource.category}</span>
                  </div>

                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>

                  <div className="resource-footer">
                    <span className="resource-date">{resource.date}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Hire the best developers and designers around!</h2>
            <p className="cta-subtitle">Join our team and work on cutting-edge projects</p>
          </div>
          <button 
            className="cta-button"
            onClick={handleApply}
            aria-label="Apply now"
          >
            Apply Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
