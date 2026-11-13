/**
 * M. Tabassat Portfolio - Main Application Script
 * High performance, zero external dependencies, robust and accessible
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingAnimation();
  initMobileNav();
  renderStats();
  renderServices();
  renderSkills();
  initSkillsFilter();
  renderProjects();
  initProjectsFilter();
  renderExperience();
  initProjectModal();
  initTerminal();
  initContactForm();
  initBackToTop();
  initIntersectionObservers();
});

/* ==========================================================================
   1. Theme Management (Dark & Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  applyTheme(initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme} theme`);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio_theme", theme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    if (theme === "light") {
      // Show Moon icon (for switching to dark)
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      themeIcon.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      // Show Sun icon (for switching to light)
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
      themeIcon.setAttribute("aria-label", "Switch to Light Mode");
    }
  }
}

/* ==========================================================================
   2. Typing Animation for Hero Subtitle
   ========================================================================== */
function initTypingAnimation() {
  const typingElement = document.getElementById("typingRole");
  if (!typingElement || !portfolioData.personal.typingRoles) return;

  const roles = portfolioData.personal.typingRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeTick() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of text
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeTick, typingSpeed);
  }

  typeTick();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking any nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   4. Render Stats
   ========================================================================== */
function renderStats() {
  const statsContainer = document.getElementById("statsContainer");
  if (!statsContainer || !portfolioData.stats) return;

  statsContainer.innerHTML = portfolioData.stats
    .map(
      (stat) => `
      <div class="stat-card">
        <div class="stat-value gradient-text">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   5. Render Services / Core Strengths
   ========================================================================== */
function renderServices() {
  const servicesContainer = document.getElementById("servicesContainer");
  if (!servicesContainer || !portfolioData.services) return;

  const iconMap = {
    code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    server: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
  };

  servicesContainer.innerHTML = portfolioData.services
    .map(
      (srv) => `
      <div class="service-card">
        <div class="service-icon">
          ${iconMap[srv.icon] || iconMap.code}
        </div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-description">${srv.description}</p>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   6. Render Skills & Interactive Filter
   ========================================================================== */
function renderSkills(category = "all") {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid || !portfolioData.skills) return;

  const filteredSkills =
    category === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === category);

  skillsGrid.innerHTML = filteredSkills
    .map(
      (skill) => `
      <div class="skill-card" data-category="${skill.category}">
        <div class="skill-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="skill-info">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percentage">${skill.level}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-bar" style="width: ${skill.level}%"></div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function initSkillsFilter() {
  const filterBtns = document.querySelectorAll(".skills-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderSkills(category);
    });
  });
}

/* ==========================================================================
   7. Render Projects & Filtering
   ========================================================================== */
function renderProjects(category = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid || !portfolioData.projects) return;

  const filteredProjects =
    category === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) => p.category === category || (category === "featured" && p.featured)
        );

  projectsGrid.innerHTML = filteredProjects
    .map(
      (p) => `
      <div class="project-card" data-id="${p.id}">
        <div class="project-banner" style="background: ${p.gradient}">
          <div class="project-banner-pattern"></div>
          <div class="project-banner-content">
            <div class="project-icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="project-body">
          <div class="project-header-row">
            <h3 class="project-title">${p.title}</h3>
            <span class="project-badge">${p.category}</span>
          </div>
          <div class="project-subtitle">${p.subtitle}</div>
          <p class="project-desc">${p.shortDescription}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="project-footer">
            <button class="btn btn-secondary btn-sm open-project-modal-btn" data-id="${p.id}">
              Deep Dive
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <div class="project-actions">
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-link" aria-label="GitHub Repository">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-link" aria-label="Live Demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  attachModalTriggers();
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll(".projects-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   8. Render Experience Timeline
   ========================================================================== */
function renderExperience() {
  const timelineContainer = document.getElementById("timelineContainer");
  if (!timelineContainer || !portfolioData.experience) return;

  timelineContainer.innerHTML = portfolioData.experience
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-company">${item.company} • ${item.location}</div>
          <p class="timeline-desc">${item.description}</p>
          <ul class="timeline-achievements">
            ${item.achievements.map((a) => `<li>${a}</li>`).join("")}
          </ul>
          <div class="timeline-tags">
            ${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   9. Project Deep Dive Modal Logic
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("closeProjectModalBtn");
  if (!modal || !closeBtn) return;

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function attachModalTriggers() {
  document.querySelectorAll(".open-project-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-id");
      openProjectModal(projectId);
    });
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("projectModalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-subtitle">${project.subtitle}</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        The Problem & Challenge
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.problem}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Architectural Solution
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 12px;">${project.solution}</p>
      <ul class="modal-arch-list">
        ${project.architecture.map((a) => `<li>${a}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        Key Metrics & Business Impact
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.impact}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Technologies Used</div>
      <div class="project-tags">
        ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>

    <div class="modal-actions">
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Live Demonstration
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        Source Code
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   10. Interactive Terminal Drawer & CLI Engine
   ========================================================================== */
function initTerminal() {
  const terminalModal = document.getElementById("terminalModal");
  const openTerminalBtns = document.querySelectorAll(".open-terminal-btn");
  const closeTerminalBtn = document.getElementById("closeTerminalBtn");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");
  if (!terminalModal || !terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  function openTerminal() {
    terminalModal.classList.add("open");
    terminalInput.focus();
    document.body.style.overflow = "hidden";
  }

  function closeTerminal() {
    terminalModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  openTerminalBtns.forEach((btn) => btn.addEventListener("click", openTerminal));
  if (closeTerminalBtn) closeTerminalBtn.addEventListener("click", closeTerminal);

  terminalModal.addEventListener("click", (e) => {
    if (e.target === terminalModal) closeTerminal();
  });

  // Hotkey support: Ctrl + K or Cmd + K opens/closes terminal
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (terminalModal.classList.contains("open")) {
        closeTerminal();
      } else {
        openTerminal();
      }
    }
    if (e.key === "Escape" && terminalModal.classList.contains("open")) {
      closeTerminal();
    }
  });

  // Handle Command Submission
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const rawInput = terminalInput.value.trim();
      terminalInput.value = "";
      if (!rawInput) return;

      commandHistory.push(rawInput);
      historyIndex = commandHistory.length;

      executeCommand(rawInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      autoCompleteCommand(terminalInput.value.trim());
    }
  });

  function executeCommand(cmdStr) {
    appendTerminalLine(`<span class="terminal-prompt">tabassat@portfolio:~$</span> ${escapeHTML(cmdStr)}`);

    const args = cmdStr.toLowerCase().split(" ").filter(Boolean);
    const cmd = args[0];

    if (cmd === "clear" || cmd === "cls") {
      terminalOutput.innerHTML = "";
      return;
    }

    if (cmd === "exit" || cmd === "gui" || cmd === "quit") {
      closeTerminal();
      return;
    }

    if (cmd === "theme") {
      const targetTheme = args[1];
      if (targetTheme === "dark" || targetTheme === "light") {
        applyTheme(targetTheme);
        appendTerminalLine(`Theme successfully changed to '${targetTheme}'.`);
      } else {
        appendTerminalLine(`Usage: theme [dark|light]`);
      }
      return;
    }

    const commandDict = portfolioData.terminal.commands;
    if (commandDict[cmdStr.toLowerCase()]) {
      appendTerminalLine(escapeHTML(commandDict[cmdStr.toLowerCase()]));
    } else if (commandDict[cmd]) {
      appendTerminalLine(escapeHTML(commandDict[cmd]));
    } else {
      appendTerminalLine(`Command not found: '${escapeHTML(cmdStr)}'. Type 'help' for available commands.`);
    }

    const screen = document.getElementById("terminalScreen");
    if (screen) screen.scrollTop = screen.scrollHeight;
  }

  function appendTerminalLine(html) {
    const div = document.createElement("div");
    div.className = "terminal-line";
    div.innerHTML = html;
    terminalOutput.appendChild(div);
  }

  function autoCompleteCommand(current) {
    if (!current) return;
    const available = ["help", "bio", "skills", "projects", "experience", "contact", "stats", "theme", "clear", "sudo hire", "exit"];
    const match = available.find((c) => c.startsWith(current.toLowerCase()));
    if (match) {
      terminalInput.value = match;
    }
  }
}

/* ==========================================================================
   11. Contact Form Handling & Copy Coordinates
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = portfolioData.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard! 📋");
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.", "error");
        return;
      }

      // Prepare mailto link
      const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${subject || "New Opportunity"} (${name})`
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

      // Open email client
      window.location.href = mailtoUrl;

      showToast("Launching your email client... 🚀");
      form.reset();
    });
  }
}

/* ==========================================================================
   12. Toast Notification System
   ========================================================================== */
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 14 14"></polyline>
    </svg>
    <span>${escapeHTML(message)}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   13. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   14. Intersection Observer for Active Nav Highlighting & Progress Bars
   ========================================================================== */
function initIntersectionObservers() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${currentId}`
            );
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* --- Helpers --- */
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

