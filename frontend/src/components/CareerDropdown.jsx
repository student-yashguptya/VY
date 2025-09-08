import React, { useState, useEffect } from "react";
import "../CareerDropdown.css";
import job1 from "../assets/career1.png";
import job2 from "../assets/career1.png";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    location: "Bangalore, India",
    image: job1,
    responsibilities: [
      "Build UI components",
      "Collaborate with designers",
      "Optimize performance",
    ],
    requirements: ["React.js experience", "Good CSS/JS skills", "Team player"],
  },
  {
    id: 2,
    title: "UI/UX Designer Intern",
    type: "Intern",
    location: "Remote",
    image: job2,
    responsibilities: ["Design mockups", "Work with dev team", "User testing"],
    requirements: ["Figma knowledge", "Creative mindset", "Portfolio"],
  },
  {
    id: 3,
    title: "UI/UX Designer Intern",
    type: "Intern",
    location: "On-site",
    image: job2,
    responsibilities: ["Design mockups", "Work with dev team", "User testing"],
    requirements: ["Figma knowledge", "Creative mindset", "Portfolio"],
  },
  {
    id: 4,
    title: "UI/UX Designer Intern",
    type: "Remote",
    location: "Mumbai, India",
    image: job2,
    responsibilities: ["Design mockups", "Work with dev team", "User testing"],
    requirements: ["Figma knowledge", "Creative mindset", "Portfolio"],
  },
];

function CareerDropdown({ isOpen, onClose }) {
  const [filter, setFilter] = useState("All");

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.type === filter);

  // Close on ESC key
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
    <>
      {/* Backdrop + Dropdown */}
      <div
        className={`career-dropdown ${isOpen ? "open" : ""}`}
        onClick={onClose} // clicking anywhere closes
      >
        <div className="career-content">
          {/* Left Section */}
          <div className="career-left">
            <h2>💼 Join Our Team</h2>
            <p>
              We’re always looking for passionate people to grow with us.
              Explore open roles below.
            </p>
          </div>

          {/* Right Section */}
          <div className="career-right">
            {/* Filter Bar */}
            <div className="filter-bar">
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

            {/* Job Grid */}
            <div className="career-grid">
              {filteredJobs.map((job) => (
                <div className="career-card" key={job.id}>
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
                </div>
              ))}
            </div>

            {/* One Apply Button */}
            <div className="apply-wrapper">
              <a
                href="https://forms.gle/9zsia1jBH9joduMu7"
                target="_blank"
                rel="noreferrer"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerDropdown;
