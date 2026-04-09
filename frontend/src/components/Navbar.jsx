import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Resume Matcher</h2>
      <div>
        <Link to="/">Upload</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/candidates">Candidates</Link>
      </div>
    </nav>
  );
}