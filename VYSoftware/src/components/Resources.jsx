import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";

const posts = Array.from({length:8}).map((_,i)=>({
  img:`https://picsum.photos/seed/res${i}/560/360`,
  title:`Featured resource ${i+1}`,
  tag:i%2===0?"Design":"Engineering",
  date:"Oct 2025"
}));

export default function Resources() {
  const navigate = useNavigate();
  return (
    <div className="section alt-soft">
      <div className="container">
        <SectionHeading eyebrow="Featured" title="Resources" />
        <div className="grid resources">
          {posts.map((p,i)=>(
            <article className="resource" key={i}>
              <a href="#" onClick={(e)=>e.preventDefault()} className="img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
              </a>
              <div className="pad">
                <span className="pill ghost">{p.tag}</span>
                <h3 className="line-clamp-2">{p.title}</h3>
                <p className="muted">{p.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="cta-banner">
          <div>
            <h3>Hire the best developers and designers around!</h3>
          
          </div>
          <button
  as="a"
  className="btn btn-primary"
  onClick={() => window.open("https://forms.gle/Ny25XhtL7MmtZa9z5", "_blank", "noopener,noreferrer")}
  type="button"
>
  Apply now
</button>

        </div>
      </div>
    </div>
  );
}
