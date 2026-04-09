import { useState } from "react";
import API from "../services/api";
import "../styles/upload.css";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
  if (!file) return alert("Select file");

  try {
    const form = new FormData();
    form.append("file", file);

    setLoading(true);

    const res = await API.post("/upload", form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    console.log("✅ Response:", res.data);

    setData(res.data);

  } catch (err) {
    console.error("❌ Frontend Error:", err);
    alert("Upload failed");
  } finally {
    setLoading(false);
  }
};

  return (
  <div className="container">
    <div className="upload-card">

      {/* ✅ NEW HEADING */}
      <h1 className="main-heading">
        AI Resume Parser & <span>Job Matching</span>
      </h1>

      {/* ✅ NEW SUBTITLE */}
      <p className="sub-text">
        Upload resumes, extract structured data and match candidates against job listings with intelligent scoring
      </p>

      <h2>Upload Resume</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="btn" onClick={upload}>
        Upload & Parse
      </button>

      {loading && <p>Parsing...</p>}

      {data && (
        <div className="result">
          <h3>Parsed Data</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  </div>
);
}