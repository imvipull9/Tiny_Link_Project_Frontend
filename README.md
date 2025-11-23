🔗 LinkPro – Scalable URL Management System with Real-Time Analytics

LinkPro is a cloud-ready, full-stack URL management platform built for creating short links, generating QR codes, and monitoring link performance through real-time analytics.
The system features a modern dashboard, dark/light themes, responsive UI, and seamless API integration with a Node.js backend.

<br><br><br>
🚀 Live Demo:

https://linkpro-nine.vercel.app

🔌 Backend API (Render):

https://tasklink-project1.onrender.com

📦 GitHub Repositories:

Frontend: https://github.com/imvipull9/LinkPro-Frontend

Backend: https://github.com/imvipull9/LinkPro-Backend

✨ Features
🔗 URL Shortening

Create short URLs with auto-generated or custom codes

Secure redirection handled through backend API

Validates and stores original URLs efficiently

📊 Real-Time Analytics

Total clicks tracking

Latest created link insights

Top performing links

Auto-refresh capability for live metrics

📱 Modern, Responsive Dashboard

Built with Material UI

Clean UX with smooth animations

Fully responsive across devices

🎨 Dark / Light Mode

Theme toggling with persistent preference

Optimized for UI accessibility

📸 QR Code Generator

Instantly generate QR codes for any link

Easy share and re-scan support

🗑 Link Management Tools

Copy short link to clipboard

Delete existing links

View complete target URL

🧩 Tech Stack
Frontend

React.js (Create React App)

React Router

Material UI (MUI)

Axios

Recharts

qrcode.react

Backend

Node.js

Express.js

PostgreSQL (Neon DB)

CORS, URL validation, structured APIs

Deployment

Frontend: Vercel

Backend: Render

Database: Neon PostgreSQL

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

⚙️ Environment Variables (Frontend)

Create a .env file in the root:

REACT_APP_API_URL=https://tasklink-project1.onrender.com

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

📡 API Endpoints Used by Frontend
✔ Fetch all links
GET /api/links

✔ Create a short link
POST /api/links


Body:

{
  "original_url": "https://example.com",
  "short_id": "customCode"
}

✔ Delete a link
DELETE /api/links/:short_id

✔ Redirect a link
GET /:short_id

💡 Why I Built This

To demonstrate full-stack development skills by building a scalable, cloud-deployed URL management system with real-time analytics, modern UI/UX, robust API design, and production-ready architecture.

🙌 Author

Vipul Saini
Full-Stack Developer
📧 Email: sainivipul1827@gmail.com

🌐 Portfolio: https://vipulportfolio-website-99.vercel.app/
