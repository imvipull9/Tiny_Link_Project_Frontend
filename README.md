🚀 LinkPro – Scalable URL Management System with Real-Time Analytics

LinkPro is a modern, full-stack URL management system that allows users to create short links, generate QR codes, and monitor real-time click analytics.
The platform includes a responsive dashboard, dark/light themes, and seamless API integration with a Node.js backend.

👉 Live Demo: https://linkpro-nine.vercel.app

👉 Backend API (Render): https://tasklink-project1.onrender.com

👉 Backend Repository: https://github.com/imvipull9/LinkPro-Backend

👉 Frontend Repository: https://github.com/imvipull9/LinkPro-Frontend

✨ Features
🔗 URL Shortening

Create short URLs with automatic or custom codes

Redirect tracking logic handled via backend

📊 Real-Time Analytics

Total clicks

Latest created link

Top performing links

Real-time refresh

📱 Modern Dashboard

Sleek UI built using Material UI (MUI)

Fully responsive

Smooth animations & transitions

🎨 Dark / Light Mode

Saves theme preference

Works across the dashboard

📸 QR Code Generator

Generate QR codes for each short link

Download / share easily

🗑 Link Management

Delete links

Copy to clipboard

View full target URL

🧩 Tech Stack
Frontend

React.js (Create React App)

React Router

Material UI (MUI)

Axios

Recharts

qrcode.react

Backend

Node.js + Express

PostgreSQL (Neon DB)

Deployed on Render

Deployment

Frontend → Vercel

Backend → Render

Database → Neon PostgreSQL

🏗 Project Architecture
LinkPro
│
├── Frontend (React + MUI)  ← You are here
│   ├── Components
│   ├── Pages
│   ├── Hooks
│   ├── utils
│   └── public / src
│
├── Backend (Node + Express)
│   ├── Routes
│   ├── Controllers
│   ├── Database
│   └── server.js
│
└── PostgreSQL (Neon)

⚙️ Environment Variables (Frontend)

Create a .env file:

REACT_APP_API_URL=https://tasklink-project1.onrender.com

🧪 Local Setup
1️⃣ Clone the repo
git clone https://github.com/imvipull9/LinkPro-Frontend
cd LinkPro-Frontend

2️⃣ Install dependencies
npm install

3️⃣ Create .env
REACT_APP_API_URL=http://localhost:5000

4️⃣ Run frontend
npm start

📡 API Endpoints Used by Frontend
✔ Fetch all links

GET

/api/links

✔ Create a short link

POST

/api/links


Body:

{
  "original_url": "https://example.com",
  "short_id": "customCode"
}

✔ Delete a link

DELETE

/api/links/:short_id

✔ Redirect

GET

/:short_id


💡 Why I Built This

To demonstrate full-stack capability in creating scalable systems with real-time analytics, cloud deployments, and clean UI/UX — suitable for production-level URL management.

🙌 Author

Vipul Saini
Full-Stack Developer
📧 Email: sainivipul1827@gmail.com
🌐 Portfolio: https://vipulportfolio-website-99.vercel.app/
