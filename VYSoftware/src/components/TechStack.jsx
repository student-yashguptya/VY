import React, { useMemo, useState, useRef, useEffect } from "react";
import SectionHeading from "./SectionHeading.jsx";
import "./TechStack.css";

const CATEGORIES = [
  "Backend",
  "Frontend",
  "Databases",
  "CMS",
  "Cloud",
  "DevOps",
];

const ICONS = {
  Backend: [
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: ".NET Core", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  ],
  Frontend: [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  Databases: [
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Elasticsearch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  ],
  CMS: [
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Strapi", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/strapi.svg" },
    { name: "Contentful", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/contentful.svg" },
    { name: "Sanity", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sanity.svg" },
  ],
  Cloud: [
    { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "DigitalOcean", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "Vercel", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg" },
    { name: "Heroku", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
  ],
  DevOps: [
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],
};

export default function TechStack() {
  const [active, setActive] = useState("Backend");
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const move = () => {
      const tabsEl = tabsRef.current;
      const ind = indicatorRef.current;
      if (!tabsEl || !ind) return;
      const btn = tabsEl.querySelector(`[data-tab="${active}"]`);
      if (!btn) return;
      const { offsetLeft, offsetWidth } = btn;
      ind.style.transform = `translateX(${offsetLeft}px)`;
      ind.style.width = `${offsetWidth}px`;
    };
    move();
    const resizeObserver = new ResizeObserver(move);
    if (tabsRef.current) resizeObserver.observe(tabsRef.current);
    window.addEventListener("resize", move, { passive: true });
    return () => {
      window.removeEventListener("resize", move);
      resizeObserver.disconnect();
    };
  }, [active]);

  const icons = useMemo(() => ICONS[active] || [], [active]);

  return (
    <div className="section tech-section">
      <div className="container">
        <SectionHeading 
          eyebrow="Our" 
          title="Tech Stack" 
          subtitle="Modern technologies powering our solutions"
        />

        <div className="tabs-wrap">
          <div className="tabs" ref={tabsRef} role="tablist" aria-label="Tech stack categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                aria-controls={`panel-${c}`}
                className={`tab-btn ${active === c ? "is-active" : ""}`}
                onClick={() => setActive(c)}
                data-tab={c}
              >
                {c}
              </button>
            ))}
            <span className="tab-indicator" ref={indicatorRef} aria-hidden="true" />
          </div>
        </div>

        <div className="stack-logos" id={`panel-${active}`} role="tabpanel">
          {icons.map((i) => (
            <div key={i.name} className="logo-cell" title={i.name}>
              <div className="logo-wrapper">
                <img 
                  loading="lazy" 
                  src={i.src} 
                  alt={i.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="logo-placeholder">${i.name.charAt(0)}</div>`;
                  }}
                />
              </div>
              <span className="logo-name">{i.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
