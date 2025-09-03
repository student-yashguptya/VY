import React from 'react';
import LeadershipCard from '../components/LeadershipCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import logo from '../assets/image.png';

const leadershipMembers = [
  { name: 'Vishal Sharma', phone: '6398692585', email: 'placementhub9@gmail.com' },
  { name: 'Yash Gupta', phone: '9520102418', email: 'placementhub9@gmail.com' },
];

const projects = [
  'Allin1 management website',
  'College & Company placement ERP',
  'BookMyRoom App and website',
];

const services = [
  "Custom Software Development",
  "Product Engineering",
  "Placement Management Solutions",
  "Cloud Deployment",
  "Mobile Applications",
  "UI/UX Design"
];

const testimonials = [
  {
    avatar: logo,
    quote: "VY Software Company's ERP transformed our entire placement process! Their team is innovative, reliable, and fast.",
    client: "Tech University, HR",
  },
  {
    avatar: logo,
    quote: "Professional, skilled, and supportive at every step. Highly recommend for product platforms.",
    client: "BookMyRoom",
  },
];

const techStack = [
  "React.js", "Node.js", "MongoDB", "AWS", "Docker", "Figma", "Vite"
];

export default function Home() {
  return (
    <main className="container" role="main" style={{paddingTop:'2.2rem'}}>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(90deg, #16c2d5 10%, #0C223F 90%)',
        borderRadius: '22px',
        padding: '2.7rem 2rem 2.2rem',
        marginBottom: '2.2rem',
        color: '#fff',
        boxShadow: '0 7px 48px rgba(22,194,213,.15)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img src={logo} alt="VY Software Logo" style={{
          height:'64px',marginBottom:'1.2rem',boxShadow:'0 6px 40px #ffd60088',background:'#fff',borderRadius:'20px',border:'5px solid #FFD600',padding:'5px'
        }} />
        <h1 style={{
          fontSize:'2.5rem',
          fontWeight:900,
          letterSpacing:'.08em',
          background:'linear-gradient(90deg, #FFD600 10%, #fff 90%)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}>Welcome to VY Software Company</h1>
        <p style={{
          fontSize: '1.36rem',
          margin:'0.8rem auto 0',
          fontWeight:'600',
          maxWidth:'540px',
          textShadow:'0 2px 11px #15c2e911'
        }}>
          Building <span style={{color:'#FFD600'}}>bright careers</span> with trusted software and smart digital platforms.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section aria-labelledby="about-header" style={{marginBottom:"2.2rem",display:'flex',alignItems:'center',flexWrap:'wrap',gap:'2rem'}}>
        <img src={logo} alt="Team Avatar" style={{height:'46px',borderRadius:'50%',background:'#fff',border:'3px solid #FFD600',marginRight:'1.2rem'}}/>
        <div>
          <h2 className="section-heading" id="about-header">Who We Are</h2>
          <p style={{maxWidth:"650px",color:"#355",fontSize:"1.13rem",fontWeight:500}}>
            VY Software Company specializes in modern digital products for education and enterprises. Our team combines cutting-edge technology, thoughtful UI/UX, and strong placement expertise—delivering scalable solutions for every client.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section aria-labelledby="leadership-header" style={{marginBottom:'2.2rem'}}>
        <h2 className="section-heading" id="leadership-header">Our Leadership</h2>
        <LeadershipCard members={leadershipMembers} />
      </section>

      {/* EXPERTISE */}
      <section aria-labelledby="services-header" style={{marginBottom:'2.2rem'}}>
        <h2 className="section-heading" id="services-header">Expertise & Solutions</h2>
        <div style={{display:'flex',overflowX:'auto',gap:'1.3rem',paddingBottom:'0.5rem',marginBottom:'1.3rem'}}>
          {services.map(service => (
            <span key={service}
              style={{
                background:"linear-gradient(90deg, #16c2d5 0%, #0C223F 70%)",
                color:"#fff",
                borderRadius:"22px",
                padding:"0.78rem 2.1rem",
                fontSize:"1.09rem",
                fontWeight:700,
                boxShadow:"0 2px 14px #16c2d527",
                whiteSpace:'nowrap',cursor:'pointer',
                transition:'transform .19s, box-shadow .19s'
              }}
              onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';}}
              onMouseOut={e => {e.currentTarget.style.transform='scale(1.0)';}}
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section aria-labelledby="projects-header" style={{marginBottom:'2.4rem'}}>
        <h2 className="section-heading" id="projects-header">Featured Projects</h2>
        <div className="project-grid" style={{marginTop:'0.3rem'}} role="list">
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              project={proj}
              role="listitem"
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-header" style={{marginBottom:"2.7rem"}}>
        <h2 className="section-heading" id="testimonials-header">Success Stories</h2>
        <div style={{
          display:"flex",
          gap:"1.5rem",
          flexWrap:"wrap",
          alignItems:"stretch"
        }}>
          {testimonials.map((t, idx) => (
            <blockquote key={idx}
              style={{
                background:"#fffbe7",
                borderLeft:"7px solid #ffd600",
                borderRadius:"18px",
                boxShadow:"0 6px 30px #ffd60022",
                padding:"1.6rem 2rem",
                maxWidth:'340px',
                fontSize:'1.09rem',
                position:'relative'
              }}
            >
              <img src={t.avatar} alt="Client Avatar" style={{
                width:'34px',height:'34px',borderRadius:'50%',
                background:'#fff',border:'2.5px solid #f9be21',position:'absolute',left:'-17px',top:'18px'
              }}/>
              <p style={{fontStyle:"italic"}}>“{t.quote}”</p>
              <footer style={{textAlign:"right",marginTop:"1.1rem",fontWeight:"700",color:"#0C223F"}}>- {t.client}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section aria-labelledby="tech-header" style={{marginBottom:"2.9rem"}}>
        <h2 className="section-heading" id="tech-header">Our Technology</h2>
        <div style={{
          display:"flex",gap:"1.1rem",flexWrap:"wrap",justifyContent:"start"
        }}>
          {techStack.map(tech=>(
            <span key={tech} style={{
              background:"linear-gradient(90deg, #ffd600 0%, #0C223F 73%)",
              color:"#fff",
              borderRadius:"15px",
              padding:"0.7rem 1.6rem",
              fontWeight:"700",
              fontSize:"1rem",
              boxShadow:"0 2px 8px #ffd60022"
            }}>{tech}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-header">
        <h2 className="section-heading" id="contact-header">Get in Touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}
