import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaRocket, 
  FaUsers, 
  FaChartLine,
  FaCode,
  FaServer,
  FaPalette,
  FaLightbulb,
  FaTrophy
} from "react-icons/fa";
import "./CaseStudyDetail.css";

const caseStudiesData = {
  "placement-hub": {
    title: "Placement Hub ERP",
    subtitle: "Complete Placement Management System for Educational Institutions",
    tag: "Web Platform",
    client: "SRMS College of Engineering & Technology",
    duration: "4 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    
    overview: "Placement Hub is a comprehensive ERP system designed to streamline the entire placement process for colleges and students. The platform bridges the gap between educational institutions, students, and recruiting companies, creating a seamless ecosystem for campus recruitment.",
    
    challenge: {
      title: "The Challenge",
      description: "Traditional placement processes were time-consuming, paper-intensive, and lacked transparency. Students struggled to track opportunities, companies faced difficulties in shortlisting candidates, and placement officers spent countless hours on administrative tasks.",
      points: [
        "Manual coordination between 500+ students and 50+ companies",
        "No centralized platform for application tracking",
        "Difficulty in managing multiple recruitment drives simultaneously",
        "Lack of data-driven insights for placement analytics",
        "Time-consuming resume screening and shortlisting process"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We developed a full-stack web platform using MERN stack that automates and digitizes the entire placement workflow, from student registration to final offer acceptance.",
      features: [
        {
          icon: FaUsers,
          title: "Multi-Role Dashboard",
          description: "Separate interfaces for students, companies, placement officers, and super admins with role-based access control"
        },
        {
          icon: FaRocket,
          title: "Smart Application System",
          description: "One-click applications, automated resume parsing, and intelligent candidate matching based on company requirements"
        },
        {
          icon: FaChartLine,
          title: "Real-Time Analytics",
          description: "Comprehensive dashboards showing placement statistics, company-wise applications, and trend analysis"
        },
        {
          icon: FaCheckCircle,
          title: "Automated Workflows",
          description: "Email notifications, interview scheduling, offer letter generation, and automated status updates"
        }
      ]
    },
    
    techStack: {
      frontend: ["React.js", "Redux", "Material-UI", "Chart.js"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      tools: ["Git", "Postman", "VS Code", "MongoDB Compass"]
    },
    
    results: [
      { metric: "60%", description: "Reduction in placement cycle time" },
      { metric: "500+", description: "Students actively using the platform" },
      { metric: "50+", description: "Companies registered and recruiting" },
      { metric: "95%", description: "Student satisfaction rate" },
      { metric: "100%", description: "Elimination of paper-based processes" },
      { metric: "40hrs", description: "Weekly time saved for placement team" }
    ],
    
    keyFeatures: [
      "Student profile management with resume builder",
      "Company portal for posting job opportunities",
      "Advanced filtering and shortlisting algorithms",
      "Interview scheduling with calendar integration",
      "Offer letter management and acceptance tracking",
      "Comprehensive reporting and analytics dashboard",
      "Email and SMS notification system",
      "Document management for certificates and transcripts"
    ],
    
    testimonial: {
      quote: "Placement Hub transformed our entire recruitment process. What used to take weeks now happens in days. The platform's automation and analytics have been game-changers for our placement cell.",
      author: "Dr. Placement Officer",
      position: "Training & Placement Head, SRMS CET"
    },
    
    impact: "The Placement Hub system has revolutionized campus recruitment at SRMS CET, creating a transparent, efficient, and data-driven placement ecosystem. The platform continues to evolve with new features based on user feedback."
  },

  "event-management": {
    title: "CompTech Event Management System",
    subtitle: "Complete Event Lifecycle Management Platform",
    tag: "Event Tech",
    client: "CompTech Technical Fest, SRMS CET",
    duration: "3 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    
    overview: "CompTech Event System is an all-in-one platform designed for organizing technical festivals and competitions. It handles everything from participant registration and payment processing to live judging and automated winner declaration.",
    
    challenge: {
      title: "The Challenge",
      description: "Managing a large-scale technical fest with multiple events, hundreds of participants, and real-time judging requirements presented significant operational challenges.",
      points: [
        "Manual registration process causing long queues and delays",
        "Payment reconciliation taking days to complete",
        "Difficulty in coordinating judges across 15+ simultaneous events",
        "No real-time score tracking and leaderboard updates",
        "Complex winner calculation with multiple criteria",
        "Certificate generation and distribution bottlenecks"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We built a comprehensive event management platform using MERN stack with integrated payment gateway, real-time judging system, and automated result processing.",
      features: [
        {
          icon: FaRocket,
          title: "Smart Registration",
          description: "Multi-event registration with team formation, automatic confirmation emails, and QR code-based check-in"
        },
        {
          icon: FaCheckCircle,
          title: "Payment Integration",
          description: "Razorpay sandbox integration for seamless online payments with automatic receipt generation"
        },
        {
          icon: FaUsers,
          title: "Judge Portal",
          description: "Real-time scoring interface with criteria-based evaluation and instant leaderboard updates"
        },
        {
          icon: FaTrophy,
          title: "Automated Results",
          description: "Intelligent winner calculation, automated certificate generation with QR verification, and result publication"
        }
      ]
    },
    
    techStack: {
      frontend: ["React.js", "Framer Motion", "Tailwind CSS", "Socket.io Client"],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay API"],
      tools: ["PDF Generation", "QR Code Library", "Email Service", "AWS S3"]
    },
    
    results: [
      { metric: "200+", description: "Participants registered seamlessly" },
      { metric: "15+", description: "Events managed simultaneously" },
      { metric: "90%", description: "Process automation achieved" },
      { metric: "100%", description: "Payment success rate" },
      { metric: "Real-time", description: "Live scoring and leaderboards" },
      { metric: "Instant", description: "Certificate generation and delivery" }
    ],
    
    keyFeatures: [
      "Multi-role system (Developer, Student, Judge)",
      "Event creation and management interface",
      "Team-based registration with captain assignment",
      "Integrated payment gateway (Razorpay sandbox)",
      "Real-time judging with multiple criteria",
      "Live leaderboard with WebSocket updates",
      "Automated winner calculation and declaration",
      "QR code-based certificate verification",
      "Bulk certificate generation from templates",
      "Participant communication system",
      "Event analytics and reporting dashboard",
      "Mobile-responsive design for on-the-go access"
    ],
    
    testimonial: {
      quote: "The Event Management System made organizing CompTech incredibly smooth. Real-time judging and instant result declaration were crowd favorites. We saved at least 50 hours of manual work!",
      author: "Event Coordinator",
      position: "CompTech Organizing Committee, SRMS CET"
    },
    
    impact: "The system successfully managed CompTech 2024 with zero technical glitches. The platform's success has led to its adoption for future college events and potential commercialization for other institutions."
  },

  "smart-classroom": {
    title: "Smart Classroom & Timetable Automation",
    subtitle: "Intelligent Classroom Allocation and Automated Timetable Generation",
    tag: "EdTech",
    client: "SRMS College of Engineering & Technology",
    duration: "3 months",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
    
    overview: "Smart Classroom Manager is an intelligent system that automates timetable generation and classroom allocation for educational institutions. Using advanced algorithms, it eliminates scheduling conflicts and optimizes resource utilization across 50+ classrooms and 1000+ students.",
    
    challenge: {
      title: "The Challenge",
      description: "Manual timetable creation was a nightmare, taking weeks to complete and often resulting in conflicts. Classroom allocation was inefficient, leading to resource wastage and last-minute changes.",
      points: [
        "Manual timetable creation taking 2-3 weeks each semester",
        "Frequent scheduling conflicts between classes, faculty, and rooms",
        "Inefficient classroom utilization (30% rooms underutilized)",
        "No visibility into real-time classroom availability",
        "Difficulty accommodating last-minute changes and special requests",
        "Faculty and student complaints about inconvenient schedules"
      ]
    },
    
    solution: {
      title: "Our Solution",
      description: "We developed an AI-powered timetable generation system using constraint satisfaction algorithms and a smart classroom management interface built with MERN stack.",
      features: [
        {
          icon: FaLightbulb,
          title: "Smart Algorithm",
          description: "Constraint satisfaction algorithm considering faculty preferences, room capacity, lab requirements, and departmental constraints"
        },
        {
          icon: FaCode,
          title: "Conflict Resolution",
          description: "Automatic detection and resolution of scheduling conflicts with backtracking and optimization"
        },
        {
          icon: FaServer,
          title: "Resource Optimization",
          description: "Intelligent classroom allocation based on class size, equipment needs, and location preferences"
        },
        {
          icon: FaPalette,
          title: "Interactive Interface",
          description: "Drag-and-drop timetable editor with visual conflict indicators and one-click schedule generation"
        }
      ]
    },
    
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "FullCalendar", "React DnD"],
      backend: ["Node.js", "Express.js", "MongoDB", "Constraint Solver"],
      algorithms: ["Backtracking", "Genetic Algorithm", "Graph Coloring"]
    },
    
    results: [
      { metric: "1000+", description: "Students with optimized schedules" },
      { metric: "50+", description: "Classrooms efficiently allocated" },
      { metric: "0%", description: "Scheduling conflicts" },
      { metric: "85%", description: "Classroom utilization rate" },
      { metric: "2 hours", description: "Time to generate complete timetable" },
      { metric: "95%", description: "Faculty satisfaction with schedules" }
    ],
    
    keyFeatures: [
      "Automated timetable generation with constraint satisfaction",
      "Multi-department schedule coordination",
      "Faculty workload balancing and preference management",
      "Smart classroom allocation based on capacity and equipment",
      "Lab session scheduling with equipment availability",
      "Real-time classroom booking system",
      "Conflict detection and automatic resolution",
      "Visual timetable editor with drag-and-drop",
      "Mobile app for students and faculty",
      "Automatic notification system for schedule changes",
      "Analytics dashboard for resource utilization",
      "PDF export and digital timetable sharing"
    ],
    
    testimonial: {
      quote: "This system is a lifesaver! What used to take us 3 weeks now happens in 2 hours. The algorithm handles all the complex constraints we never thought possible to automate.",
      author: "Academic Coordinator",
      position: "Department of Computer Science, SRMS CET"
    },
    
    impact: "The Smart Classroom system has transformed academic planning at SRMS CET. The time saved allows the academic team to focus on curriculum development while ensuring optimal resource utilization and student satisfaction."
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseData = caseStudiesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseData) {
    return (
      <div className="case-study-error">
        <h2>Case Study Not Found</h2>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  return (
    <div className="case-study-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back to Home
      </button>

      <div className="case-hero">
        <div className="case-hero-content">
          <span className="case-tag">{caseData.tag}</span>
          <h1 className="case-hero-title">{caseData.title}</h1>
          <p className="case-hero-subtitle">{caseData.subtitle}</p>
          
          <div className="case-meta">
            <div className="meta-item">
              <span className="meta-label">Client</span>
              <span className="meta-value">{caseData.client}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{caseData.duration}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">{caseData.year}</span>
            </div>
          </div>
        </div>
        <div className="case-hero-image">
          <img src={caseData.heroImage} alt={caseData.title} />
        </div>
      </div>

      <div className="case-content">
        <section className="case-section overview-section">
          <div className="section-content">
            <h2 className="section-title">Project Overview</h2>
            <p className="section-text">{caseData.overview}</p>
          </div>
        </section>

        <section className="case-section challenge-section">
          <div className="section-content">
            <h2 className="section-title">{caseData.challenge.title}</h2>
            <p className="section-text">{caseData.challenge.description}</p>
            <ul className="challenge-points">
              {caseData.challenge.points.map((point, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="point-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-section solution-section">
          <div className="section-content">
            <h2 className="section-title">{caseData.solution.title}</h2>
            <p className="section-text">{caseData.solution.description}</p>
            
            <div className="features-grid">
              {caseData.solution.features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div key={idx} className="feature-card">
                    <div className="feature-icon">
                      <IconComponent />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="case-section tech-section">
          <div className="section-content">
            <h2 className="section-title">Technology Stack</h2>
            <div className="tech-stack-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  {caseData.techStack.frontend.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  {caseData.techStack.backend.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="tech-category">
                <h3>Tools & Services</h3>
                <div className="tech-tags">
                  {caseData.techStack.tools.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section results-section">
          <div className="section-content">
            <h2 className="section-title">Results & Impact</h2>
            <div className="results-grid">
              {caseData.results.map((result, idx) => (
                <div key={idx} className="result-card">
                  <div className="result-metric">{result.metric}</div>
                  <div className="result-description">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section features-section">
          <div className="section-content">
            <h2 className="section-title">Key Features</h2>
            <div className="features-list">
              {caseData.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <FaCheckCircle className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {caseData.testimonial && (
          <section className="case-section testimonial-section">
            <div className="section-content">
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{caseData.testimonial.quote}</p>
                <div className="testimonial-author">
                  <strong>{caseData.testimonial.author}</strong>
                  <span>{caseData.testimonial.position}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="case-section impact-section">
          <div className="section-content">
            <h2 className="section-title">Long-term Impact</h2>
            <p className="section-text impact-text">{caseData.impact}</p>
          </div>
        </section>

        <section className="case-section cta-section">
          <div className="cta-card">
            <h2>Interested in Similar Solutions?</h2>
            <p>Let's discuss how we can build something amazing for you.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
