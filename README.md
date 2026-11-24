# Gowtham K — Premium Full Stack Developer Portfolio

A production-ready, premium developer portfolio built with React.js + Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Premium Design** — Light/dark mode, purple aesthetics, modern minimalism
- ⚡ **Framer Motion Animations** — Smooth scroll reveals, floating particles, staggered entrances
- 📱 **Fully Responsive** — Desktop sidebar + mobile-friendly header
- 🔒 **Contact Form** — EmailJS integration with full validation
- 🗂️ **Project Details** — Rich project pages with architecture, workflow, features
- 🌙 **Theme Toggle** — Persistent light/dark mode
- 📄 **Resume Download** — Direct PDF download
- 🔍 **SEO Optimized** — React Helmet Async metadata
- 🚀 **Vercel Ready** — Zero-config deployment

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── AnimatedSection.jsx
│   └── ScrollProgress.jsx
├── data/           # Portfolio content (single source of truth)
│   ├── personalInfo.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   └── achievements.js
├── hooks/          # Custom React hooks
│   ├── useTheme.jsx
│   └── useScrollHooks.js
├── pages/          # Route pages
│   ├── Home.jsx
│   ├── ProjectDetails.jsx
│   └── NotFound.jsx
└── utils/
    └── skillIcons.js
public/
├── resume.pdf      # Place your resume here
└── favicon.svg
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
cd gowtham-portfolio
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview    # Preview the production build locally
```

## ⚙️ Configuration

### 1. Resume
Place your resume PDF at `public/resume.pdf`.

### 2. EmailJS (Contact Form)
1. Create account at [emailjs.com](https://emailjs.com)
2. Create a Service and Template
3. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
4. Fill in your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Project GitHub/Live URLs
Update `src/data/projects.js` — set `githubUrl` and `liveUrl` for each project.

### 4. Personal Information
All personal data lives in `src/data/personalInfo.js`. Update as needed.

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables from `.env`
4. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

## 📋 Remaining Assets

The following need to be provided by you:

| Asset | Location | Notes |
|-------|----------|-------|
| Resume PDF | `public/resume.pdf` | Your actual resume |
| Project GitHub URLs | `src/data/projects.js` | Real GitHub repo links |
| Project Live URLs | `src/data/projects.js` | Real deployment URLs |
| EmailJS credentials | `.env` | For contact form |
| Certificate files | (optional) | Add to `public/certificates/` |

## 🎨 Customization

- **Colors**: `tailwind.config.js` → `theme.extend.colors`
- **Content**: All `src/data/*.js` files
- **Sections**: Add/remove in `src/pages/Home.jsx`
- **Animations**: `src/components/AnimatedSection.jsx`

---

**GOWTHAM K | BUILD. INNOVATE. CREATE IMPACT.**
