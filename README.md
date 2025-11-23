<!-- -------------------------------------------------------------------- -->
<!-- ❤️ LINKPRO README — Professionally Designed, ATS-Friendly, GitHub Perfect -->
<!-- -------------------------------------------------------------------- -->

<h1 align="center">🚀 LINKPRO  
<br>  
<sub><strong>Scalable URL Management System with Real-Time Analytics</strong></sub>
</h1>

<p align="center">
A modern, cloud-ready platform to shorten URLs, generate QR codes, and track live metrics — built with React, Node.js, Express, and PostgreSQL.
</p>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/React-v18-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-v18-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Express.js-Framework-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/PostgreSQL-NeonDB-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Deployed-Vercel & Render-black?style=for-the-badge">
</p>

<br>

---

# 🌐 **LIVE DEMO**

👉 **Frontend:**  
https://linkpro-nine.vercel.app  

👉 **Backend API:**  
https://tasklink-project1.onrender.com  

👉 **Frontend Repo:**  
https://github.com/imvipull9/LinkPro-Frontend  

👉 **Backend Repo:**  
https://github.com/imvipull9/LinkPro-Backend  

---

<br>

# ✨ **FEATURES**

╔══════════════════════════════════════════════════════════╗
║ ⚡ MODERN, CLEAN & POWERFUL LINK MANAGEMENT SYSTEM ║
╚══════════════════════════════════════════════════════════╝



### 🔗 **URL Shortening**
- Auto-generated short IDs  
- Custom code support  
- Secure & validated redirects  

### 📊 **Real-Time Analytics**
- Total clicks  
- Top-performing links  
- Latest created link  
- Live dashboard refresh  

### 🎨 **Modern Dashboard (MUI)**
- Smooth animations  
- Fully responsive  
- Minimal UI with rounded cards  

### 🔄 **Theme Support**
- Light / Dark mode  
- Persistent across sessions  

### 📸 **QR Code Generation**
- Instant QR creation  
- Ready to scan & share  

### 🗑 **Link Management Tools**
- Delete links  
- Copy short link  
- View full URL  

---

<br>

# 🧩 **TECH STACK**

### 🎨 **Frontend**
- React.js  
- Material UI (MUI)  
- React Router  
- Axios  
- Recharts  
- qrcode.react  

### ⚙️ **Backend**
- Node.js  
- Express.js  
- PostgreSQL (Neon)  
- CORS, Validation, Routing  

### ☁️ **Deployment**
- **Frontend → Vercel**  
- **Backend → Render**  
- **Database → Neon PostgreSQL**  

---

<br>

## 🔁 LINKPRO — FULL SEQUENCE DIAGRAM

```mermaid
sequenceDiagram
    autonumber

    participant U as 🧑 User
    participant FE as 🌐 Frontend<br>(React + MUI)
    participant API as 🔌 Backend API<br>(Node + Express)
    participant DB as 🗃 Database<br>(PostgreSQL – Neon)
    participant SITE as 🌍 Target Website

    %% ============ URL SHORTENING FLOW ============
    U->>FE: Enters long URL + (optional) custom code
    FE->>API: POST /api/links { original_url, short_id }
    API->>API: Validate URL
    API->>DB: INSERT short_id, original_url
    DB-->>API: Return saved record
    API-->>FE: 201 Created (JSON response)
    FE-->>U: Displays new short link + QR code

    %% ============ FETCH LINKS ============
    U->>FE: Opens dashboard
    FE->>API: GET /api/links
    API->>DB: SELECT * FROM short_links
    DB-->>API: Return rows
    API-->>FE: Return list of links
    FE-->>U: Render stats + table

    %% ============ REDIRECT FLOW ============
    U->>API: Visits /:short_id
    API->>DB: SELECT original_url WHERE short_id
    DB-->>API: Return original_url
    API->>DB: UPDATE clicks = clicks + 1
    API-->>SITE: Redirect (302)
    SITE-->>U: Opens target website

---

<br>

# ⚙️ **ENVIRONMENT VARIABLES (Frontend)**

Create a `.env` file:

```
REACT_APP_API_URL=https://tasklink-project1.onrender.com
<br>
🧪 LOCAL SETUP — FRONTEND
1️⃣ Clone the repo
bash
Copy code
git clone https://github.com/imvipull9/LinkPro-Frontend
cd LinkPro-Frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create .env

REACT_APP_API_URL=http://localhost:5000
4️⃣ Run the project
npm start

<br>
📡 API ENDPOINTS USED
✔ Fetch all links
GET /api/links

✔ Create short link
POST /api/links

{
  "original_url": "https://example.com",
  "short_id": "customCode"
}
✔ Delete a link
DELETE /api/links/:short_id

✔ Redirect
GET /:short_id

<br>
💡 WHY I BUILT THIS PROJECT
To demonstrate expertise in:

✔ Full-stack development
✔ REST API design
✔ Real-time analytics
✔ Cloud deployments
✔ Modern UI/UX engineering
✔ Production-grade systems

This project showcases complete control over frontend, backend, database, and cloud infrastructure.

<br>
🙌 AUTHOR
Vipul Saini
Full-Stack Developer

📧 Email: sainivipul1827@gmail.com
🌐 Portfolio: https://vipulportfolio-website-99.vercel.app/
