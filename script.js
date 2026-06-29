// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// type: 'public'  → client/project name is shown
// type: 'nda'     → client identity is withheld; only role, sector, and scope shown

const PROJECTS = [
  // ── PUBLIC ────────────────────────────────────────────────────────────────
  {
    type: 'public',
    name: 'Coca-Cola FEMSA: Wingman',
    sector: 'FMCG / Sales Force Automation',
    description:
      'Led the full revamp of Wingman, a mobile sales-force automation app used by field agents for one of Latin America\'s largest Coca-Cola bottlers. Modernised the UI, improved performance, and re-architected key flows.',
    role: 'Frontend Mobile Engineer',
    highlights: ['App Revamp', 'Mobile', 'Performance Optimisation'],
    tech: ['NativeScript', 'REST API'],
    link: null,
  },
  {
    type: 'public',
    name: 'Singapore Airlines',
    sector: 'Aviation / Enterprise',
    description:
      'Embedded in a multi-vendor engineering team to provide development support, debugging, and feature delivery on Singapore Airlines\' digital platforms. Navigated complex cross-team workflows and strict release processes.',
    role: 'Frontend Engineer',
    highlights: ['Multi-Vendor Collaboration', 'Feature Development', 'Debugging & Support'],
    tech: ['Vue.js', 'REST API'],
    link: null,
  },
  {
    type: 'public',
    name: 'Singapore Biennale',
    sector: 'Arts & Culture / Web Experience',
    description:
      'Designed and built an immersive interactive landing page for Singapore\'s premier contemporary art exhibition. Features real-time mouse-tracking parallax and cursor-following elements that bring the visual identity to life on screen.',
    role: 'Frontend Engineer',
    highlights: ['Interactive Design', 'Mouse-Tracking UI', 'Creative Development'],
    tech: ['Vue.js'],
    link: null,
  },
  {
    type: 'public',
    name: 'ARTGiga',
    sector: 'Automotive / Business Website',
    description:
      'Built a professional web presence for a commercial truck dealership. Includes vehicle catalogue, inquiry system, and responsive layout designed for both desktop and mobile users.',
    role: 'Frontend Engineer',
    highlights: ['Business Website', 'Vehicle Catalogue', 'Responsive Design'],
    tech: ['Vue.js'],
    link: null,
  },

  {
    type: 'public',
    name: 'EClaims Platform',
    sector: 'InsurTech / Claims Management',
    description:
      'Built and maintained a digital claims processing platform at Stash PH Pinas. Covered end-to-end claims workflows with a Vue.js frontend, Java Spring Boot backend, and Python scripts handling data migrations and background processing.',
    role: 'Full Stack Engineer',
    highlights: ['Claims Automation', 'Data Migration', 'Backend Processing'],
    tech: ['Vue.js', 'Spring Boot', 'Python', 'Java', 'AWS'],
    link: null,
  },

  // ── CONFIDENTIAL (NDA) ─────────────────────────────────────────────────────
  // Client names are withheld. Descriptions reflect only the nature and scope of work.
  {
    type: 'nda',
    codename: 'Coastal Resilience Interactive Web App',
    sector: 'Government / Public Engagement',
    description:
      'Built the frontend for a public-facing interactive web experience that guides visitors through various coastal protection measures. Outcomes are pre-determined based on official research studies, presenting complex infrastructure data in an accessible, engaging format.',
    role: 'Frontend Engineer',
    highlights: ['Interactive Experience', 'Government / Public Sector', 'Data-Driven Outcomes'],
    tech: ['Next.js', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Healthcare Super-App',
    sector: 'Healthcare / Consumer Mobile & Web',
    description:
      'Built a comprehensive healthcare super-app from the ground up, covering telemedicine, pharmacy, wellness programmes, and appointment booking in a single unified platform. Responsible for architecture decisions, feature implementation, and cross-functional delivery.',
    role: 'Full Stack Engineer (Greenfield)',
    highlights: ['Built from Scratch', 'Telemedicine', 'Multi-Feature Platform'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Hospital Network Digital Front Door',
    sector: 'Healthcare / Enterprise Patient Portal',
    description:
      'Maintained and evolved a digital front-door system for a large private hospital network, spanning both a legacy system and a modern replacement stack running in parallel. Responsibilities included bug fixes, feature enhancements, and cross-system integration support.',
    role: 'Full Stack Engineer (Maintenance & Feature Dev)',
    highlights: ['Legacy System', 'Modern Stack', 'Long-Term Maintenance'],
    tech: ['Next.js', 'NestJS', 'Angular', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Health & Wellness E-Commerce',
    sector: 'Healthcare / E-Commerce',
    description:
      'Contributed to an e-commerce platform for health and wellness products, part of a broader digital health ecosystem. Participation was targeted, supporting specific feature work and integration tasks.',
    role: 'Contributing Engineer',
    highlights: ['E-Commerce', 'Health Products', 'Targeted Contribution'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Financial Services Internal Tooling',
    sector: 'Financial Services / Internal Systems',
    description:
      'Developed internal business applications for a large financial services organisation, supporting operations, workflows, and internal reporting needs across departments.',
    role: 'Full Stack Engineer',
    highlights: ['Internal Tools', 'Workflow Automation', 'Business Operations'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Broadcasting Platform: MRSP Migration',
    sector: 'Government / Media & Broadcasting',
    description:
      'Migrated a media resource scheduling and planning (MRSP) platform from an aging stack to a modern architecture. Preserved all existing functionality while improving maintainability, performance, and developer experience.',
    role: 'Full Stack Engineer (Migration)',
    highlights: ['App Migration', 'Broadcasting', 'Stack Modernisation'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Media Resource Management System Migration',
    sector: 'Government / Media Management',
    description:
      'Migrated a media resource management system to a new technology stack, ensuring data integrity and functional parity throughout the transition. Delivered a cleaner, maintainable codebase ready for future feature growth.',
    role: 'Full Stack Engineer (Migration)',
    highlights: ['App Migration', 'Data Integrity', 'Stack Modernisation'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Enterprise Operations Suite',
    sector: 'Business Process Outsourcing / Internal Portals',
    description:
      'Designed and built three interconnected portals from scratch for an enterprise operations organisation: client-facing, employee-facing, and admin. Covered authentication, role-based access control, dashboards, and workflow management.',
    role: 'Full Stack Engineer (Greenfield)',
    highlights: ['Built from Scratch', 'Multi-Portal', 'Role-Based Access Control'],
    tech: ['Next.js', 'NestJS', 'GCP'],
  },
  {
    type: 'nda',
    codename: 'Healthcare Payment Microservice',
    sector: 'Healthcare / Payments',
    description:
      'Designed and built a secure, scalable payment microservice integrated with a major e-wallet for a healthcare super-app, handling end-to-end transaction processing.',
    role: 'Full Stack Engineer',
    highlights: ['Payments', 'Microservice', 'E-Wallet Integration'],
    tech: ['NestJS', 'PostgreSQL'],
  },
  {
    type: 'nda',
    codename: 'Patient Digital ID Platform',
    sector: 'Healthcare / Patient Data',
    description:
      'Built a centralized patient data platform giving healthcare providers a secure, compliant interface to access, analyse, and manage patient medical records.',
    role: 'Full Stack Engineer',
    highlights: ['Patient Data', 'Security & Compliance', 'Centralized Records'],
    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    type: 'nda',
    codename: 'Reference Verification Platform',
    sector: 'Government / Identity & Access',
    description:
      'Migrated a reference/background-check platform to an event-driven microservices architecture, with message-based permission and membership services and role-based access control across backend and frontend.',
    role: 'Full Stack Engineer (Migration)',
    highlights: ['Event-Driven Microservices', 'RBAC', 'API Authentication'],
    tech: ['Next.js', 'NestJS', 'MongoDB', 'RabbitMQ'],
  },
  {
    type: 'nda',
    codename: 'AI Agent System',
    sector: 'Internal / AI & Automation',
    description:
      'Contribute to an internal AI Agent System that supports day-to-day operations across the organisation — feature development, integration support, and ongoing platform improvements.',
    role: 'Full Stack Engineer',
    highlights: ['AI Agent Platform', 'Internal Tooling', 'Feature Development'],
    tech: ['Claude SDK', 'GCP', 'Electron'],
  },
];

// ─── EXPERIENCE DATA ──────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: 'Full Stack Software Engineer',
    company: 'Symph Inc.',
    period: 'Oct 2023 – Present',
    bullets: [
      'Deliver full-stack features across healthcare, government, finance, and BPO sectors',
      'Lead greenfield builds and migrations to modern stacks on GCP',
      'Contribute to an internal AI Agent System — feature development and support',
      'Collaborate with cross-functional, multi-vendor engineering teams',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Stash PH Pinas',
    period: 'Jun 2021 – Oct 2023',
    bullets: [
      'Built and maintained an e-claims platform for hospital-to-PhilHealth claims processing',
      'Improved performance through refactoring and optimisation initiatives',
      'Maintained high code quality through active peer review',
    ],
  },
  {
    role: 'Front-End / Software Developer',
    company: 'XDevs (TRR Technologies)',
    period: 'Feb 2019 – Mar 2021',
    bullets: [
      'Shipped frontends for global clients: Singapore Airlines, Singapore Biennale, and Coca-Cola FEMSA\'s Wingman field-sales app',
      'Built responsive web apps with Vue.js / Nuxt and NativeScript',
      'Handled debugging, QA, and feature delivery across the project lifecycle',
    ],
  },
];

// ─── SKILLS DATA ─────────────────────────────────────────────────────────────
const SKILLS = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'React', 'Angular', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'Spring Boot', 'Python', 'Java', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Google Cloud Platform', 'AWS', 'Docker', 'CI/CD Pipelines'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Jira', 'Confluence', 'Bitbucket', 'Trello', 'Agile / Scrum'],
  },
  {
    category: 'AI & Automation',
    items: ['AI-Augmented Development', 'Prompt Engineering', 'Custom Agent Development', 'AI Native Workflows'],
  },
  {
    category: 'Certifications',
    items: [
      {
        label: 'Google Professional Cloud Architect',
        url: 'https://www.credly.com/badges/7dae976b-c776-4815-9b89-a1afcb49d4b7/public_url',
      },
    ],
  },
];

// ─── RENDER PROJECTS ─────────────────────────────────────────────────────────
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  const filtered = filter === 'all'
    ? PROJECTS
    : filter === 'nda'
      ? PROJECTS.filter(p => p.type === 'nda')
      : PROJECTS.filter(p => p.type === 'public');

  grid.innerHTML = '';

  filtered.forEach((p, i) => {
    const isNDA = p.type === 'nda';
    const card = document.createElement('article');
    card.className = `project-card ${isNDA ? 'project-card--nda' : ''}`;
    card.style.animationDelay = `${i * 60}ms`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-meta">
          <span class="card-sector">${p.sector}</span>
          ${isNDA ? '<span class="badge-nda" title="Client identity withheld per NDA">CONFIDENTIAL</span>' : ''}
        </div>
        <h3 class="card-title">${isNDA ? p.codename : p.name}</h3>
        <p class="card-role">${p.role}</p>
      </div>
      <p class="card-description">${p.description}</p>
      <div class="card-highlights">
        ${p.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div class="card-tech">
          ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
        ${!isNDA && p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="card-link">View ↗</a>` : ''}
      </div>
    `;

    grid.appendChild(card);
  });
}

// ─── RENDER SKILLS ────────────────────────────────────────────────────────────
function renderSkills() {
  const grid    = document.getElementById('skills-grid');
  const certsEl = document.getElementById('certs-list');

  SKILLS.forEach(cat => {
    if (cat.category === 'Certifications') {
      cat.items.forEach(cert => {
        const label = typeof cert === 'string' ? cert : cert.label;
        const url   = typeof cert === 'string' ? null  : cert.url;
        const tag   = url ? 'a' : 'div';
        const badge = document.createElement(tag);
        badge.className = 'cert-item';
        if (url) {
          badge.href = url;
          badge.target = '_blank';
          badge.rel = 'noopener';
        }
        badge.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="6"/><path d="M8.56 14.3 8 22l4-2 4 2-.56-7.7"/>
          </svg>
          ${label}
          ${url ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:6px;opacity:0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' : ''}
        `;
        certsEl.appendChild(badge);
      });
      return;
    }

    const el = document.createElement('div');
    el.className = 'skill-category';
    el.innerHTML = `
      <h3 class="skill-cat-title">${cat.category}</h3>
      <div class="skill-pills">
        ${cat.items.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    `;
    grid.appendChild(el);
  });
}

// ─── RENDER EXPERIENCE ───────────────────────────────────────────────────────
function renderExperience() {
  const timeline = document.getElementById('timeline');
  EXPERIENCE.forEach(e => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-header">
        <div>
          <p class="timeline-role">${e.role}</p>
          <p class="timeline-company">${e.company}</p>
        </div>
        <span class="timeline-period">${e.period}</span>
      </div>
      <ul class="timeline-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    `;
    timeline.appendChild(item);
  });
}

// ─── FILTER BUTTONS ───────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ─── CURSOR GLOW ─────────────────────────────────────────────────────────────
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

// ─── INTERACTIVE GRID LINES ──────────────────────────────────────────────────
const gridCanvas = document.getElementById('grid-canvas');
const GRID_SIZE = 28;
const GRID_OFFSET = 14;
const GRID_RADIUS = 180;
let mouseX = -9999, mouseY = -9999;

const gridCtx = gridCanvas ? gridCanvas.getContext('2d') : null;

const resizeCanvas = () => {
  if (!gridCanvas) return;
  gridCanvas.width = window.innerWidth;
  gridCanvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const drawGrid = () => {
  if (!gridCtx) return;
  gridCtx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

  const startX = Math.floor((mouseX - GRID_RADIUS - GRID_OFFSET) / GRID_SIZE) * GRID_SIZE + GRID_OFFSET;
  const endX   = Math.ceil((mouseX + GRID_RADIUS - GRID_OFFSET) / GRID_SIZE) * GRID_SIZE + GRID_OFFSET;
  const startY = Math.floor((mouseY - GRID_RADIUS - GRID_OFFSET) / GRID_SIZE) * GRID_SIZE + GRID_OFFSET;
  const endY   = Math.ceil((mouseY + GRID_RADIUS - GRID_OFFSET) / GRID_SIZE) * GRID_SIZE + GRID_OFFSET;

  gridCtx.lineWidth = 0.5;

  for (let x = startX; x <= endX; x += GRID_SIZE) {
    for (let y = startY; y <= endY; y += GRID_SIZE) {
      const dist = Math.hypot(x - mouseX, y - mouseY);
      if (dist > GRID_RADIUS) continue;

      const rightDist = Math.hypot(x + GRID_SIZE - mouseX, y - mouseY);
      if (rightDist <= GRID_RADIUS) {
        const segAlpha = (1 - Math.max(dist, rightDist) / GRID_RADIUS) * 0.15;
        gridCtx.strokeStyle = `rgba(79, 142, 247, ${segAlpha})`;
        gridCtx.beginPath();
        gridCtx.moveTo(x, y);
        gridCtx.lineTo(x + GRID_SIZE, y);
        gridCtx.stroke();
      }

      const bottomDist = Math.hypot(x - mouseX, y + GRID_SIZE - mouseY);
      if (bottomDist <= GRID_RADIUS) {
        const segAlpha = (1 - Math.max(dist, bottomDist) / GRID_RADIUS) * 0.15;
        gridCtx.strokeStyle = `rgba(79, 142, 247, ${segAlpha})`;
        gridCtx.beginPath();
        gridCtx.moveTo(x, y);
        gridCtx.lineTo(x, y + GRID_SIZE);
        gridCtx.stroke();
      }
    }
  }

  requestAnimationFrame(drawGrid);
};
requestAnimationFrame(drawGrid);

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ─── SCROLL SPY (active nav link) ────────────────────────────────────────────
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');
const spySections = [...navAnchors]
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

// rootMargin fires when the section's top enters the top 30% of the viewport
// — works correctly for both short and very tall sections (e.g. Projects)
const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-10% 0px -85% 0px' });

spySections.forEach(s => spyObserver.observe(s));

// ─── NAV SCROLL EFFECT ───────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── MOBILE NAV TOGGLE ────────────────────────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
  });
});

// ─── INTERSECTION OBSERVER ───────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('section').forEach(s => observer.observe(s));

// ─── TYPED TITLE EFFECT ───────────────────────────────────────────────────────
const titles = [
  'Full Stack Engineer',
  'AI-Augmented Developer',
  'Cloud Architect',
  'API & Integration Specialist',
];
let tIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.querySelector('.typed-text');

function typeLoop() {
  const current = titles[tIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % titles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 85);
}

// ─── CONTACT FORM (Formspree AJAX) ───────────────────────────────────────────
const contactForm = document.querySelector('.contact-form');
const formStatus  = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    formStatus.className = 'form-note';
    formStatus.textContent = '';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        formStatus.className = 'form-note success';
        formStatus.textContent = '✓ Message sent. I will get back to you soon.';
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      formStatus.className = 'form-note error';
      formStatus.textContent = '✗ Something went wrong. Try reaching me on LinkedIn.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}

// ─── FOOTER YEAR ─────────────────────────────────────────────────────────────
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ─── HERO FLOATING BADGES ─────────────────────────────────────────────────────
function initFloatingBadges() {
  const container = document.getElementById('deco-badges');
  if (!container) return;
  if (window.innerWidth <= 768) return;

  const allSkills = SKILLS
    .filter(s => s.category !== 'Certifications')
    .flatMap(s => s.items);

  // Pre-defined slots around the code window edges (avoiding center overlap)
  const slots = [
    { top: '-4%',  left: '10%' },   // top-left
    { top: '-4%',  left: '60%' },   // top-right
    { top: '30%',  left: '-18%' },  // mid-left
    { top: '30%',  left: '88%' },   // mid-right
    { top: '55%',  left: '-22%' },  // lower-left
    { top: '55%',  left: '92%' },   // lower-right
    { top: '92%',  left: '8%' },    // bottom-left
    { top: '92%',  left: '58%' },   // bottom-right
  ];

  const MAX_VISIBLE = 5;
  const BADGE_LIFE_MIN = 3000;
  const BADGE_LIFE_MAX = 5500;
  const SPAWN_STAGGER = 800;
  const FADE_DURATION = 600;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  // Create a badge element for each slot
  const badgeSlots = slots.map((pos, i) => {
    const el = document.createElement('span');
    el.className = 'deco-badge';
    el.style.top = pos.top;
    el.style.left = pos.left;
    el.style.animationDelay = `${(i * 0.6).toFixed(1)}s`;
    container.appendChild(el);
    return { el, active: false };
  });

  let skillQueue = shuffle(allSkills);
  let queueIndex = 0;

  function nextSkill() {
    const skill = skillQueue[queueIndex];
    queueIndex++;
    if (queueIndex >= skillQueue.length) {
      skillQueue = shuffle(allSkills);
      queueIndex = 0;
    }
    return skill;
  }

  function scheduleBadge(slot) {
    slot.el.textContent = nextSkill();
    slot.active = true;

    requestAnimationFrame(() => {
      slot.el.classList.add('visible');
      setTimeout(() => slot.el.classList.add('float'), FADE_DURATION);
    });

    // Schedule this badge to fade out after its lifespan
    const lifespan = randBetween(BADGE_LIFE_MIN, BADGE_LIFE_MAX);
    setTimeout(() => {
      slot.el.classList.remove('float');
      slot.el.classList.remove('visible');
      slot.active = false;

      // After fade-out, pick a random inactive slot to spawn next
      setTimeout(() => {
        const available = badgeSlots.filter(b => !b.active);
        if (available.length === 0) return;
        const next = available[Math.floor(Math.random() * available.length)];
        scheduleBadge(next);
      }, randBetween(400, 1000));
    }, lifespan);
  }

  // Initial staggered spawn
  const initialSlots = shuffle(badgeSlots).slice(0, MAX_VISIBLE);
  initialSlots.forEach((slot, i) => {
    setTimeout(() => scheduleBadge(slot), i * SPAWN_STAGGER);
  });
}

// ─── MOBILE SKILL CYCLE ───────────────────────────────────────────────────────
function initSkillCycle() {
  const el = document.getElementById('deco-skill-cycle');
  if (!el) return;

  const allSkills = SKILLS
    .filter(s => s.category !== 'Certifications')
    .flatMap(s => s.items);

  // Group skills into rows of 2-3 based on character length
  const MAX_ROW_CHARS = 30;
  const groups = [];
  let current = [];
  let charCount = 0;

  allSkills.forEach(skill => {
    if (current.length >= 3 || (current.length >= 2 && charCount + skill.length > MAX_ROW_CHARS)) {
      groups.push(current);
      current = [];
      charCount = 0;
    }
    current.push(skill);
    charCount += skill.length;
  });
  if (current.length) groups.push(current);

  let groupIdx = 0;

  const renderGroup = () => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.innerHTML = groups[groupIdx]
        .map(s => `<span class="mobile-badge">${s}</span>`)
        .join('');
      el.style.opacity = '1';
      groupIdx = (groupIdx + 1) % groups.length;
    }, 400);
  };

  renderGroup();
  setInterval(renderGroup, 2800);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderProjects();
renderSkills();
renderExperience();
initFloatingBadges();
initSkillCycle();
typeLoop();
