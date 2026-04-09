import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/candidates.css";

export default function Candidates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/candidates").then((res) => setData(res.data));
  }, []);

  return (
  <div className="container">
    <h2 className="title">👤 Candidate Profiles</h2>

    <div className="grid">
      {data.map((c) => (
        <div className="card candidate-card" key={c._id}>

          <div className="candidate-header">
            <h3>{c.name}</h3>
            <span className="experience">{c.experience} yrs</span>
          </div>

          <p className="email">📧 {c.email}</p>

          <div className="skills">
            {c.skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>

          <div className="candidate-footer">
            <span className="company">🏢 {c.company}</span>
            <button className="match-btn">Match Jobs</button>
          </div>

        </div>
      ))}
    </div>
  </div>
);
}