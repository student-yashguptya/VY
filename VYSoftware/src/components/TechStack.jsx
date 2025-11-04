import React, { useMemo, useState, useRef, useEffect } from "react";
import SectionHeading from "./SectionHeading.jsx";

const CATEGORIES = [
  "Backend",
  "Frontend",
  "Databases",
  "CMS",
  "CloudTesting",
  "DevOps",
];

const ICONS = {
  Backend: [
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: ".NET Core", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  ],
  Frontend: [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  ],
  Databases: [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    
  ],
  CMS: [
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Strapi", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg" },

  ],
  CloudTesting: [
    { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "GCP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
   
  ],
  DevOps: [
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "GitHub Actions", src: "https://techicons.dev/icons/githubactions/color/24.svg" },
    
    
  ],
};

export default function TechStack() {
  const [active, setActive] = useState("Backend");
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  // Move underline to active tab and keep correct on resize/wrap
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
    window.addEventListener("resize", move, { passive: true });
    return () => window.removeEventListener("resize", move);
  }, [active]);

  const icons = useMemo(() => ICONS[active] || [], [active]);

  return (
    <div className="section alt">
      <div className="container">
        <SectionHeading eyebrow="Our" title="Tech Stack" />
        <div className="tabs-wrap">
          <div className="tabs" ref={tabsRef} role="tablist" aria-label="Tech stack categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
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

        <div className="stack-logos">
          {icons.map((i) => (
            <div className="logo-cell" key={i.name} title={i.name}>
              <img loading="lazy" src={i.src} alt={i.name} />
              <span>{i.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
