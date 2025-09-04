import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import LeadershipCard from "./components/LeadershipCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import "./App.css";

// import images
import vishalImg from "./assets/vishal.jpg";
import yashImg from "./assets/yash.jpg";

function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At <strong>VY</strong>, we are a service and product-based company
          delivering smart digital solutions that transform businesses.
          From enterprise ERP systems to customer-facing applications,
          our mission is to bring innovation, efficiency, and impact.
        </p>
        <p>
          With a strong belief in technology-driven growth, we empower
          institutions, startups, and enterprises to streamline their
          operations and achieve more.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Our Projects</h2>
        <div className="project-list">
          <ProjectCard
            title="Allin1 Management Website"
            description="An integrated platform to handle HR, finance, and workflow management seamlessly."
          />
          <ProjectCard
            title="College & Company Placement ERP"
            description="A robust ERP system designed to automate campus recruitment and corporate hiring processes."
          />
          <ProjectCard
            title="BookMyRoom App & Website"
            description="A modern booking system for hotels, hostels, and shared accommodations."
          />
          <ProjectCard
            title="E-Commerce Store Builder"
            description="Create your own online store with customizable templates and secure payment options."
          />
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="leadership">
        <h2>Our Leadership</h2>
        <div className="leadership-grid">
          <LeadershipCard
            name="Vishal Sharma"
            role="CEO & Co-founder"
            phone="6398692585"
            email="placementhub9@gmail.com"
            image={vishalImg}
          />
          <LeadershipCard
            name="Yash Gupta"
            role="Co-founder"
            phone="9520102418"
            email="placementhub9@gmail.com"
            image={yashImg}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          Have a question, project idea, or want to collaborate?
          Fill out the form below and we’ll get back to you within 24 hours.
        </p>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
