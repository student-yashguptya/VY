import React from 'react';
import CEOCard from '../components/CEOCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const ceos = [
    { name: 'Vishal Sharma', phone: '6398692585', email: 'placementhub9@gmail.com', title: 'CEO' },
    { name: 'Yash Gupta', phone: '9520102418', email: 'placementhub9@gmail.com', title: 'Co-founder' },
  ];

  const projects = [
    'Allin1 management website',
    'College & Company placement ERP',
    'BookMyRoom App and website',
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to VY Software Company</h1>

      <section>
        <h2>Our Leadership</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {ceos.map((person, idx) => (
            <CEOCard key={idx} {...person} />
          ))}
        </div>
      </section>

      <section>
        <h2>Our Projects</h2>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
