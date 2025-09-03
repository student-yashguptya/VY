import React from 'react';
import LeadershipCard from '../components/LeadershipCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const leadershipMembers = [
  { name: 'Vishal Sharma', phone: '6398692585', email: 'placementhub9@gmail.com' },
  { name: 'Yash Gupta', phone: '9520102418', email: 'placementhub9@gmail.com' },
];

const projects = [
  'Allin1 management website',
  'College & Company placement ERP',
  'BookMyRoom App and website',
];

const Home = () => (
  <main className="container" role="main">
    <h1>Welcome to VY Software Company</h1>

    <section aria-labelledby="leadership-header">
      <h2 id="leadership-header">Our Leadership</h2>
      <LeadershipCard members={leadershipMembers} />
    </section>

    <section aria-labelledby="projects-header">
      <h2 id="projects-header">Our Projects</h2>
      <div className="card-grid" role="list">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} role="listitem" />
        ))}
      </div>
    </section>

    <section aria-labelledby="contact-header">
      <h2 id="contact-header">Get in Touch</h2>
      <ContactForm />
    </section>
  </main>
);

export default Home;
