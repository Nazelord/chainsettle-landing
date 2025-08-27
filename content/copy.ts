export const siteConfig = {
  name: "ChainSettle",
  description: "The trust‑minimized oracle powering Web3 automation",
  url: "https://chainsettle.com",
}

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Developers", href: "/developers" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    { name: "Privacy Policy", href: "https://docsend.com/view/xdt8kjhhrwakwqfa"},
    { name: "Terms of Service", href: "https://docsend.com/view/khkq7b925pjmec9i" },
  ],
}

export const hero = {
  headline: "The Trust‑Minimized Oracle Powering Web3 Automation",
  description: "ChainSettle is an Infrastructure‑as‑a‑Service platform that bridges Web2 systems and Web3 smart contracts. Build reliable automations with attestations, triggers, and an upcoming SDK.",
  primaryCta: "Explore Products",
  secondaryCta: "Contact Us",
}

export const valuePropositions = [
  {
    title: "IaaS + SDK",
    description: "Complete infrastructure platform with developer tools for seamless Web3 integration.",
  },
  {
    title: "Web2↔Web3 Bridge",
    description: "Reliable connectivity between traditional systems and blockchain networks.",
  },
  {
    title: "Trust‑Minimized Oracle",
    description: "Secure, verifiable data feeds with cryptographic attestations.",
  },
  {
    title: "Institution‑Ready",
    description: "Enterprise-grade reliability and compliance for institutional adoption.",
  },
]

export const products = {
  overview: {
    title: "Our Products",
    description: "Enterprise-grade Web3 infrastructure solutions designed for institutional adoption.",
  },
  items: [
    {
      id: "escrow-bridge",
      title: "Escrow Bridge",
      description: "Secure Multi-chain escrow solutions with automated settlement and trust-minimized operations.",
      features: ["Multi-chain compatibility", "Automated settlement", "Trust-minimized security"],
      status: "Independent Startup",
      href: "/products/escrow-bridge",
    },
    {
      id: "rwa-studio",
      title: "RWA Studio",
      description: "Real-world asset tokenization platform with comprehensive tooling and compliance features.",
      features: ["Asset tokenization", "Compliance tooling", "Workflow automation"],
      status: "Independent Startup",
      href: "/products/rwa-studio",
    },
  ],
}

export const escrowBridge = {
  title: "Escrow Bridge",
  subtitle: "Secure Multi-Chain Escrow Solutions",
  description: "ChainSettle's Escrow Bridge provides secure, automated escrow services across multiple blockchain networks. Our trust-minimized architecture ensures reliable settlement while maintaining transparency and security.",
  notice: "Escrow Bridge is positioned as an independent startup venture, separate from ChainSettle's core infrastructure offerings.",
  features: [
    {
      title: "Multi-Chain Compatibility",
      description: "Support for major blockchain networks with seamless interoperability.",
    },
    {
      title: "Automated Settlement",
      description: "Smart contract automation for efficient and timely escrow resolution.",
    },
    {
      title: "Trust-Minimized Security",
      description: "Cryptographic proofs and attestations ensure maximum security.",
    },
    {
      title: "Enterprise Integration",
      description: "APIs and SDKs for easy integration into existing business processes.",
    },
  ],
  workflow: {
    title: "How It Works",
    steps: [
      {
        step: "01",
        title: "Escrow Creation",
        description: "Parties create escrow agreements with defined conditions and terms.",
      },
      {
        step: "02",
        title: "Asset Deposit",
        description: "Assets are securely deposited into smart contract escrow.",
      },
      {
        step: "03",
        title: "Condition Verification",
        description: "Oracle network verifies fulfillment of escrow conditions.",
      },
      {
        step: "04",
        title: "Automated Settlement",
        description: "Smart contracts automatically release assets upon verification.",
      },
    ],
  },
}

export const rwaStudio = {
  title: "RWA Studio",
  subtitle: "Real-World Asset Tokenization Platform",
  description: "RWA Studio operates as an independent startup focusing on real-world asset tokenization. The platform provides comprehensive tooling for asset digitization, compliance management, and workflow automation.",
  notice: "RWA Studio is positioned as an independent startup venture, separate from ChainSettle's core infrastructure offerings.",
  features: [
    {
      title: "Asset Tokenization",
      description: "Convert real-world assets into digital tokens with full compliance support.",
    },
    {
      title: "Compliance Management",
      description: "Built-in regulatory compliance tools for various jurisdictions.",
    },
    {
      title: "Workflow Automation",
      description: "Streamlined processes for asset onboarding and lifecycle management.",
    },
    {
      title: "Institutional Support",
      description: "Enterprise-grade security and support for institutional clients.",
    },
  ],
}

export const about = {
  title: "About ChainSettle",
  vision: {
    title: "Our Vision",
    description: "To create the most reliable and secure infrastructure for Web3 automation, enabling seamless integration between traditional systems and blockchain networks.",
  },
  mission: {
    title: "Our Mission",
    description: "We provide enterprise-grade infrastructure solutions that bridge Web2 and Web3 systems, empowering organizations to build trust-minimized automations with confidence.",
  },
  team: {
    title: "Our Team",
    description: "ChainSettle is built by a lean team of experienced engineers and Web3 infrastructure specialists committed to delivering institutional-grade solutions.",
    placeholder: "Team member profiles and detailed information will be available soon.",
  },
}

export const developers = {
  title: "Developer Resources",
  subtitle: "SDK Coming Soon",
  description: "We're building comprehensive developer tools and SDKs to make Web3 infrastructure integration seamless. Our documentation and development resources will be available soon.",
  features: [
    {
      title: "Comprehensive SDK",
      description: "Full-featured software development kit for easy integration.",
    },
    {
      title: "API Documentation",
      description: "Complete API reference with examples and best practices.",
    },
    {
      title: "Code Examples",
      description: "Sample implementations and integration patterns.",
    },
    {
      title: "Developer Support",
      description: "Technical support and community resources for developers.",
    },
  ],
  cta: {
    primary: "Read Documentation (Wiki)",
    secondary: "Join Developer Community",
  },
}

export const contact = {
  title: "Contact Us",
  description: "Get in touch with our team for partnerships, support, or general inquiries.",
  methods: [
    {
      type: "Email",
      label: "General Inquiries",
      value: "info@chainsettle.com",
      href: "mailto:info@chainsettle.com",
      icon: "mail",
    },
    {
      type: "LinkedIn",
      label: "Professional Network",
      value: "ChainSettle",
      href: "https://linkedin.com/company/chainsettle",
      icon: "linkedin",
    },
    {
      type: "Telegram",
      label: "Community Chat",
      value: "@chainsettle",
      href: "https://t.me/chainsettle",
      icon: "send",
    },
  ],
}

export const footer = {
  copyright: "© 2025 ChainSettle Inc. All rights reserved.",
  description: "Building the trust‑minimized infrastructure for Web3 automation.",
}