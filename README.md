🔗 LinkPro – Scalable URL Management System with Real-Time Analytics

LinkPro is a cloud-ready, full-stack URL management platform built for creating short links, generating QR codes, and monitoring link performance through real-time analytics.
The system features a modern dashboard, dark/light themes, responsive UI, and seamless API integration with a Node.js backend.

<br><br>
🚀 Live Demo:

https://linkpro-nine.vercel.app
<br><br>

🔌 Backend API (Render):

https://tasklink-project1.onrender.com
<br><br>

📦 GitHub Repositories:

Frontend: https://github.com/imvipull9/LinkPro-Frontend

Backend: https://github.com/imvipull9/LinkPro-Backend
<br><br>

✨ Features
🔗 URL Shortening

Create short URLs with auto-generated or custom codes

Secure redirection handled through backend API

Validates and stores original URLs efficiently
<br><br>

📊 Real-Time Analytics

Total clicks tracking

Latest created link insights

Top performing links

Auto-refresh capability for live metrics
<br><br>

📱 Modern, Responsive Dashboard

Built with Material UI

Clean UX with smooth animations

Fully responsive across devices
<br><br>

🎨 Dark / Light Mode

Theme toggling with persistent preference

Optimized for UI accessibility
<br><br>

📸 QR Code Generator

Instantly generate QR codes for any link

Easy share and re-scan support
<br><br>

🗑 Link Management Tools

Copy short link to clipboard

Delete existing links

View complete target URL
<br><br>

🧩 Tech Stack
Frontend

React.js (Create React App)

React Router

Material UI (MUI)

Axios

Recharts

qrcode.react
<br>

Backend

Node.js

Express.js

PostgreSQL (Neon DB)

CORS, URL validation, structured APIs
<br><br>

Deployment

Frontend: Vercel

Backend: Render

Database: Neon PostgreSQL
<br><br>

🏗 Project Architecture
LinkPro
│
├── Frontend (React + MUI)
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── public / src
│
├── Backend (Node + Express)
│   ├── routes
│   ├── controllers
│   ├── database
│   └── server.js
│
└── PostgreSQL (Neon)

<br><br>

⚙️ Environment Variables (Frontend)

Create a .env file in the root:

REACT_APP_API_URL=https://tasklink-project1.onrender.com

<br><br>

🧪 Local Setup (Frontend)
1️⃣ Clone the repository
git clone https://github.com/imvipull9/LinkPro-Frontend
cd LinkPro-Frontend

2️⃣ Install dependencies
npm install

3️⃣ Create .env
REACT_APP_API_URL=http://localhost:5000

4️⃣ Run the frontend
npm start

<br><br>

📡 API Endpoints Used by Frontend
✔ Fetch all links
GET /api/links

<br>

✔ Create a short link
POST /api/links


Body:

{
  "original_url": "https://example.com",
  "short_id": "customCode"
}

<br>

✔ Delete a link
DELETE /api/links/:short_id

<br>

✔ Redirect a link
GET /:short_id

<br><br>

💡 Why I Built This

To demonstrate full-stack development skills by building a scalable, cloud-deployed URL management system with real-time analytics, modern UI/UX, robust API design, and production-ready architecture.

<br><br>

🙌 Author

Vipul Saini
Full-Stack Developer
📧 Email: sainivipul1827@gmail.com

🌐 Portfolio: https://vipulportfolio-website-99.vercel.app/
