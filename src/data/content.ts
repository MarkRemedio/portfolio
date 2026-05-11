// Single source of truth for portfolio content.
// TODO(mark): replace any `url: ''` fields with real links you want shown.

export const profile = {
  name: 'Mark Joseph H. Remedio',
  callsign: 'M.J. REMEDIO',
  role: 'Senior Software Engineer',
  email: 'mackhoy.dev@gmail.com',
  phone: '+63 926 731 8065',
  resumeFile: 'resume.pdf',
  // Add any social links you want surfaced; leave url '' to hide.
  socials: [
    { label: 'GitHub', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Email', url: 'mailto:mackhoy.dev@gmail.com' },
  ],
}

export const about = {
  summary: [
    'Senior software engineer with 10+ years building production systems across enterprise, ad-tech, telecom, and SaaS.',
    'Backend-first (Java/Spring Boot, Node.js/NestJS, TypeScript) with deep AWS exposure — Lambda, CDK, Step Functions, EC2 — plus solid frontend work in React/Next.js and Vue.',
    'Comfortable owning systems end-to-end: architecture, mentoring, CI/CD, automated testing, and production triage.',
  ],
  highlights: [
    'Migrated legacy systems to Spring Boot microservices + AWS Lambda',
    'Built E2E test automation frameworks (Playwright, Selenium) from scratch',
    'Led teams of engineers; ran client demos, PR review standards, onboarding',
    'Building agentic workflows with Claude + the BMAD method',
  ],
}

export const skills = {
  Languages: ['Java', 'TypeScript', 'Node.js', 'PHP', 'Go', 'Python'],
  'Frameworks & Runtimes': [
    'Spring Boot',
    'Spring Batch',
    'NestJS',
    'Next.js',
    'React',
    'Vue.js',
    'Laravel',
    'JPA / Hibernate',
  ],
  'Databases & Storage': [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'DynamoDB',
    'Redis',
    'Redshift',
    'Firebase RTDB',
  ],
  'Cloud & Infra': ['AWS', 'GCP', 'Heroku', 'Docker', 'Ansible', 'Nginx', 'AWS CDK', 'AWS SAM'],
  'CI/CD & DevOps': ['Jenkins', 'GitHub Actions', 'Datadog'],
  'Testing & Automation': ['Playwright', 'Selenium', 'JUnit', 'Jest', 'JMeter'],
  'AI & Workflow': ['Claude / Anthropic', 'BMAD method', 'n8n', 'GoHighLevel (GHL)'],
}

export type Role = {
  company: string
  title: string
  range: string
  startYear: number
  url?: string
  projects: {
    name: string
    url?: string
    stack: string[]
    bullets: string[]
  }[]
}

export const experience: Role[] = [
  {
    company: 'Direct Sourcing Solutions',
    title: 'Senior Software Engineer',
    range: 'Jul 2025 — Present',
    startYear: 2025,
    url: '',
    projects: [
      {
        name: 'Docuvera',
        url: '',
        stack: ['Node.js', 'AWS Lambda', 'AWS CDK', 'API Gateway', 'Step Functions', 'Claude', 'BMAD'],
        bullets: [
          'Optimized lambda functions to stay under the 15-minute Step Functions ceiling.',
          'Stood up agentic workflows with Claude + the BMAD method to ship new features.',
          'Built and deployed new Node.js lambdas via AWS CDK.',
          'Owned integration services bridging third-party APIs with the core platform.',
        ],
      },
    ],
  },
  {
    company: 'Umpisa Inc.',
    title: 'Senior Engineer',
    range: 'Mar 2024 — Jul 2025',
    startYear: 2024,
    url: '',
    projects: [
      {
        name: 'Cox Communications',
        url: '',
        stack: ['Spring Boot', 'ActiveMQ', 'Node.js', 'AWS Lambda', 'Playwright'],
        bullets: [
          'Migrated legacy systems to Spring Boot microservices + Node.js/Lambda.',
          'Set unit-test standards (JUnit, Jest) — 75% min coverage on new features.',
          'Stepped into QA to keep the release schedule on track, then bootstrapped automated tests post-release.',
        ],
      },
      {
        name: 'Wombat',
        url: '',
        stack: ['React.js', 'Node.js', 'Playwright'],
        bullets: [
          'Built an E2E test automation framework from scratch with Playwright; improved regression reliability.',
          'Resolved frontend and backend defects feeding into production readiness.',
        ],
      },
    ],
  },
  {
    company: 'Rendition Digital',
    title: 'Senior Java Engineer',
    range: 'Jan 2023 — Mar 2024',
    startYear: 2023,
    url: '',
    projects: [
      {
        name: 'Datalex',
        url: '',
        stack: ['Spring Boot', 'MongoDB', 'Microservices'],
        bullets: [
          'Resolved high-priority production issues and shipped backend features in a microservices stack.',
          'Mentored juniors and supported QA through release cycles.',
          'Pitched in on frontend bug fixes leveraging prior JS experience.',
        ],
      },
    ],
  },
  {
    company: 'Fullspeed Technologies Inc.',
    title: 'Team Lead',
    range: 'May 2017 — Jan 2023',
    startYear: 2017,
    url: '',
    projects: [
      {
        name: 'MicoWorks',
        url: '',
        stack: ['Spring Boot', 'TypeScript', 'NestJS', 'Next.js', 'DynamoDB', 'Redis', 'Redshift', 'AWS'],
        bullets: [
          'Contributed to system architecture; enforced code standards through structured PR reviews.',
          'Led technical meetings, client demos, and onboarding for new engineers.',
        ],
      },
      {
        name: 'PolymorphicAds / Xrost',
        url: '',
        stack: ['Spring Boot', 'Spring Batch', 'Docker', 'Jenkins', 'Go', 'Vue.js', 'AWS'],
        bullets: [
          'Dockerized microservice test environments for consistent dev experience.',
          'Automated bi-monthly EC2 server maintenance.',
          'Built POC migrating legacy J2EE / jQuery to modern stack.',
        ],
      },
      {
        name: 'Admatrix',
        url: '',
        stack: ['Spring Batch', 'Google APIs', 'Jenkins', 'Docker', 'Ansible', 'Laravel'],
        bullets: [
          'Automated daily maintenance workflows with Spring Batch + Google APIs.',
          'Established CI pipelines and Docker-based local environments.',
          'Set up Datadog custom monitoring; supported Laravel apps.',
        ],
      },
    ],
  },
  {
    company: 'Accenture Inc.',
    title: 'Associate Application Developer',
    range: 'Feb 2015 — May 2017',
    startYear: 2015,
    url: '',
    projects: [
      {
        name: 'Enterprise client engagements',
        stack: ['Java', 'Jasper Reports', 'JMeter'],
        bullets: [
          'Delivered prod support, feature enhancements, and perf improvements on Java systems.',
          'Built Jasper Reports (JRXML); automated load testing with JMeter.',
          'Authored technical designs from functional specs; resolved SIT/UAT defects.',
          'Mentored junior team members during onboarding.',
        ],
      },
    ],
  },
  {
    company: 'Tieto Global Oy',
    title: 'Software Development Engineer',
    range: 'May 2014 — Feb 2015',
    startYear: 2014,
    url: '',
    projects: [
      {
        name: 'Nokia NetAct OSS integrations',
        stack: ['Python', 'Bash'],
        bullets: [
          'Contributed to OSS platform integrations for Nokia NetAct telecom systems.',
          'Performed sanity and integration testing for newly deployed components.',
        ],
      },
    ],
  },
]

export type Freelance = {
  client: string
  project: string
  url?: string
  stack: string[]
  bullets: string[]
}

export const freelance: Freelance[] = [
  {
    client: 'CimaGrowth',
    project: 'Serverless GHL integration platform',
    url: '',
    stack: ['Node.js', 'TypeScript', 'AWS SAM', 'CloudFormation', 'n8n', 'GHL'],
    bullets: [
      'Architected and deployed a serverless API integrating GoHighLevel with external systems via AWS Lambda.',
      'Translated business requirements from third-party devs and execs into scalable integration design.',
      'Built n8n automations for the lighter-weight endpoints.',
    ],
  },
  {
    client: 'Zappysales',
    project: 'QA automation & price-sync scrapers',
    url: '',
    stack: ['Selenium', 'Playwright', 'QA'],
    bullets: [
      'Wrote Selenium tests to expand regression coverage.',
      'Built Playwright scrapers to sync partner price/stock data when no API was available.',
      'Performed L1 support investigations as part of the QA team.',
    ],
  },
  {
    client: 'Concept Machine',
    project: 'Cloudeats — ordering backend',
    url: '',
    stack: ['Spring Boot', 'AWS EC2', 'Next.js'],
    bullets: [
      'Architected and deployed the Cloudeats backend on AWS EC2.',
      'Supported frontend integration and resolved defects through system testing.',
    ],
  },
  {
    client: 'Tokhimo',
    project: 'Uniplat Social Admin',
    url: '',
    stack: ['Spring Boot', 'Vue.js', 'Nginx'],
    bullets: [
      'Built the admin web app from scratch — REST APIs and dashboard components.',
      'Managed Nginx production deployment for availability and perf.',
    ],
  },
  {
    client: 'Integrated Infrastructure Solutions Corp.',
    project: 'SpeedRegalo & HOFFA',
    url: '',
    stack: ['Laravel', 'Vue.js'],
    bullets: [
      'SpeedRegalo: shipped e-commerce features and resolved production issues.',
      'HOFFA: full-stack development from scratch — APIs, frontend, DB design.',
    ],
  },
  {
    client: 'iVolunteer Philippines',
    project: 'Production enhancements',
    url: '',
    stack: ['Laravel'],
    bullets: [
      'Gathered requirements directly from the CEO; delivered urgent production enhancements solo.',
      'Designed DB updates and ran integration testing to keep deploys reliable.',
    ],
  },
  {
    client: 'Tudlo Innovation Solutions',
    project: 'Boardwalk admin system',
    url: '',
    stack: ['Laravel', 'Parse Platform', 'Firebase'],
    bullets: [
      'Sole full-stack developer for the admin system.',
      'Integrated Firebase for real-time features.',
    ],
  },
]

export const education = [
  {
    level: 'College',
    school: 'University of San Carlos',
    detail: 'B.S. in Information Technology',
  },
  { level: 'Secondary', school: 'University of San Carlos', detail: '' },
  {
    level: 'Primary',
    school: 'Colegio de la Inmaculada Concepción',
    detail: '',
  },
]
