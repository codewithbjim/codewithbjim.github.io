---
# Portfolio data — single source of truth
# Edit this file, then sync changes to index.html / script.js as needed.

meta:
  title: "Bryan Jim Paano | Portfolio"
  tagline: "Full Stack Software Engineer"
  years_of_experience: 7
  availability: "Open to collaborations"
  hosting: "GitHub Pages"

personal:
  full_name: "Bryan Jim Paano"
  display_name: "Bryan/Jim"
  nav_logo: "<bjim />"
  role: "Full Stack Software Engineer"
  location: "Cagayan de Oro, Philippines"
  email_alias: "jzoaj8hmf@mozmail.com" # used with Formspree

links:
  github:
    label: GitHub
    url: "https://github.com/codewithbjim"
  linkedin:
    label: LinkedIn
    url: "https://linkedin.com/in/bryanjimpaano"

hero:
  greeting: "Hi there, I'm"
  typed_titles:
    - "Full Stack Engineer"
    - "AI-Augmented Developer"
    - "Cloud Architect"
    - "API & Integration Specialist"
  subtitle: >
    I've shipped products used by real people: healthcare platforms, airline systems,
    government tools, and interactive experiences for global brands.
    Most of it I can't name. All of it I'm proud of.
  cta:
    primary:
      label: "View My Work"
      href: "#projects"
    secondary:
      label: "Get in Touch"
      href: "#contact"
  code_snippet:
    name: "Bryan/Jim"
    stack: ["Next.js", "NestJS"]
    cloud: "GCP"
    yoe: 7
    ai: true
    remote: true

about:
  card:
    role: "Full Stack Software Engineer"
    location: "Cagayan de Oro, Philippines"
    stack: "Vue · Next.js · NestJS · GCP"
    certification: "Google Professional Cloud Architect"
    availability: "Open to collaborations"

contact:
  subtitle: "Open to collaborations or just a good conversation about tech."
  formspree_form_id: "YOUR_FORM_ID" # replace after signing up at formspree.io

navigation:
  - { label: About, href: "#about" }
  - { label: Experience, href: "#experience" }
  - { label: Projects, href: "#projects" }
  - { label: Skills, href: "#skills" }
  - { label: Contact, href: "#contact" }

experience:
  - role: "Full Stack Software Engineer"
    company: "Symph Inc."
    period: "Oct 2023 – Present"
    bullets:
      - "Deliver full-stack features across healthcare, government, finance, and BPO sectors"
      - "Lead greenfield builds and migrations to modern stacks on GCP"
      - "Contribute to an internal AI Agent System — feature development and support"
      - "Collaborate with cross-functional, multi-vendor engineering teams"

  - role: "Associate Software Engineer"
    company: "Stash PH Pinas"
    period: "Jun 2021 – Oct 2023"
    bullets:
      - "Built and maintained an e-claims platform for hospital-to-PhilHealth claims processing"
      - "Improved performance through refactoring and optimisation initiatives"
      - "Maintained high code quality through active peer review"

  - role: "Front-End / Software Developer"
    company: "XDevs (TRR Technologies)"
    period: "Feb 2019 – Mar 2021"
    bullets:
      - "Shipped frontends for global clients: Singapore Airlines, Singapore Biennale, and Coca-Cola FEMSA's Wingman field-sales app"
      - "Built responsive web apps with Vue.js / Nuxt and NativeScript"
      - "Handled debugging, QA, and feature delivery across the project lifecycle"

projects:
  # type: public → client/project name is shown
  # type: nda    → client identity withheld; use codename instead of name

  - type: public
    name: "Coca-Cola FEMSA: Wingman"
    sector: "FMCG / Sales Force Automation"
    description: >
      Led the full revamp of Wingman, a mobile sales-force automation app used by field agents
      for one of Latin America's largest Coca-Cola bottlers. Modernised the UI, improved performance,
      and re-architected key flows.
    role: "Frontend Mobile Engineer"
    highlights:
      - "App Revamp"
      - "Mobile"
      - "Performance Optimisation"
    tech: ["NativeScript", "REST API"]
    link: null

  - type: public
    name: "Singapore Airlines"
    sector: "Aviation / Enterprise"
    description: >
      Embedded in a multi-vendor engineering team to provide development support, debugging,
      and feature delivery on Singapore Airlines' digital platforms. Navigated complex cross-team
      workflows and strict release processes.
    role: "Frontend Engineer"
    highlights:
      - "Multi-Vendor Collaboration"
      - "Feature Development"
      - "Debugging & Support"
    tech: ["Vue.js", "REST API"]
    link: null

  - type: public
    name: "Singapore Biennale"
    sector: "Arts & Culture / Web Experience"
    description: >
      Designed and built an immersive interactive landing page for Singapore's premier contemporary
      art exhibition. Features real-time mouse-tracking parallax and cursor-following elements
      that bring the visual identity to life on screen.
    role: "Frontend Engineer"
    highlights:
      - "Interactive Design"
      - "Mouse-Tracking UI"
      - "Creative Development"
    tech: ["Vue.js"]
    link: null

  - type: public
    name: "ARTGiga"
    sector: "Automotive / Business Website"
    description: >
      Built a professional web presence for a commercial truck dealership. Includes vehicle
      catalogue, inquiry system, and responsive layout designed for both desktop and mobile users.
    role: "Frontend Engineer"
    highlights:
      - "Business Website"
      - "Vehicle Catalogue"
      - "Responsive Design"
    tech: ["Vue.js"]
    link: null

  - type: public
    name: "EClaims Platform"
    sector: "InsurTech / Claims Management"
    description: >
      Built and maintained a digital claims processing platform at Stash PH Pinas. Covered
      end-to-end claims workflows with a Vue.js frontend, Java Spring Boot backend, and Python
      scripts handling data migrations and background processing.
    role: "Full Stack Engineer"
    highlights:
      - "Claims Automation"
      - "Data Migration"
      - "Backend Processing"
    tech: ["Vue.js", "Spring Boot", "Python", "Java", "AWS"]
    link: null

  - type: nda
    codename: "Coastal Resilience Interactive Web App"
    sector: "Government / Public Engagement"
    description: >
      Built the frontend for a public-facing interactive web experience that guides visitors
      through various coastal protection measures. Outcomes are pre-determined based on official
      research studies, presenting complex infrastructure data in an accessible, engaging format.
    role: "Frontend Engineer"
    highlights:
      - "Interactive Experience"
      - "Government / Public Sector"
      - "Data-Driven Outcomes"
    tech: ["Next.js", "GCP"]

  - type: nda
    codename: "Healthcare Super-App"
    sector: "Healthcare / Consumer Mobile & Web"
    description: >
      Built a comprehensive healthcare super-app from the ground up, covering telemedicine,
      pharmacy, wellness programmes, and appointment booking in a single unified platform.
      Responsible for architecture decisions, feature implementation, and cross-functional delivery.
    role: "Full Stack Engineer (Greenfield)"
    highlights:
      - "Built from Scratch"
      - "Telemedicine"
      - "Multi-Feature Platform"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Hospital Network Digital Front Door"
    sector: "Healthcare / Enterprise Patient Portal"
    description: >
      Maintained and evolved a digital front-door system for a large private hospital network,
      spanning both a legacy system and a modern replacement stack running in parallel.
      Responsibilities included bug fixes, feature enhancements, and cross-system integration support.
    role: "Full Stack Engineer (Maintenance & Feature Dev)"
    highlights:
      - "Legacy System"
      - "Modern Stack"
      - "Long-Term Maintenance"
    tech: ["Next.js", "NestJS", "Angular", "GCP"]

  - type: nda
    codename: "Health & Wellness E-Commerce"
    sector: "Healthcare / E-Commerce"
    description: >
      Contributed to an e-commerce platform for health and wellness products, part of a broader
      digital health ecosystem. Participation was targeted, supporting specific feature work
      and integration tasks.
    role: "Contributing Engineer"
    highlights:
      - "E-Commerce"
      - "Health Products"
      - "Targeted Contribution"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Financial Services Internal Tooling"
    sector: "Financial Services / Internal Systems"
    description: >
      Developed internal business applications for a large financial services organisation,
      supporting operations, workflows, and internal reporting needs across departments.
    role: "Full Stack Engineer"
    highlights:
      - "Internal Tools"
      - "Workflow Automation"
      - "Business Operations"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Broadcasting Platform: MRSP Migration"
    sector: "Government / Media & Broadcasting"
    description: >
      Migrated a media resource scheduling and planning (MRSP) platform from an aging stack
      to a modern architecture. Preserved all existing functionality while improving maintainability,
      performance, and developer experience.
    role: "Full Stack Engineer (Migration)"
    highlights:
      - "App Migration"
      - "Broadcasting"
      - "Stack Modernisation"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Media Resource Management System Migration"
    sector: "Government / Media Management"
    description: >
      Migrated a media resource management system to a new technology stack, ensuring data
      integrity and functional parity throughout the transition. Delivered a cleaner, maintainable
      codebase ready for future feature growth.
    role: "Full Stack Engineer (Migration)"
    highlights:
      - "App Migration"
      - "Data Integrity"
      - "Stack Modernisation"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Enterprise Operations Suite"
    sector: "Business Process Outsourcing / Internal Portals"
    description: >
      Designed and built three interconnected portals from scratch for an enterprise operations
      organisation: client-facing, employee-facing, and admin. Covered authentication,
      role-based access control, dashboards, and workflow management.
    role: "Full Stack Engineer (Greenfield)"
    highlights:
      - "Built from Scratch"
      - "Multi-Portal"
      - "Role-Based Access Control"
    tech: ["Next.js", "NestJS", "GCP"]

  - type: nda
    codename: "Healthcare Payment Microservice"
    sector: "Healthcare / Payments"
    description: >
      Designed and built a secure, scalable payment microservice integrated with a major
      e-wallet for a healthcare super-app, handling end-to-end transaction processing.
    role: "Full Stack Engineer"
    highlights:
      - "Payments"
      - "Microservice"
      - "E-Wallet Integration"
    tech: ["NestJS", "PostgreSQL"]

  - type: nda
    codename: "Patient Digital ID Platform"
    sector: "Healthcare / Patient Data"
    description: >
      Built a centralized patient data platform giving healthcare providers a secure,
      compliant interface to access, analyse, and manage patient medical records.
    role: "Full Stack Engineer"
    highlights:
      - "Patient Data"
      - "Security & Compliance"
      - "Centralized Records"
    tech: ["Next.js", "NestJS", "PostgreSQL"]

  - type: nda
    codename: "Reference Verification Platform"
    sector: "Government / Identity & Access"
    description: >
      Migrated a reference/background-check platform to an event-driven microservices
      architecture, with message-based permission and membership services and role-based
      access control across backend and frontend.
    role: "Full Stack Engineer (Migration)"
    highlights:
      - "Event-Driven Microservices"
      - "RBAC"
      - "API Authentication"
    tech: ["Next.js", "NestJS", "MongoDB", "RabbitMQ"]

  - type: nda
    codename: "AI Agent System"
    sector: "Internal / AI & Automation"
    description: >
      Contribute to an internal AI Agent System that supports day-to-day operations across
      the organisation — feature development, integration support, and ongoing platform
      improvements.
    role: "Full Stack Engineer"
    highlights:
      - "AI Agent Platform"
      - "Internal Tooling"
      - "Feature Development"
    tech: ["Claude SDK", "GCP", "Electron"]

skills:
  - category: Frontend
    items:
      - "Vue.js"
      - "React"
      - "Angular"
      - "Next.js"
      - "TypeScript"
      - "JavaScript"
      - "HTML5 / CSS3"

  - category: Backend
    items:
      - "Node.js"
      - "NestJS"
      - "Express.js"
      - "Spring Boot"
      - "Python"
      - "Java"
      - "REST APIs"

  - category: Databases
    items:
      - "PostgreSQL"
      - "MySQL"
      - "MongoDB"
      - "Firestore"

  - category: "Cloud & DevOps"
    items:
      - "Google Cloud Platform"
      - "AWS"
      - "Docker"
      - "CI/CD Pipelines"

  - category: "Tools & Workflow"
    items:
      - "Jira"
      - "Confluence"
      - "Bitbucket"
      - "Trello"
      - "Agile / Scrum"

  - category: "AI & Automation"
    items:
      - "AI-Augmented Development"
      - "Prompt Engineering"
      - "Custom Agent Development"
      - "AI Native Workflows"

certifications:
  - label: "Google Professional Cloud Architect"
    url: "https://www.credly.com/badges/7dae976b-c776-4815-9b89-a1afcb49d4b7/public_url"
---

# About Me

I'm a Full Stack Software Engineer with 7+ years of experience building scalable web applications and APIs across healthcare, aviation, finance, FMCG, and the arts. Comfortable leading greenfield builds, maintaining legacy systems, and collaborating within large multi-vendor teams.

Google Professional Cloud Architect certified. Proficient across the full stack, from Vue and Next.js on the frontend to NestJS and Spring Boot on the backend, running on GCP and AWS.

I work as an AI-augmented developer. That means I use AI tooling deliberately and critically: guiding output, enforcing standards, and ensuring what ships meets production-quality bar. I also contribute to AI-native initiatives at the company level, including an internal AI Agent System that supports day-to-day operations across the organisation.

Some of my most impactful work is under NDA, but the depth of experience carries across everything I build.

---

# Projects (notes)

Projects tagged **CONFIDENTIAL** have client details withheld per NDA. Descriptions reflect the nature and scope of work only.

**Filters:** All · Named · Confidential

---

# Quick copy blocks

## One-liner bio

Full Stack Software Engineer with 7+ years building scalable web apps and APIs across healthcare, aviation, finance, FMCG, and the arts. Google Professional Cloud Architect. AI-augmented developer based in Cagayan de Oro, Philippines.

## Elevator pitch

I've shipped products used by real people: healthcare platforms, airline systems, government tools, and interactive experiences for global brands. Most of it I can't name. All of it I'm proud of.

## Core stack summary

Vue · Next.js · NestJS · Spring Boot · GCP · AWS · TypeScript

## Sectors

Healthcare · Aviation · Government · Finance · FMCG · Arts & Culture · BPO · InsurTech · Media & Broadcasting
