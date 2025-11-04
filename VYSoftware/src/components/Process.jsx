import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import { FaQuoteLeft } from "react-icons/fa";
import "./Process.css";

const steps = [
  {
    title: "Placement Hub ERP",
    subtitle: "Streamlining Campus Recruitment",
    description: "We built a comprehensive placement management system that connects 500+ students with 50+ companies. The platform automates the entire recruitment workflow, eliminating manual coordination and paper-based processes.",
    impact: "Our delivery model ensured timely deployment with 60% reduction in placement cycle time while maintaining cost-efficiency and quality standards.",
    quote: "The Placement Hub system transformed our entire recruitment process. What used to take weeks now happens in days. The platform's automation and transparency have been game-changers for our placement cell.",
    person: { 
      name: "Dr. Rajesh Kumar", 
      role: "Training & Placement Head",
      avatar: "https://i.pravatar.cc/150?img=12" 
    },
    img: Image2,
    stats: [
      { label: "Students", value: "500+" },
      { label: "Companies", value: "50+" },
      { label: "Time Saved", value: "60%" }
    ]
  },
  {
    title: "Tech Event Management",
    subtitle: "Complete Event Lifecycle Automation",
    description: "We developed an end-to-end event management platform that handled 200+ participants, 15+ events, and real-time judging for CompTech 2024. The system integrated payment processing, live scoring, and automated result declaration.",
    impact: "Our platform achieved 90% process automation, eliminating bottlenecks and ensuring seamless execution of a large-scale technical festival with instant certificate generation and winner declaration.",
    quote: "The Event Management System made organizing CompTech incredibly smooth. Real-time judging, instant leaderboard updates, and automated certificate generation were crowd favorites. We saved at least 50 hours of manual work!",
    person: { 
      name: "Priya Sharma", 
      role: "Event Coordinator, CompTech Committee",
      avatar: "https://i.pravatar.cc/150?img=32" 
    },
    img: Image3,
    stats: [
      { label: "Participants", value: "200+" },
      { label: "Events", value: "15+" },
      { label: "Automation", value: "90%" }
    ]
  },
  {
    title: "Smart Classroom & Timetable",
    subtitle: "Intelligent Scheduling & Resource Optimization",
    description: "We engineered an AI-powered timetable generation system that manages 1000+ students across 50+ classrooms with zero scheduling conflicts. The intelligent algorithm considers faculty preferences, room capacity, and departmental constraints.",
    impact: "Our system reduced timetable generation time from 3 weeks to just 2 hours, improved classroom utilization by 85%, and achieved 95% faculty satisfaction with optimized schedules.",
    quote: "This system is a lifesaver! What used to take us 3 weeks now happens in 2 hours. The algorithm handles all the complex constraints we never thought possible to automate. It's given our academic team back their time.",
    person: { 
      name: "Prof. Anuj Singh", 
      role: "Academic Coordinator",
      avatar: "https://i.pravatar.cc/150?img=48" 
    },
    img: Image4,
    stats: [
      { label: "Students", value: "1000+" },
      { label: "Classrooms", value: "50+" },
      { label: "Conflicts", value: "0%" }
    ]
  }
];

export default function Process() {
  return (
    <div className="section process-section">
      <div className="container">
        <SectionHeading 
          eyebrow="Way of building" 
          title="Great Software" 
          subtitle="Our journey from concept to production-ready solutions"
        />
        
        <div className="process-list">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className={`process-row ${i % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="process-text-block">
                <div className="step-indicator">
                  <span className="step-number">{i + 1}</span>
                </div>
                
                <h2 className="step-title">{s.title}</h2>
                <p className="step-subtitle">{s.subtitle}</p>
                
                <p className="step-description">{s.description}</p>
                <p className="step-impact">{s.impact}</p>
                
                <div className="step-stats">
                  {s.stats.map((stat, idx) => (
                    <div key={idx} className="stat">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="testimonial-block">
                  <div className="quote-header">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="quote-text">"{s.quote}"</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={s.person.avatar} alt={s.person.name} className="avatar" />
                    <div className="author-info">
                      <div className="author-name">{s.person.name}</div>
                      <div className="author-role">{s.person.role}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="process-image-block">
                <img src={s.img} alt={s.title} className="step-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
