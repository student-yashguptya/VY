import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";

const steps = [
  {
    title: "Build the right team to scale",
    points: [
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
      "Our delivery model helps you cut costs and deliver within budget.",
    ],
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    person: { name: "Jeewa markram", role: "CEO", avatar: "https://i.pravatar.cc/56?img=12" },
    img: Image2,
  },
  {
    title: "Build the right team to scale",
    points: [
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
      "Our delivery model helps you cut costs and deliver within budget.",
    ],
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    person: { name: "Jeewa markram", role: "CEO", avatar: "https://i.pravatar.cc/56?img=32" },
    img: Image3,
  },
  {
    title: "Build the right team to scale",
    points: [
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
      "Our delivery model helps you cut costs and deliver within budget.",
    ],
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    person: { name: "Jeewa markram", role: "CEO", avatar: "https://i.pravatar.cc/56?img=48" },
    img: Image4,
  },
];

export default function Process() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading eyebrow="Way of building" title="Great Software" />
        <div className="process-list">
          {steps.map((s, i) => (
            <article key={i} className={`process-item ${i % 2 ? "reverse" : ""}`}>
              <div className="process-copy">
                <h3 className="process-title">{s.title}</h3>

                <p className="muted">{s.points[0]}</p>
                <p className="muted">{s.points[1]}</p>

                <div className="process-quote">
                  <span className="bar" />
                  <p>
                    <em>“{s.quote}”</em>
                  </p>
                </div>

                <div className="process-person">
                  <img src={s.person.avatar} alt={s.person.name} />
                  <div>
                    <strong>{s.person.name}</strong>
                    <div className="muted small">{s.person.role}</div>
                  </div>
                </div>
              </div>

              <div className="process-media">
                <div className="media-card">
                  <img src={s.img} alt={s.title} />
                  <span className="dot tl" />
                  <span className="dot tr" />
                  <span className="dot bl" />
                  <span className="dot br" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
