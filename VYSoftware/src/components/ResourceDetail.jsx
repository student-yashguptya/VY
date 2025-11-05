// src/components/ResourceDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getResourceById, getRelatedResources } from "./resourcesData";

export default function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const res = getResourceById(id);

  useEffect(() => {
    if (!res) return;

    // Fade-up reveal animation
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-in");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [res]);

  // Active TOC section highlight
  useEffect(() => {
    if (!res) return;

    const sections = res.sections.map((s) => document.getElementById(s.id));
    const tocLinks = document.querySelectorAll(".toc-link");

    const onScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
      });

      tocLinks.forEach((btn) => {
        const sectionMatch = res.sections.find((s) => s.id === current);
        btn.classList.toggle(
          "is-active",
          btn.textContent === sectionMatch?.heading
        );
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [res]);

  if (!res) {
    return (
      <div className="section">
        <div className="container">
          <p className="muted">Resource not found.</p>
          <button className="btn" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  const scrollTo = (secId) => {
    document.getElementById(secId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const related = getRelatedResources(id, 3);

  return (
    <div className="resource-page">
      <header className="res-hero">
        <div className="container res-hero-wrap">
          <div className="res-hero-copy reveal">
            <div className="eyebrow">{res.category}</div>
            <h1>{res.title}</h1>
            <p className="muted">{res.description}</p>
            <div className="res-meta">
              <span className="pill">{res.tag}</span>
              <span className="muted small">{res.date}</span>
              <span className="muted small">• {res.author}</span>
              <span className="muted small">• {res.readTime}</span>
            </div>
          </div>
          <div className="res-hero-art reveal">
            <img src={res.image} alt={res.title} />
          </div>
        </div>
      </header>

      <nav className="res-toc">
        <div className="container res-toc-inner">
          {res.sections.map((s) => (
            <button
              key={s.id}
              className="toc-link"
              onClick={() => scrollTo(s.id)}
            >
              {s.heading}
            </button>
          ))}
        </div>
      </nav>

      <main className="container res-content">
        {res.sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={`res-section reveal ${s.image ? "has-media" : ""}`}
          >
            {s.image && (
              <div className="res-media">
                <img src={s.image} alt={s.heading} />
              </div>
            )}

            <div className="res-copy">
              <h2>{s.heading}</h2>
              {s.body?.map((p, idx) => (
                <p key={idx} className="muted">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="res-bullets">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {s.callout && <div className="res-callout">{s.callout}</div>}
              {s.code && (
                <pre className="res-code">
                  <code>{s.code}</code>
                </pre>
              )}
            </div>
          </section>
        ))}

        <hr className="res-divider" />

        <section className="res-related">
          <h3>Related resources</h3>
          <div className="res-related-grid">
            {related.map((r) => (
              <article
                key={r.id}
                className="res-related-card"
                onClick={() => navigate(`/resource/${r.id}`)}
              >
                <img src={r.image} alt={r.title} />
                <div className="pad">
                  <span className="pill ghost">{r.tag}</span>
                  <h4 className="line-clamp-2">{r.title}</h4>
                  <p className="muted small">{r.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
