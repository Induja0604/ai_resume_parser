#  AI Resume Parser & Job Matcher

A modern full-stack web application that allows users to upload resumes, extract structured candidate data, and intelligently match candidates against job listings using AI-based scoring.

---

##  Tech Stack

### Frontend

* React 18 (Hooks + Functional Components)
* React Router DOM
* Axios
* CSS 

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Other Tools

* Multer (File Upload)
* pdf-parse (Resume Parsing)
* dotenv

---

## Project Structure

```
ai-resume-parser/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   ├── seed.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

##  Backend Setup

### 1. Navigate to backend

```
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start backend server

```
npm run dev
```

or

```
nodemon server.js
```

---

##  Seed Job Data

Run the seed script to insert default jobs:

```
node seed.js
```

---

## Frontend Setup

### 1. Navigate to frontend

```
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

---

## Application URLs

* Frontend: http://localhost:5173
* Backend API: http://localhost:5000

---

##  API Endpoints

###  Upload Resume

```
POST /upload
```

###  Candidates

```
POST /candidates
GET  /candidates
```

###  Jobs

```
GET /jobs
```

###  Match Candidate

```
POST /match
```

---

##  Resume Parsing Logic

* Extracts:

  * Name
  * Email
  * Phone Number
  * Skills (keyword-based)
  * Experience (estimated)
  * Education
  * Company

---

## Matching Algorithm

* **Skill Match (%)**
  = matched skills / required skills

* **Experience Match**
  = Full / Partial

* **Final Score**
  = (70% Skills) + (30% Experience)

---

---

##  Deployment Notes

* Use MongoDB Atlas for cloud DB
* Use Vercel / Netlify for frontend
* Use Render / Railway for backend

---

##  Author

Developed as a Induja

---

##  License

This project is open-source and free to use.
