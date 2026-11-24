# GOWTHAM K — Creative Tech Editorial Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-gowtham--portfolio--peach.vercel.app-7057F5?style=for-the-badge&logo=vercel&logoColor=white)](https://gowtham-portfolio-peach.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Portfolio-171717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gowthamk2503/Portfolio)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **"BUILD THOUGHTFULLY. DESIGN BEAUTIFULLY. ENGINEER IMPACT."**

A bespoke, production-ready personal developer portfolio built for **Gowtham K** (Full Stack Developer & Software Engineer). Designed with a **Creative Tech Editorial** aesthetic combining award-winning design principles, four distinct Google Font families, cinematic imagery, interactive animations, and dedicated architectural case study pages.

---

## 🌐 Live Website

- **Production Deployment:** [https://gowtham-portfolio-peach.vercel.app/](https://gowtham-portfolio-peach.vercel.app/)
- **Source Code:** [https://github.com/gowthamk2503/Portfolio](https://github.com/gowthamk2503/Portfolio)

---

## 🎨 Visual Identity & Design System

- **Design Aesthetic:** Creative Tech Editorial — Digital Developer Experience
- **Color Palette:**
  - **Warm Ivory (`#F7F6F2`)** — Primary editorial canvas
  - **Deep Charcoal (`#171717`)** — High-contrast text & dark showcase sections
  - **Electric Violet (`#7057F5`)** — Primary interactive accent
  - **Soft Lavender (`#B5A0FF`)** — Subtle secondary accents & borders
  - **Soft Lime (`#D9F86A`)** — Distinctive high-impact highlights
- **Typography Architecture:**
  - **Space Grotesk** — Display headings, hero titles, large statistical counters
  - **Instrument Serif (Italic)** — Editorial accents, high-fashion highlights
  - **Manrope** — Clean, legible body content & UI text
  - **JetBrains Mono** — Code blocks, tech chips, coordinates, metadata

---

## ✨ Features & Sections

| Section | Description |
| :--- | :--- |
| **Floating Capsule Navigation** | Glassmorphic floating pill with sliding active section indicator (`layoutId`), theme toggle (dark/light), direct resume trigger, and full-screen mobile menu. |
| **Editorial Hero** | Letter-by-letter animated title, live typing developer terminal (`developer.ts`), availability radar dot, and animated stats counters. |
| **About Me** | Background narrative, B.Tech IT at Sri Eshwar College of Engineering (2023–2027), CGPA 8.22/10, and engineering principles. |
| **Technical Arsenal** | Bento grid with 7 interactive category tabs (Frontend, Backend, Databases, Languages, Tools, Data & Cloud) spanning 32 technologies. |
| **Featured Projects** | Asymmetric showcase: massive flagship presentation for **TrackZone** with simulated satellite geofence & biometric radar, followed by dual bento cards for **Rentaro** and **CivicTrack**. |
| **Case Study Deep-Dives** | Dedicated pages (`/project/:id`) featuring Problem Statements, Solutions, System Architecture, Workflows, and direct Live Demo / GitHub buttons. |
| **Work Experience** | Interactive vertical timeline with progressive line draw tracking MERN Stack and NextGen Data Engineering internships. |
| **Merit & Accolades** | Highlighting **NPTEL Elite HCI** (99% score, Top 2% nationwide among 23,139 candidates), Project Expo 2nd prize, National Debate 1st prize, and 5 certifications. |
| **High-Contrast Contact** | Deep charcoal contrast section (`#171717`) with *"HAVE AN IDEA? LET'S BUILD IT."*, direct coordinates, and functional EmailJS form with real-time validation. |
| **Footer** | Monogram branding, quick navigation links, back-to-top button, and official brand tagline. |

---

## 🚀 Projects Showcase

### 1. [TrackZone — Geofencing & Biometric Attendance System](https://trackzone-two.vercel.app/login)
- **Live Demo:** [https://trackzone-two.vercel.app/login](https://trackzone-two.vercel.app/login)
- **GitHub:** [https://github.com/gowthamk2503/Trackzone](https://github.com/gowthamk2503/Trackzone)
- **Stack:** React.js, Node.js, Express.js, MongoDB, JWT, WebAuthn, Haversine Algorithm
- **Features:** GPS-based location boundary verification, WebAuthn biometric security, Role-Based Access Control (RBAC), real-time attendance analytics.

### 2. [Rentaro — Car Rental Management System](https://rentaromain.vercel.app/)
- **Live Demo:** [https://rentaromain.vercel.app/](https://rentaromain.vercel.app/)
- **GitHub:** [https://github.com/gowthamk2503/Rentaro](https://github.com/gowthamk2503/Rentaro)
- **Stack:** React.js, Node.js, Express.js, MongoDB, REST APIs, Google OAuth 2.0
- **Features:** Real-time vehicle fleet availability, end-to-end car booking workflow, customer management, admin fleet dashboard.

### 3. [CivicTrack — Road Maintenance & Citizen Feedback System](https://github.com/gowthamk2503/CivicTrack)
- **GitHub:** [https://github.com/gowthamk2503/CivicTrack](https://github.com/gowthamk2503/CivicTrack)
- **Stack:** Python, Flask, HTML, CSS, JavaScript, Bootstrap, MongoDB, SQLite
- **Features:** Citizen photo uploads, geolocation tagging, admin priority resolution dashboard, multi-database architecture.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core:** React 18, Vite 8, JavaScript (ESNext)
- **Styling:** Tailwind CSS (Custom extended editorial theme), PostCSS, Autoprefixer
- **Motion & Animations:** Framer Motion (Scroll progress, staggered reveals, spring transitions)
- **Icons:** Lucide React + Custom SVG Brand Icons
- **Routing:** React Router v6 (Client-side routing with SPA rewrite rules)
- **SEO & Head:** React Helmet Async
- **Contact Service:** @emailjs/browser
- **Deployment & Hosting:** Vercel

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gowthamk2503/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file from the example template:
   ```bash
   cp .env.example .env
   ```
   Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📁 Repository Structure

```
Portfolio/
├── public/
│   ├── favicon.svg             # Custom geometric GK monogram logo
│   └── resume.pdf              # Target PDF for resume download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating capsule nav with animated active pill
│   │   ├── Hero.jsx            # Editorial hero with terminal typing & counter stats
│   │   ├── About.jsx           # Background narrative & bento info cards
│   │   ├── Skills.jsx          # Category tabs & bento skill tiles
│   │   ├── Projects.jsx        # Asymmetric flagship case-study showcase
│   │   ├── Experience.jsx      # Progressive draw-line vertical timeline
│   │   ├── Achievements.jsx    # NPTEL Elite HCI & competition awards
│   │   ├── Contact.jsx         # Deep charcoal contact form (EmailJS)
│   │   ├── Footer.jsx          # Editorial footer with brand tagline
│   │   ├── AnimatedSection.jsx # Reusable Framer Motion animation primitives
│   │   └── ScrollProgress.jsx  # Top linear gradient scroll depth bar
│   ├── data/
│   │   ├── personalInfo.js     # Resume data, contact, statistics
│   │   ├── skills.js           # 32 categorized technical skills
│   │   ├── projects.js         # Verified URLs, workflows, architecture specs
│   │   ├── experience.js       # Internship timelines and bullet points
│   │   └── achievements.js     # Honors, test scores, certifications
│   ├── hooks/
│   │   ├── useTheme.jsx        # Persistent light/dark mode context
│   │   └── useScrollHooks.js   # Scroll depth, active section, counter hooks
│   ├── pages/
│   │   ├── Home.jsx            # Single-page layout
│   │   ├── ProjectDetails.jsx  # Full architectural case study page
│   │   └── NotFound.jsx        # Custom 404 error page
│   └── utils/
│       ├── skillIcons.js       # Color & emoji mapping helper
│       └── socialIcons.jsx     # Custom SVG brand icons (GitHub, LinkedIn)
├── tailwind.config.js          # Warm ivory, electric violet, soft lime palette
├── vite.config.js              # Vite build & chunk configuration
├── vercel.json                 # SPA rewrite rules for production
├── ASSET_MANIFEST.md           # Visual research & Unsplash image attribution
└── README.md                   # Project documentation
```

---

## 👤 Author

**Gowtham K**  
- **Portfolio:** [https://gowtham-portfolio-peach.vercel.app/](https://gowtham-portfolio-peach.vercel.app/)  
- **LinkedIn:** [linkedin.com/in/gowtham-k-0577a131a](https://linkedin.com/in/gowtham-k-0577a131a)  
- **GitHub:** [github.com/gowthamk2503](https://github.com/gowthamk2503)  
- **Email:** [gowtham.k2023it@sece.ac.in](mailto:gowtham.k2023it@sece.ac.in)  
- **College:** Sri Eshwar College of Engineering (B.Tech IT, 2023–2027)

---

⭐ *If you find this portfolio inspiring, feel free to star the repository!*
