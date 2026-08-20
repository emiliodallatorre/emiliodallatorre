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
    description: 'Notes on machine learning, systems, and projects worth remembering.',
    author: 'Emilio Dalla Torre',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: '/og.png',
  },

  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Posts', href: '/posts' }, { label: 'About', href: '/about' }]
  nav: [] as NavItem[],

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
    lead: "Emilio works on machine learning for electronic design automation at Qualcomm, and is completing a double-degree master's in high performance computing engineering between Politecnico di Milano and KTH. He previously built full-stack systems at PwC and Accenture, and founded Bookaround and RealityFoundation.",
    headline: ['Machine learning,', 'shipped end to end.'],
    statementLabel: 'Work',
    statementTitle: 'Notes on machine learning and systems that ship.',
    statement:
      'This site collects short write-ups on machine learning, the systems built around it, and a few projects and trips worth remembering. Most of it comes out of work at Qualcomm, PwC, and Accenture, and personal projects like Bookaround and RealityFoundation.',
    careerLabel: 'Career',
    career: [
      {
        period: 'Mar 2026 – Present',
        title: 'Qualcomm — system on chip machine learning R&D intern',
        description:
          'Machine learning for electronic design automation, covering placement and routing, and porting models to Hexagon NPUs.',
      },
      {
        period: 'Oct 2023 – Nov 2025',
        title: 'PwC — associate, full stack software engineering',
        description:
          'Built full-stack document management systems with Java Spring Boot and Flutter, and deployed AI features on Kubernetes across GCP and Azure.',
      },
      {
        period: 'Apr 2023 – Oct 2023',
        title: 'Accenture — software analyst',
        description:
          'Contributed to core banking software used by major Italian banks, and built ML models on OpenTelemetry data to predict microservice failures.',
      },
      {
        period: 'Sep 2023 – Oct 2024',
        title: 'Università degli Studi di Milano-Bicocca — undergraduate researcher',
        description:
          'Developed ML models to estimate inversion time in LGE MRI, with TensorFlow models optimized for embedded and mobile execution.',
      },
    ],
    interests: [
      'Machine learning for EDA and high-performance computing',
      'Founding and shipping full-stack products end to end, like Bookaround and RealityFoundation',
      'Media provenance and authenticity infrastructure',
    ],
    interestsLabel: 'Interests',
    interestsHeading: 'What the work keeps returning to',
  },
};

export default config;
