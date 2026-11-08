/* FILE: js/main.js
    Shared behaviour for every DevPort page.
    Loaded just before </body> on all HTML files.
 */

"use strict";

// ----- data (arrays of objects) — EDIT THESE WITH YOUR OWN DETAILS -----
// skills are grouped by category (no percentages)
const skills = [
  { category: "Frontend", icon: "fa-solid fa-code", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Backend", icon: "fa-solid fa-server", items: ["Python", "Node.js"] },
  { category: "Database", icon: "fa-solid fa-database", items: ["SQL"] },
  { category: "Networking", icon: "fa-solid fa-network-wired", items: ["Network Configuration", "Routing", "Switching"] },
  { category: "Tools", icon: "fa-solid fa-screwdriver-wrench", items: ["Git", "GitHub"] },
];

const softSkills = [];

// repo / live are left empty until you have links; the buttons only show when a link exists
const projects = [
  {
    id: 1,
    title: "Event Hub",
    category: "web",
    icon: "fa-calendar-days",
    thumb: "t1",
    desc: "A web platform for discovering, organizing and managing events, with listings, details and registration in one place.",
    tech: [],
    repo: "",
    live: "",
  },
  {
    id: 2,
    title: "Gym & Campus Fitness Membership Tracker",
    category: "desktop",
    icon: "fa-dumbbell",
    thumb: "t2",
    desc: "A desktop application designed to manage gym members, membership records, payments and membership status.",
    tech: ["Python", "Tkinter", "SQLite"],
    repo: "",
    live: "",
  },
  {
    id: 3,
    title: "Car Rental System",
    category: "web",
    icon: "fa-car",
    thumb: "t3",
    desc: "A web-based system that simplifies vehicle reservations, customer management, booking and payment records.",
    tech: [],
    repo: "",
    live: "",
  },
];

const education = [
  { period: "Final year", title: "Diploma in Computer System and Network", place: "Jigme Namgyel Engineering College (JNEC), Bhutan", desc: "Studying how computer systems and networks work, alongside practical web and software projects." },
  { period: "2022 - 2024", title: "Higher Secondary Education", place: "Kidheykhar Higher Secondary School", desc: "" },
];

const certifications = [
  {
    date: "Jul 27, 2026",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy, via JNEC (Royal University of Bhutan)",
    file: "certificates/ccna-switching-routing-wireless.pdf",
  },
  {
    date: "Jul 27, 2026",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy, via JNEC (Royal University of Bhutan)",
    file: "certificates/ccna-intro-to-networks.pdf",
  },
  {
    date: "Sep 24, 2026",
    title: "Becoming a Linux Server Admin",
    issuer: "Packt, via Coursera",
    url: "https://coursera.org/verify/SOXZ82NQQN8T",
  },
  {
    date: "Sep 17, 2026",
    title: "Master Full-Stack Web Development with Laravel & PHP",
    issuer: "Board Infinity, via Coursera",
    url: "https://coursera.org/verify/1FPBEJHYVTFM",
  },
  {
    date: "Sep 17, 2026",
    title: "Python Tkinter: Design, Build & Integrate GUIs",
    issuer: "EDUCBA, via Coursera",
    url: "https://coursera.org/verify/YA5NUKTARQIT",
  },
];

const typingWords = ["Computer System & Network Student"];

// ----- custom functions (parameters + return) -----
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function skillCardHtml(s) {
  const tags = s.items.map(function (t) { return `<span>${escapeHtml(t)}</span>`; }).join("");
  return `
  <div class="col-md-6">
    <div class="site-card h-100">
      <h3 class="h5 skill-title"><i class="${escapeHtml(s.icon)}"></i> ${escapeHtml(s.category)}</h3>
      <div class="tags mb-0">${tags}</div>
    </div>
  </div>`;
}

function projectCardHtml(p) {
  const tags = p.tech.length
    ? `<div class="tags">${p.tech.map(function (t) { return `<span>${escapeHtml(t)}</span>`; }).join("")}</div>`
    : "";
  const links = [];
  if (p.repo) links.push(`<a href="${escapeHtml(p.repo)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>`);
  if (p.live) links.push(`<a href="${escapeHtml(p.live)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`);
  const linkBlock = links.length ? `<div class="card-links">${links.join("")}</div>` : "";
  return `
  <div class="col-md-4">
    <article class="site-card project-card h-100" data-cat="${escapeHtml(p.category)}">
      <div class="thumb ${escapeHtml(p.thumb)}"><i class="fa-solid ${escapeHtml(p.icon)}"></i></div>
      <h3 class="h5">${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      ${tags}
      ${linkBlock}
    </article>
  </div>`;
}

function educationHtml(e) {
  const desc = e.desc ? `<p class="mb-0">${escapeHtml(e.desc)}</p>` : "";
  return `
  <div class="t-item">
    <div class="site-card">
      <small>${escapeHtml(e.period)}</small>
      <h3 class="h5">${escapeHtml(e.title)}</h3>
      <p class="mb-1">${escapeHtml(e.place)}</p>
      ${desc}
    </div>
  </div>`;
}

function certificationHtml(c) {
  const href = c.url || c.file;
  const label = c.url ? "Verify certificate" : "View certificate";
  const link = href
    ? `<div class="card-links">
        <a href="${escapeHtml(href)}" target="_blank" rel="noopener"><i class="fa-solid fa-circle-check"></i> ${label}</a>
      </div>`
    : "";
  return `
  <div class="col-md-4">
    <div class="site-card h-100">
      <small class="cert-date">${escapeHtml(c.date)}</small>
      <h3 class="h5 mt-1">${escapeHtml(c.title)}</h3>
      <p class="mb-2">${escapeHtml(c.issuer)}</p>
      ${link}
    </div>
  </div>`;
}

function findProjectsByCategory(category) {
  let list = [];
  for (const p of projects) {
    if (category !== "all" && p.category !== category) continue; // skip this round
    list.push(p);
  }
  return list;
}

// ----- rendering (each function exits quietly if the page has no host div) -----
function renderSkills() {
  const host = document.getElementById("skillList");
  if (!host) return;
  host.innerHTML = skills.map(skillCardHtml).join("");

  const soft = document.getElementById("softSkills");
  if (soft) {
    soft.innerHTML = softSkills
      .map(function (s) { return `<span class="pill ${s.cls}">${escapeHtml(s.label)}</span>`; })
      .join("");
  }
}

function renderProjects(list) {
  const host = document.getElementById("projectList");
  if (!host) return;
  host.innerHTML = list.map(projectCardHtml).join("") || `<p class="text-muted">No matching projects.</p>`;
}

function renderHomeProjects() {
  const host = document.getElementById("home-projects");
  if (!host) return;
  host.innerHTML = projects.slice(0, 3).map(projectCardHtml).join("");
}

function renderEducation() {
  const host = document.getElementById("educationList");
  if (!host) return;
  host.innerHTML = education.map(educationHtml).join("");
}

function renderCertifications() {
  const host = document.getElementById("certList");
  if (!host) return;
  host.innerHTML = certifications.map(certificationHtml).join("");
}

// ----- behaviour -----
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function markNavItems() {
  // highlight the link that matches the current page
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (a) {
    a.classList.add("nav-item");
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
}

function bindMenuToggle() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

function bindDarkMode() {
  const btn = document.getElementById("darkToggle");
  const saved = localStorage.getItem("devport-theme");
  // dark is the default; only switch to light if the visitor chose it before
  if (saved === "light") document.body.classList.remove("dark");
  else document.body.classList.add("dark");

  if (!btn) return;
  function updateLabel() {
    btn.innerHTML = document.body.classList.contains("dark")
      ? `<i class="fa-solid fa-sun"></i> Light`
      : `<i class="fa-solid fa-moon"></i> Dark`;
  }
  updateLabel();
  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    localStorage.setItem("devport-theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateLabel();
  });
}

function startTyping() {
  const el = document.getElementById("typing");
  if (!el) return;
  let w = 0, c = 0, deleting = false;
  function type() {
    const word = typingWords[w];
    el.textContent = word.substring(0, c);
    if (!deleting && c < word.length) c++;
    else if (!deleting) { deleting = true; return setTimeout(type, 1400); }
    else if (c > 0) c--;
    else { deleting = false; w = (w + 1) % typingWords.length; }
    setTimeout(type, deleting ? 50 : 110);
  }
  type();
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(function (el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const step = Math.max(1, Math.ceil(target / 40));
    let n = 0;
    const timer = setInterval(function () {
      n += step;
      if (n >= target) { n = target; clearInterval(timer); }
      el.textContent = n + suffix;
    }, 35);
  });
}

function bindProjectFilters() {
  const buttons = document.querySelectorAll(".filter");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderProjects(findProjectsByCategory(btn.dataset.filter));
    });
  });
}

function bindAvatarFallback() {
  // if media/profile.jpg is missing, show the initials circle instead
  const img = document.getElementById("profileImg");
  const fallback = document.getElementById("avatarFallback");
  if (!img || !fallback) return;
  img.addEventListener("error", function () {
    img.style.display = "none";
    fallback.style.display = "grid";
  });
  if (img.complete && img.naturalWidth === 0) {
    img.style.display = "none";
    fallback.style.display = "grid";
  }
}

function bindBackToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;
  window.addEventListener("scroll", function () {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ----- boot -----
console.log("main.js is running");
document.addEventListener("DOMContentLoaded", function () {
  setFooterYear();
  markNavItems();
  bindMenuToggle();
  bindDarkMode();
  bindAvatarFallback();
  bindBackToTop();
  startTyping();
  animateCounters();
  renderSkills();
  renderProjects(findProjectsByCategory("all"));
  renderHomeProjects();
  renderEducation();
  renderCertifications();
  bindProjectFilters();
  console.log("Debug: main.js finished");
});
