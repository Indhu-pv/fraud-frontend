# Fraud Detection Dashboard (Frontend)

A web-based dashboard for monitoring and analyzing fraudulent financial transactions.
This frontend application provides visual analytics, transaction monitoring, and fraud alert tracking.

---

# Tech Stack

Frontend

* React
* Vite
* TypeScript
* Tailwind CSS
* React Router DOM
* Recharts (for charts)
* React Icons

Development Tools

* Node.js
* npm
* Git
* GitHub
* VS Code

---

# Prerequisites

Install these first:

1. Node.js (version 20+ recommended)
2. Git
3. VS Code

Check installation:

node -v
npm -v
git --version

---

# Step 1 — Create Project

Create a React project using Vite:

npm create vite@latest fraud-frontend

Select options:

Framework → React
Variant → TypeScript

Then move into the project:

cd fraud-frontend

Install base dependencies:

npm install

---

# Step 2 — Install Required Packages

Install all packages needed for this project.

Navigation (page routing)

npm install react-router-dom

Charts for fraud analytics

npm install recharts

Icons for dashboard UI

npm install react-icons

Tailwind CSS for styling

npm install -D tailwindcss postcss autoprefixer

Tailwind PostCSS plugin

npm install -D @tailwindcss/postcss

React TypeScript definitions

npm install --save-dev @types/react @types/react-dom

---

# Step 3 — Configure Tailwind CSS

Create Tailwind config file in project root:

tailwind.config.js

Add:

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"
],
theme: {
extend: {}
},
plugins: []
}

Create PostCSS config file:

postcss.config.js

Add:

export default {
plugins: {
"@tailwindcss/postcss": {}
}
}

---

# Step 4 — Configure Global CSS

Open file:

src/index.css

Replace content with:

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
font-family: sans-serif;
background: #f4f6fb;
}

---

# Step 5 — Project Folder Structure

fraud-frontend

public

src

components
layouts
pages

App.tsx
main.tsx
index.css

package.json
vite.config.ts
README.md

---

# Step 6 — Run the Application

Start development server:

npm run dev

Open browser:

http://localhost:5173

You should now see the application running.

---

# Step 7 — Build Production Version

To build the optimized production build:

npm run build

Preview production build:

npm run preview

---

# Step 8 — Initialize Git Repository

Initialize Git:

git init

Add all project files:

git add .

Create first commit:

git commit -m "Initial commit - Fraud Detection Dashboard"

---

# Step 9 — Push Project to GitHub

Create a new repository on GitHub.

Then connect your local project:

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/fraud-detection-dashboard.git

Push code:

git push -u origin main

---

# Features

User login interface
Fraud monitoring dashboard
Transaction history table
Fraud alerts
