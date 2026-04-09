require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");
const Candidate = require("./models/Candidate");

// 🔹 JOB DATA
const jobs = [
  {
    title: "Frontend Developer",
    code: "FE001",
    skills: ["react", "javascript", "html", "css", "redux"],
    experienceRequired: 2,
    location: "Bangalore",
    description: "Develop responsive UI with React"
  },
  {
    title: "Backend Developer",
    code: "BE001",
    skills: ["node", "express", "mongodb", "api"],
    experienceRequired: 3,
    location: "Hyderabad",
    description: "Build scalable APIs"
  },
  {
    title: "Full Stack Developer",
    code: "FS001",
    skills: ["react", "node", "mongodb", "express"],
    experienceRequired: 3,
    location: "Remote",
    description: "Work on full stack systems"
  },
  {
    title: "Data Analyst",
    code: "DA001",
    skills: ["python", "sql", "excel", "powerbi"],
    experienceRequired: 2,
    location: "Chennai",
    description: "Analyze business data"
  },
  {
    title: "Machine Learning Engineer",
    code: "ML001",
    skills: ["python", "tensorflow", "pandas", "numpy"],
    experienceRequired: 3,
    location: "Remote",
    description: "Build ML models"
  },
  {
    title: "DevOps Engineer",
    code: "DO001",
    skills: ["docker", "kubernetes", "aws", "linux"],
    experienceRequired: 4,
    location: "Pune",
    description: "Manage cloud infrastructure"
  },
  {
    title: "UI/UX Designer",
    code: "UX001",
    skills: ["figma", "adobe xd", "ui design", "ux research"],
    experienceRequired: 2,
    location: "Remote",
    description: "Design user-friendly interfaces and experiences"
  },
  {
    title: "QA Engineer",
    code: "QA001",
    skills: ["testing", "selenium", "automation", "jira"],
    experienceRequired: 2,
    location: "Bangalore",
    description: "Ensure software quality with testing strategies"
  },
  {
    title: "Android Developer",
    code: "AND001",
    skills: ["java", "kotlin", "android", "firebase"],
    experienceRequired: 2,
    location: "Hyderabad",
    description: "Build Android mobile applications"
  },
  {
    title: "Cloud Engineer",
    code: "CLD001",
    skills: ["aws", "azure", "gcp", "cloud architecture"],
    experienceRequired: 3,
    location: "Remote",
    description: "Design and manage cloud infrastructure"
  },
  {
    title: "Cybersecurity Analyst",
    code: "SEC001",
    skills: ["security", "networking", "penetration testing", "firewalls"],
    experienceRequired: 3,
    location: "Delhi",
    description: "Monitor and secure systems from threats"
  },
  {
    title: "Software Engineer Intern",
    code: "INT001",
    skills: ["java", "python", "c++", "basic programming"],
    experienceRequired: 0,
    location: "Remote",
    description: "Entry-level internship for software development"
  }
];

// 🔹 CANDIDATE DATA
const candidates = [
  {
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "9876543210",
    skills: ["react", "javascript", "css", "html"],
    experience: 2,
    education: "B.Tech",
    company: "Infosys",
    resumeUrl: ""
  },
  {
    name: "Ananya Reddy",
    email: "ananya.reddy@gmail.com",
    phone: "9123456780",
    skills: ["node", "express", "mongodb"],
    experience: 3,
    education: "B.E",
    company: "TCS",
    resumeUrl: ""
  },
  {
    name: "Karthik Kumar",
    email: "karthik.kumar@gmail.com",
    phone: "9988776655",
    skills: ["react", "node", "mongodb"],
    experience: 3,
    education: "B.Tech",
    company: "Wipro",
    resumeUrl: ""
  },
  {
    name: "Priya Singh",
    email: "priya.singh@gmail.com",
    phone: "9871234567",
    skills: ["python", "sql", "excel"],
    experience: 2,
    education: "B.Sc",
    company: "Accenture",
    resumeUrl: ""
  },
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    phone: "9001122334",
    skills: ["python", "machine learning", "tensorflow"],
    experience: 4,
    education: "M.Tech",
    company: "IBM",
    resumeUrl: ""
  },
  {
    name: "Sneha Patel",
    email: "sneha.patel@gmail.com",
    phone: "9012345678",
    skills: ["figma", "ui design"],
    experience: 2,
    education: "B.Des",
    company: "Zoho",
    resumeUrl: ""
  },
  {
    name: "Vikram Rao",
    email: "vikram.rao@gmail.com",
    phone: "9090909090",
    skills: ["docker", "kubernetes", "aws", "linux"],
    experience: 5,
    education: "B.Tech IT",
    company: "Amazon",
    resumeUrl: "",
    createdAt: new Date()
  },
  {
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    phone: "9876501234",
    skills: ["testing", "selenium", "automation", "jira"],
    experience: 3,
    education: "B.Tech",
    company: "Capgemini",
    resumeUrl: "",
    createdAt: new Date()
  },
  {
    name: "Rohit Verma",
    email: "rohit.verma@gmail.com",
    phone: "8888888888",
    skills: ["java", "spring boot", "mysql"],
    experience: 4,
    education: "B.Tech Computer Science",
    company: "HCL",
    resumeUrl: "",
    createdAt: new Date()
  },
  {
    name: "Pooja Nair",
    email: "pooja.nair@gmail.com",
    phone: "9765432109",
    skills: ["android", "kotlin", "firebase"],
    experience: 2,
    education: "B.Tech",
    company: "Flipkart",
    resumeUrl: "",
    createdAt: new Date()
  },
  {
    name: "Amit Joshi",
    email: "amit.joshi@gmail.com",
    phone: "9011223344",
    skills: ["cloud", "aws", "azure", "gcp"],
    experience: 4,
    education: "B.Tech",
    company: "Microsoft",
    resumeUrl: "",
    createdAt: new Date()
  },
  {
    name: "Divya Iyer",
    email: "divya.iyer@gmail.com",
    phone: "9123123123",
    skills: ["c++", "data structures", "algorithms"],
    experience: 1,
    education: "B.Tech",
    company: "Freshworks",
    resumeUrl: "",
    createdAt: new Date()
  }
];

// 🔹 SEED FUNCTION
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    // Clear old data
    await Job.deleteMany();
    await Candidate.deleteMany();

    // Insert new data
    await Job.insertMany(jobs);
    await Candidate.insertMany(candidates);

    console.log("✅ Jobs & Candidates Seeded Successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding Error:", error.message);
    process.exit(1);
  }
};

seed();