/**
 * Portfolio Data Configuration
 * Centralized data source for M. Tabassat's Portfolio Website.
 * Edit this file to update your bio, skills, projects, experience, and contact details!
 */

const portfolioData = {
  personal: {
    name: "M. Tabassat",
    shortName: "Tabassat",
    initials: "MT",
    title: "Senior Full-Stack & Systems Engineer",
    typingRoles: [
      "Senior Full-Stack Engineer",
      "Cloud & Distributed Systems Architect",
      "API & High-Throughput Specialist",
      "Open-Source Contributor & Builder"
    ],
    status: {
      available: true,
      text: "Available for high-impact roles & consulting"
    },
    bio: "Passionate software engineer with deep expertise in architecting resilient web applications, distributed backend services, and polished digital experiences. Obsessed with clean abstractions, sub-second latency, and software that scales effortlessly.",
    location: "Global / Remote",
    email: "md.tabassat@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resumeUrl: "#contact"
  },

  stats: [
    { value: "6+", label: "Years Experience", suffix: "" },
    { value: "35+", label: "Projects Delivered", suffix: "" },
    { value: "99.99%", label: "Target Uptime & Reliability", suffix: "" },
    { value: "500k+", label: "Users Impacted", suffix: "" }
  ],

  services: [
    {
      id: "fullstack",
      icon: "code",
      title: "Full-Stack Web Development",
      description: "End-to-end web applications crafted with modern architectures, reactive state management, and accessible, responsive design systems."
    },
    {
      id: "backend",
      icon: "server",
      title: "Backend & Distributed Systems",
      description: "Scalable REST & GraphQL microservices, message queues, relational and NoSQL databases designed for high concurrency and zero downtime."
    },
    {
      id: "cloud",
      icon: "cloud",
      title: "Cloud & DevOps Automation",
      description: "Containerized deployments via Docker and Kubernetes, automated CI/CD pipelines, observability with Prometheus/Grafana, and IaC."
    },
    {
      id: "performance",
      icon: "zap",
      title: "Performance & Security Audits",
      description: "Database query optimization, web vitals enhancement, caching strategies (Redis/CDN), and robust OWASP security hardening."
    }
  ],

  skills: [
    // Frontend
    { name: "TypeScript", category: "frontend", level: 95, icon: "typescript" },
    { name: "React.js / Next.js", category: "frontend", level: 92, icon: "react" },
    { name: "Vue.js / Nuxt", category: "frontend", level: 85, icon: "vue" },
    { name: "Tailwind CSS & Modern CSS", category: "frontend", level: 95, icon: "css" },
    { name: "HTML5 / Web Standards & A11y", category: "frontend", level: 95, icon: "html" },
    { name: "State Management (Redux/Zustand)", category: "frontend", level: 90, icon: "redux" },

    // Backend
    { name: "Node.js / Express / NestJS", category: "backend", level: 92, icon: "nodejs" },
    { name: "Python / FastAPI / Django", category: "backend", level: 90, icon: "python" },
    { name: "Go (Golang)", category: "backend", level: 80, icon: "go" },
    { name: "RESTful & GraphQL APIs", category: "backend", level: 95, icon: "api" },
    { name: "PostgreSQL & Prisma/TypeORM", category: "backend", level: 90, icon: "postgres" },
    { name: "Redis & Caching", category: "backend", level: 88, icon: "redis" },
    { name: "MongoDB & Vector DBs", category: "backend", level: 85, icon: "mongodb" },

    // Cloud & DevOps
    { name: "Docker & Containerization", category: "devops", level: 90, icon: "docker" },
    { name: "Kubernetes & Orchestration", category: "devops", level: 80, icon: "kubernetes" },
    { name: "AWS / Google Cloud (GCP)", category: "devops", level: 85, icon: "cloud" },
    { name: "CI/CD (GitHub Actions / GitLab)", category: "devops", level: 90, icon: "git" },
    { name: "Linux & Bash Scripting", category: "devops", level: 92, icon: "terminal" },

    // Tools & Architecture
    { name: "Git & Version Control", category: "tools", level: 95, icon: "git" },
    { name: "System Design & Microservices", category: "tools", level: 90, icon: "architecture" },
    { name: "Testing (Jest, Playwright, PyTest)", category: "tools", level: 88, icon: "test" },
    { name: "Security & OAuth2/JWT", category: "tools", level: 90, icon: "security" }
  ],

  projects: [
    {
      id: "project-1",
      title: "OmniFlow Cloud",
      subtitle: "High-Throughput Distributed Event Orchestrator",
      category: "backend",
      featured: true,
      tags: ["Go", "Node.js", "Redis Streams", "Docker", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)",
      shortDescription: "A distributed workflow automation engine capable of routing 50,000+ events per second with sub-10ms delivery guarantees and fault-tolerant retry policies.",
      problem: "Legacy batch pipeline architectures struggled with bursting traffic during peak enterprise sync windows, leading to message lag and unrecoverable pipeline deadlocks.",
      solution: "Engineered an asynchronous distributed state-machine backed by Redis Streams for message buffering, distributed workers in Go, and real-time WebSocket monitoring.",
      impact: "Reduced processing latency by 78%, lowered compute infrastructure overhead by 40%, and achieved 99.995% delivery success rate across 10M+ daily events.",
      architecture: [
        "API Gateway & Auth with JWT rate-limiting",
        "Ingestion layer powered by Redis Streams and Kafka adapters",
        "Worker pool dynamically scaled on queue depth",
        "Persistent audit log stored in partition-optimized PostgreSQL"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "project-2",
      title: "PulseMetrics AI",
      subtitle: "Real-Time Observability & Predictive Telemetry",
      category: "fullstack",
      featured: true,
      tags: ["TypeScript", "React", "Python", "FastAPI", "TimescaleDB"],
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)",
      shortDescription: "An all-in-one developer telemetry platform providing live service health dashboards, anomaly detection alerts, and predictive server load modeling.",
      problem: "Engineering teams were juggling four disconnected logging and metrics dashboards, losing valuable minutes diagnosing cascading infrastructure incidents.",
      solution: "Built a consolidated full-stack platform with interactive WebGL charting, real-time metric streams, and an anomaly scoring service trained on baseline traffic.",
      impact: "Accelerated Mean Time to Resolution (MTTR) by 62% for early adopters, aggregating over 120 million telemetry points daily.",
      architecture: [
        "Ultra-fast time-series ingestion with FastAPI and async background workers",
        "Interactive React canvas with smooth 60fps telemetry graph rendering",
        "Automated threshold and anomaly detection notifications via Webhooks/Slack"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "project-3",
      title: "Nexus Design System",
      subtitle: "Enterprise Accessible Component Library & Tokens",
      category: "frontend",
      featured: true,
      tags: ["TypeScript", "React", "Tailwind CSS", "Storybook", "A11y"],
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0f766e 100%)",
      shortDescription: "A WCAG 2.1 AAA compliant design system featuring 45+ customizable React components, atomic CSS design tokens, and comprehensive keyboard navigation.",
      problem: "Inconsistent cross-product UI patterns caused visual debt, accessibility violations, and slowed down frontend feature development cycles.",
      solution: "Standardized UI tokens, automated visual regression tests, and authored documentation with interactive live code playgrounds.",
      impact: "Adopted by 8 engineering squads, cutting new screen development time in half and achieving 100% automated accessibility compliance.",
      architecture: [
        "Headless accessibility primitives with full ARIA support",
        "Multi-theme support (Dark, Light, High Contrast, Custom Brands)",
        "Zero-runtime overhead styling pipeline with automated bundle tree-shaking"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "project-4",
      title: "KubeGuard CLI",
      subtitle: "Zero-Trust Security & Policy Auditing for Kubernetes",
      category: "devops",
      featured: false,
      tags: ["Go", "Kubernetes", "Docker", "Security", "YAML"],
      gradient: "linear-gradient(135deg, #10b981 0%, #064e3b 100%)",
      shortDescription: "A developer-friendly CLI tool and CI gatekeeper that scans Kubernetes manifests and Helm charts against CIS benchmarks and misconfigurations.",
      problem: "Security regressions and privilege escalations slipped into production clusters due to manual manifest reviews and opaque RBAC rules.",
      solution: "Created a single-binary scanner that validates OPA policies locally before git commit, outputting actionable human and JSON reports.",
      impact: "Over 4,500 GitHub downloads, preventing hundreds of insecure container capabilities and privilege escalations in CI pipelines.",
      architecture: [
        "Offline static analysis against Open Policy Agent (OPA) rules",
        "SARIF output format for GitHub Security Advisory integration",
        "Fast parallel evaluation parsing hundreds of YAML manifests in milliseconds"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "project-5",
      title: "DataVault Sync",
      subtitle: "End-to-End Encrypted Cloud Storage Protocol",
      category: "backend",
      featured: false,
      tags: ["Rust / Python", "AES-256-GCM", "S3", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #78350f 100%)",
      shortDescription: "Client-side encrypted object synchronization daemon with chunked deduplication, zero-knowledge keys, and S3-compatible backend storage.",
      problem: "Sensitive corporate data required cloud backups without exposing plaintext artifacts to third-party storage providers.",
      solution: "Designed client-side envelope encryption with deterministic chunking, content-addressed storage, and authenticated key derivation.",
      impact: "Eliminated cloud provider data exposure risk while maintaining seamless file sync and resume capabilities for multi-gigabyte payloads.",
      architecture: [
        "Client-side PBKDF2 + AES-GCM-256 encryption pipeline",
        "Rabin fingerprinting for content-defined chunk deduplication",
        "Streaming multi-part upload engine with automatic retry mechanisms"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "project-6",
      title: "HyperShop Commerce",
      subtitle: "Ultra-Fast Headless E-Commerce Platform",
      category: "fullstack",
      featured: false,
      tags: ["Next.js", "TypeScript", "Stripe", "GraphQL", "Tailwind"],
      gradient: "linear-gradient(135deg, #ec4899 0%, #831843 100%)",
      shortDescription: "A headless digital storefront featuring instant search filtering, real-time inventory management, dynamic currency conversion, and 100 Lighthouse score.",
      problem: "Monolithic e-commerce storefronts suffered from 4+ second page loads and cart abandonment rates on mobile devices.",
      solution: "Architected static edge-cached product pages, incremental static regeneration, and optimistic UI checkout workflows.",
      impact: "Boosted checkout conversion rates by 28% and maintained sub-400ms page transitions across all international geographies.",
      architecture: [
        "Edge-rendered product catalog with automatic cache invalidation",
        "Serverless cart mutation engine integrated with Stripe Webhooks",
        "Optimistic cart state updates for immediate user feedback"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "Lead Full-Stack & Systems Engineer",
      company: "CloudScale Technologies",
      location: "Remote",
      description: "Leading core architecture initiatives for distributed microservices and customer-facing web platforms.",
      achievements: [
        "Spearheaded redesign of backend data pipeline processing over 50M events daily, reducing cloud spend by 35%.",
        "Architected modern component design system adopted across 5 product teams, standardizing code quality.",
        "Mentored junior and mid-level engineers through technical design reviews and pair programming sessions."
      ],
      tags: ["TypeScript", "Go", "Docker", "PostgreSQL", "Next.js", "AWS"]
    },
    {
      period: "2021 - 2023",
      role: "Senior Software Engineer",
      company: "Apex Digital Solutions",
      location: "Hybrid",
      description: "Engineered scalable REST APIs, reactive client dashboards, and automated deployment pipelines.",
      achievements: [
        "Engineered real-time data streaming dashboard utilizing WebSockets and Redis, lowering refresh latency to <50ms.",
        "Migrated legacy monolith to containerized Docker microservices, increasing deployment frequency from monthly to daily.",
        "Led automated testing initiative, increasing test coverage from 42% to 89% and cutting production bugs by half."
      ],
      tags: ["React", "Node.js", "Python", "Redis", "Docker", "CI/CD"]
    },
    {
      period: "2019 - 2021",
      role: "Full-Stack Developer",
      company: "Vanguard Software Labs",
      location: "On-site",
      description: "Developed responsive web applications, secure user authentication systems, and database schemas.",
      achievements: [
        "Built and maintained 12+ client web applications with responsive mobile-first layouts.",
        "Integrated OAuth2 authentication flows and Stripe payment processing pipelines.",
        "Optimized complex SQL queries and index strategies, improving page load speeds by 45%."
      ],
      tags: ["JavaScript", "React", "Python / Django", "PostgreSQL", "REST APIs"]
    }
  ],

  education: [
    {
      degree: "B.S. in Computer Science & Engineering",
      institution: "State University of Science & Technology",
      period: "2015 - 2019",
      details: "Focus on Distributed Systems, Algorithms, Database Architectures, and Software Engineering Principles."
    }
  ],

  terminal: {
    welcome: [
      "╔══════════════════════════════════════════════════════════════╗",
      "║        Welcome to M. Tabassat's Interactive Terminal         ║",
      "║  Type 'help' to see available commands or 'gui' to close.     ║",
      "╚══════════════════════════════════════════════════════════════╝",
      ""
    ],
    commands: {
      help: `Available commands:
  • bio          - Display background and philosophy
  • skills       - List primary engineering technical stack
  • projects     - Showcase featured software projects
  • experience   - View professional engineering career timeline
  • contact      - Get email, socials, and contact coordinates
  • stats        - View key metrics and achievements
  • theme [t]    - Change theme: 'theme dark' or 'theme light'
  • clear        - Clear the terminal screen
  • sudo hire    - Unlock the secret recruiter easter egg
  • exit / gui   - Close the interactive terminal drawer`,
      
      bio: `M. Tabassat - Senior Full-Stack & Systems Engineer
------------------------------------------------------
Driven by a passion for clean architecture, high throughput, and seamless user experiences.
Specializing in TypeScript, Node.js, Python, Go, Cloud/DevOps, and modern web architectures.
Philosophy: "Make it work, make it clean, make it fast, make it resilient."`,

      skills: `CORE TECHNICAL ARSENAL:
  [Frontend]  TypeScript, React, Next.js, Vue, Tailwind CSS, Web Standards & A11y
  [Backend]   Node.js, Python (FastAPI/Django), Go, RESTful & GraphQL, Redis, Postgres
  [DevOps]    Docker, Kubernetes, AWS, GCP, CI/CD Actions, Linux/Bash, Terraform
  [Practices] System Design, Clean Architecture, TDD/Unit Testing, Zero-Trust Security`,

      projects: `FEATURED PROJECTS:
  1. OmniFlow Cloud   - High-throughput distributed event orchestrator (Go/Redis)
  2. PulseMetrics AI  - Real-time observability & telemetry suite (React/Python)
  3. Nexus Design     - WCAG AAA enterprise component library (React/Tailwind)
  4. KubeGuard CLI    - Kubernetes zero-trust manifest auditor (Go)
  5. DataVault Sync   - End-to-end encrypted object synchronization daemon
  Type 'open <project-id>' or click cards in the GUI to see architectural deep-dives.`,

      contact: `CONNECT WITH M. TABASSAT:
  • Email:    md.tabassat@gmail.com
  • GitHub:   https://github.com
  • LinkedIn: https://linkedin.com
  • Status:   Available for impactful roles and technical advisory`,

      stats: `METRICS AT A GLANCE:
  • 6+ Years of Production Engineering
  • 35+ End-to-End Projects Delivered
  • 99.99% Reliability Focus
  • 500k+ End Users Served`,

      "sudo hire": `ACCESS GRANTED: Priority Candidate Pipeline Activated! 🚀
You've unlocked the executive hiring fast-track.
M. Tabassat brings deep architectural insight, dependable execution, and high energy.
Direct Email: md.tabassat@gmail.com
Subject: "Let's work together - Found you via terminal!"`
    }
  }
};

// Export for browser window and Node.js environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}

