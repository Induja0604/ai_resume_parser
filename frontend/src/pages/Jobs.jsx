import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
  <div className="container">
    <h2 className="title">🚀 Job Opportunities</h2>

    <div className="grid">
      {jobs.map((job) => (
        <div className="card job-card" key={job._id}>

          <div className="job-header">
            <h3>{job.title}</h3>
            <span className="job-code">{job.code}</span>
          </div>

          <p className="job-location">📍 {job.location}</p>

          <div className="skills">
            {job.skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>

          <div className="job-footer">
            <span className="exp">💼 {job.experienceRequired} yrs</span>
            <button className="match-btn">Match Candidates</button>
          </div>

        </div>
      ))}
    </div>
  </div>
);
}