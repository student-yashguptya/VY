import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import LeadershipCard from "./components/LeadershipCard";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Contactpage from "./components/ContactForm";



import vishalImg from "./assets/vishal.jpg";
import yashImg from "./assets/yash.jpg";
import About from "./pages/About";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <section id="about" className="about">
        <About />
        </section>

      {/* Projects Section */}
<section id="projects" className="projects">
  <h2>Our Projects</h2>
  <p className="projects-subtext">
    Explore some of the impactful solutions we’ve built for businesses and institutions.
  </p>
  <div className="project-grid">
    <ProjectCard 
      title="Allin1 Management Website" 
      description="An integrated platform to handle HR, finance, and workflow management seamlessly." 
      icon="📊"
    />
    <ProjectCard 
      title="College & Company Placement ERP" 
      description="A robust ERP system designed to automate campus recruitment and corporate hiring processes." 
      icon="🎓"
    />
    <ProjectCard 
      title="BookMyRoom App & Website" 
      description="A modern booking system for hotels, hostels, and shared accommodations." 
      icon="🏨"
    />
    {/* Example extra project if you expand later */}
    {/* <ProjectCard 
      title="E-Commerce Store Builder" 
      description="Create your own online store with customizable templates and secure payment options." 
      icon="🛒"
    /> */}
  </div>
</section>


      {/* Leadership Section */}
      <section id="leadership" className="leadership">
        <h2>Our Leadership</h2>
        <div className="leadership-grid">
          <LeadershipCard name="Vishal Sharma" role="CEO & Co-founder" phone="6398692585" email="placementhub9@gmail.com" image={vishalImg} />
          <LeadershipCard name="Yash Gupta" role="CEO & Co-founder" phone="9520102418" email="placementhub9@gmail.com" image={yashImg} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Scroll handler */}
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contactpage />} />

      </Routes>
    </Router>
  );
}

export default App;
