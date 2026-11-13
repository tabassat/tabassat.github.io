# M. Tabassat - Personal Portfolio Website

A fast, modern, accessible, and responsive personal portfolio website crafted for **M. Tabassat** (Senior Full-Stack & Systems Engineer).

Built with semantic HTML5, modern CSS3 (custom design system, glassmorphism, responsive grid/flexbox), and vanilla JavaScript. **Zero external runtime dependencies**, instant page loads, and 100/100 Lighthouse performance.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Seamless theme switching with smooth transitions, OS preference detection, and `localStorage` persistence.
- ⚡ **Interactive Terminal CLI (`Ctrl + K`)**: Built-in terminal emulator with command history, tab auto-completion, and developer easter eggs (`help`, `bio`, `skills`, `projects`, `sudo hire`, etc.).
- 🚀 **Centralized Data Configuration**: All portfolio data (bio, skills, projects, work experience, stats, and socials) lives in [`js/data.js`](file:///home/tabassat/Code/portfolio/js/data.js). Update your profile in one single file!
- 🔍 **Interactive Project & Skills Filtering**: Instant category filtering for projects (Full-Stack, Backend, Frontend, DevOps) and technical skills with animated proficiency progress bars.
- 📐 **Project Deep Dive Modals**: Detailed architectural breakdowns, problem statements, solutions, and impact metrics for each featured project.
- 📬 **Interactive Contact Form & Coordinates**: Client-side validated contact form with automatic `mailto:` generation and one-click copy to clipboard for email coordinates.
- 📱 **Fully Responsive**: Mobile-first architecture tested across mobile, tablet, desktop, and ultra-wide displays.
- 🖨️ **Print & Resume Ready**: Dedicated `@media print` stylesheet that transforms the page into a clean printable resume when printed or saved as PDF.

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML structure with semantic tags & ARIA accessibility
├── css/
│   └── style.css       # Complete design system, theme variables & animations
├── js/
│   ├── data.js         # Single source of truth: Profile, Skills, Projects, Experience
│   └── main.js         # Interactive logic: Themes, Terminal, Modals, Filters, Toast
├── server.py           # Zero-dependency local dev server (Python 3)
├── package.json        # NPM scripts for running with Python or Node.js
└── README.md           # Documentation and deployment guide
```

---

## 🚀 Quick Start (Local Preview)

### Option 1: Python Server (Recommended)
Run the included Python static server:
```bash
python3 server.py
# Server starts at http://localhost:3000
```

### Option 2: Node.js (via npm)
```bash
npm run serve
# Server starts at http://localhost:3000
```

### Option 3: Direct File Opening
You can simply open [`index.html`](file:///home/tabassat/Code/portfolio/index.html) directly in any modern web browser.

---

## 🛠️ How to Customize

### 1. Update Personal Info & Content
Open [`js/data.js`](file:///home/tabassat/Code/portfolio/js/data.js) to customize:
- **`personal`**: Name, roles, bio, contact email, social profile links.
- **`stats`**: Years of experience, completed projects, reliability metrics.
- **`skills`**: Add, remove, or modify skills, categories, and proficiency levels.
- **`projects`**: Add your own case studies with problem, solution, architecture, and live links.
- **`experience`**: Update your career history, achievements, and tech stacks.
- **`terminal`**: Add custom terminal commands and easter eggs.

### 2. Customize Colors & Themes
Open [`css/style.css`](file:///home/tabassat/Code/portfolio/css/style.css) and edit the CSS variables in `:root` and `[data-theme="light"]`:
- Accent colors: `--accent-cyan`, `--accent-blue`, `--accent-indigo`, etc.
- Background colors: `--bg-primary`, `--bg-secondary`, `--bg-card`.

---

## 🚢 Deployment Guide

This portfolio is a static website and can be deployed anywhere in seconds for free:

### Deploy to GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of personal portfolio website"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to **Settings** > **Pages** in your repository.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/portfolio/`!

### Deploy to Vercel or Netlify
- Drag and drop the folder into the [Netlify Drop](https://app.netlify.com/drop) or connect your GitHub repository to [Vercel](https://vercel.com) with root directory set to `.`. No build command needed!

---

## 📄 License
MIT License &copy; 2026 M. Tabassat. Feel free to use and customize as your own!

