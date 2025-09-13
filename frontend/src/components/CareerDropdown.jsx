import React, { useState, useEffect } from "react";
import "../CareerDropdown.css";
import job1 from "../assets/career1.png";
import job2 from "../assets/career1.png";

const jobs = [
  // {
  //   id: 1,
  //   title: "Frontend Developer",
  //   type: "Full-time",
  //   location: "Remote",
  //   image: job1,
  //   responsibilities: ["Build UI components", "Collaborate with designers"],
  //   requirements: ["React.js", "CSS", "Team player"],
  //   applyLink: "#",
  // },
  // {
  //   id: 2,
  //   title: "UI/UX Intern",
  //   type: "Intern",
  //   location: "Onsite",
  //   image: job2,
  //   responsibilities: ["Design wireframes", "User research"],
  //   requirements: ["Figma", "Creativity"],
  //   applyLink: "#",
  // },
];

function CareerDropdown({ isOpen, onClose }) {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.type === filter);

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="career-backdrop open" onClick={onClose}>
      <div
        className={`career-dropdown ${isOpen ? "open" : ""}`}
        // ⚡ no stopPropagation here → clicks on blank dropdown area will close
      >
        <div className="career-content">
          {/* Left Section */}
          <div className="career-left" onClick={onClose}>
            <h2>💼 Join Our Team</h2>
            <p>
              We’re always looking for passionate people to grow with us.
              Explore open roles below.
            </p>
          </div>

          {/* Right Section */}
          <div className="career-right">
            {/* Filter Bar (don’t close) */}
            <div className="filter-bar" onClick={(e) => e.stopPropagation()}>
              <label htmlFor="jobFilter">Filter by:</label>
              <select
                id="jobFilter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Full-time">Full-time</option>
                <option value="Intern">Intern</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Job Grid (don’t close on cards) */}
            <div className="career-grid" onClick={(e) => e.stopPropagation()}>
              {filteredJobs.map((job, index) => (
                <div
                  className="career-card fade-slide"
                  key={job.id}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <img src={job.image} alt={job.title} className="career-img" />
                  <h3>{job.title}</h3>
                  <p>
                    <strong>Type:</strong> {job.type}
                  </p>
                  <p>
                    <strong>Location:</strong> {job.location}
                  </p>

                  <h4>Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>

                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>

                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="apply-btn"
                    onClick={(e) => e.stopPropagation()} // don’t close
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerDropdown;
