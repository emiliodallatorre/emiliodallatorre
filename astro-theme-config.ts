type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Tone theme.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
    url: 'https://emiliodallatorre.it',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: 'Emilio Dalla Torre',
    logoLabel: 'Emilio Dalla Torre',
    description: 'I do machine learning R&D and high-performance computing, with the odd startup on the side.',
    author: 'Emilio Dalla Torre',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: undefined as string | undefined,
  },

  // The logo already links to `/`. Visible header links mirror the footer nav below.
  nav: [
    { label: 'Posts', href: '/posts' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  // Footer links stay visible by default so readers have a stable way to move around.
  footerNav: [
    { label: 'Posts', href: '/posts' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  content: {
    categoryOrder: ['Career', 'Projects', 'Travel'],
  },

  behavior: {
    smoothScroll: true,
  },

  comments: {
    // One-line switch after you fill the giscus values:
    // mode: 'off'           -> no comments
    // mode: 'giscus'        -> original giscus theme
    // mode: 'giscus-custom' -> Tone custom giscus theme
    // Local preview can also use PUBLIC_GISCUS_MODE and PUBLIC_GISCUS_* in .env.local.
    mode: 'off',
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      customLightTheme: '/giscus-light.css',
      customDarkTheme: '/giscus-dark.css',
      lang: 'en',
      loading: 'eager',
    },
  },

  social: {
    website: 'https://emiliodallatorre.it',
    email: '',
    linkedin: 'https://www.linkedin.com/in/emiliodallatorre',
    github: 'https://github.com/emiliodallatorre',
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Emilio Dalla Torre',
    role: 'Machine Learning R&D Engineer at Qualcomm',
    location: 'Cork, Ireland',
    focus: 'Machine learning for EDA, high-performance computing, and full-stack systems.',
    lead: "I work on machine learning for electronic design automation at Qualcomm, and I'm completing a double-degree master's in high performance computing engineering between Politecnico di Milano and KTH. I previously built full-stack systems at PwC and Accenture, and founded Bookaround and RealityFoundation.",
    headline: ['Machine learning,', 'shipped end to end.'],
    statementLabel: 'Work',
    statementTitle: 'Notes on machine learning and systems that ship.',
    statement:
      'I write short pieces on machine learning, the systems I build around it, and a few projects and trips worth remembering. Most of it comes from my work at Qualcomm, PwC, and Accenture, and personal projects like Bookaround and RealityFoundation.',
    educationLabel: 'Education',
    education: [
      {
        period: 'Sep 2025 – Jul 2027',
        location: 'Milan, Italy & Stockholm, Sweden',
        institution: 'Politecnico di Milano & KTH Royal Institute of Technology',
        school: 'EIT Master School',
        degree: 'Double Degree Master of Engineering',
        field: 'High Performance Computing Engineering & ICT Innovation',
        courses:
          'Advanced Methods for Scientific Computing, Applied Statistics, Artificial Neural Networks and Deep Learning, Bayesian Learning and Montecarlo Simulation, Advanced Mathematical Models in Finance',
        achievements: [] as string[],
      },
      {
        period: 'Sep 2020 – Dec 2023',
        location: 'Venice, Italy',
        institution: "Ca' Foscari University of Venice",
        school: 'Department of Molecular Sciences and Nanosystems',
        degree: 'Bachelor of Engineering',
        field: 'Engineering Physics',
        thesis:
          'Cloud-Deployed Machine Learning for Inversion Time Estimation in Late Gadolinium-Enhanced MRI (in publication, <a href="https://link.springer.com/journal/13244/articles" target="_blank" rel="noopener">Insights into Imaging</a>)',
        thesisSupervisor: 'Prof. Marco Salvatore Nobile',
        courses:
          'Informatics I & II, Calculus I & II, Physics I & II, Quantum Mechanics, Statistics, Business Administration',
        achievements: [
          'Developed <a href="https://www.unive.it/pag/16584/?tx_news_pi1[news]=15767" target="_blank" rel="noopener">ML model</a> to predict optimal TI for LGE MRI, deployed on scalable cloud architecture with mobile frontend',
          'Awarded the role of Subject Matter Expert for INFO/01-A (Informatics) in recognition of the value of the thesis',
        ],
      },
    ],
    careerLabel: 'Career',
    career: [
      {
        period: 'Mar 2026 – Present',
        location: 'Cork, Ireland',
        company: 'Qualcomm',
        department: '',
        title: 'System on Chip Machine Learning Research and Development Intern',
        subtitle: '',
        note: '',
        bullets: [
          'Machine learning for Electronic Design Automation (EDA) with a focus on placement and routing',
          'Generative AI for macro and mixed-size placement, and reinforcement learning for routing optimization',
          "Porting of ML models and libraries to Qualcomm's proprietary hardware and software stack, including Hexagon NPUs",
        ],
      },
      {
        period: 'Oct 2023 – Nov 2025',
        location: 'Milan, Italy',
        company: 'PwC',
        department: 'Digital Innovation & Strategy',
        title: 'Associate',
        subtitle: 'Full Stack Software Engineering',
        note: '',
        bullets: [
          'Developed full-stack solutions with Java Spring Boot and Flutter for scalable document management systems',
          'Deployed AI features using Kubernetes on GCP/Azure and led project coordination with clients to meet business objectives',
          'Achieved top-tier performance, far surpassing expectations, and awarded Impact Tier 1 in Internal Performance Review',
        ],
      },
      {
        period: 'Apr 2023 – Oct 2023',
        location: 'Padua, Italy',
        company: 'Accenture',
        department: 'Financial Advisory Solutions & Technology',
        title: 'Software Analyst',
        subtitle: '',
        note: '',
        bullets: [
          'Contributed to the development and maintenance of core banking software used by major Italian banks',
          'Built ML models on OpenTelemetry data to predict core microservice failures and improve scaling strategy',
        ],
      },
      {
        period: 'Sep 2023 – Oct 2024',
        location: 'Milan, Italy',
        company: 'Università degli Studi di Milano-Bicocca',
        department: '',
        title: 'Undergraduate Researcher',
        subtitle: '',
        note: '',
        bullets: [
          'Developed ML models to estimate optimal Inversion Time (TI) in LGE MRI using SHAP values for interpretability and sensitivity analysis in the absence of analytic regression solutions',
          'Built TensorFlow models optimized for embedded and mobile execution with quantization and pruning for real-time use',
          'Created Flutter frontend with FastAPI backend and Firebase integration for real-time interaction with deployed ML models',
        ],
      },
    ],
    projectsLabel: 'Projects',
    interests: [
      'Machine learning for EDA and high-performance computing',
      'Founding and shipping full-stack products end to end, like Bookaround and RealityFoundation',
      'Media provenance and authenticity infrastructure',
    ],
    interestsLabel: 'Interests',
    interestsHeading: 'What I keep coming back to',
  },
};

export default config;
