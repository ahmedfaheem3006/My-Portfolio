import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import jsImg from "../assets/java.png";
import reactImg from "../assets/ReactIMG.png";
import angularImg from "../assets/Angular_gradient_logo.png";
import dotnetImg from "../assets/Microsoft_.NET_logo.svg.webp";
import nodeImg from "../assets/nodejs-icon.svg";
import expressImg from "../assets/express.png";
import sqlImg from "../assets/sql-database-generic.svg";
import efImg from "../assets/EFcore.svg";

const dataOfProjects = [
  {
    id: 1,
    name: "Developer Dashboard UI",
    projectImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://dashboard.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/dashboard-ui",
    techImage: [htmlImg, cssImg, jsImg],
    tech: "html , css ,js",
    status: "normal",
    description: "A highly responsive interactive dashboard interface designed for modern web developers. It features real-time data widgets, elegant dark/light theme switching, modular flexbox/grid layouts, and customizable user settings. Built using semantic HTML5, pure CSS3, and native JavaScript for maximum speed.",
    features: [
      "Modular dashboard widgets",
      "Dynamic data charts & statistics selector",
      "Sleek and responsive theme switcher",
      "Highly optimized for speed and SEO structure"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript ES6"]
  },
  {
    id: 2,
    name: "Premium Corporate Landing Page",
    projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://landing.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/landing-page",
    techImage: [htmlImg, cssImg, jsImg],
    tech: "html , css ,js",
    status: "normal",
    description: "A high-conversion premium corporate landing page optimized for SaaS startups and enterprise agencies. It features sleek parallax scrolling effects, smooth CSS3 transitions, contact submission integrations, and dynamic pricing package selectors.",
    features: [
      "High-conversion lead capture structures",
      "CSS3 micro-interactions and smooth animations",
      "Interactive pricing table and FAQs dropdown",
      "100% responsive and accessible markup"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "SEO Best Practices"]
  },
  {
    id: 3,
    name: "Collaborative Task Board",
    projectImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://tasks.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/angular-tasks",
    techImage: [angularImg, cssImg],
    tech: "Angular",
    status: "normal",
    description: "An advanced project management task board (Trello style) built on Angular. It supports drag-and-drop task movement, multi-user assignment, deadline tracking, task status updates, and interactive notifications. Perfect for agile teams looking to optimize workflows.",
    features: [
      "Drag-and-drop task card boards",
      "Real-time notifications and activity log",
      "Advanced filtering by task tags & assignees",
      "Angular routing and state management"
    ],
    techStack: ["Angular 16+", "TypeScript", "Tailwind CSS", "RxJS"]
  },
  {
    id: 4,
    name: "Enterprise E-Store Client",
    projectImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://shop.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/angular-ecommerce",
    techImage: [angularImg, htmlImg, cssImg],
    tech: "Angular",
    status: "normal",
    description: "A complete client-side frontend for an enterprise-level e-commerce application. Developed with Angular, it includes user registration/login pages, category filtering, a shopping cart with local persistence, payment gateway integrations, and order histories.",
    features: [
      "Dynamic product catalog and category filters",
      "Persistent reactive shopping cart",
      "Stripe secure checkout integration flow",
      "Lazy-loaded routing for optimized performance"
    ],
    techStack: ["Angular", "TypeScript", "SCSS", "RxJS State Management"]
  },
  {
    id: 5,
    name: "Generative AI Chatbot Interface",
    projectImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://aichat.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/react-ai-chat",
    techImage: [reactImg, cssImg],
    tech: "React",
    status: "normal",
    description: "A state-of-the-art interactive chat application built with React, designed to talk directly with OpenAI's ChatGPT APIs. It offers streaming message text generation, markdown rendering, chat history caching, voice-to-text, and responsive dark layouts.",
    features: [
      "Real-time streaming text (SSE integration)",
      "Chat history search and browser local storage",
      "Syntax highlighting for code blocks inside answers",
      "Voice recognition microphone input support"
    ],
    techStack: ["React.js", "Framer Motion", "CSS Variables", "OpenAI APIs"]
  },
  {
    id: 6,
    name: "Crypto Asset Tracker",
    projectImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://crypto.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/crypto-tracker",
    techImage: [reactImg, htmlImg, cssImg],
    tech: "React",
    status: "normal",
    description: "A financial tracker application displaying live prices, market caps, and performance charts for major cryptocurrencies. Fetches data in real-time from the CoinGecko API, supporting customizable watchlists and investment simulation portfolios.",
    features: [
      "Live price feeds and interactive trend charts",
      "Custom user watchlist with persistence",
      "Portfolio simulation tracker with buy/sell transactions",
      "Instant search bar with filter toggles"
    ],
    techStack: ["React.js", "Chart.js", "Tailwind CSS", "CoinGecko API"]
  },
  {
    id: 7,
    name: "Clean Architecture Rest API",
    projectImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://api.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/clean-architecture-api",
    techImage: [dotnetImg, sqlImg, efImg],
    tech: ".NET",
    status: "normal",
    description: "A highly robust Enterprise Web API designed and developed using Clean Architecture patterns. It strictly isolates the domain, application, infrastructure, and presentation layers. Features CQRS (MediatR), secure token authorization, database migrations, and unit tests.",
    features: [
      "CQRS pattern implementation via MediatR",
      "Repository pattern with Entity Framework Core",
      "JWT-based security with roles and claims policy",
      "Auto-generated Swagger documentation and test coverage"
    ],
    techStack: ["ASP.NET Core Web API", "EF Core", "SQL Server", "MediatR", "xUnit"]
  },
  {
    id: 8,
    name: "Microservices Job Runner",
    projectImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://jobs.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/job-runner",
    techImage: [dotnetImg, efImg],
    tech: ".NET",
    status: "normal",
    description: "A background job processor backend built with ASP.NET Core and Hangfire. It manages asynchronous task executions, database updates, email queues, and reporting jobs in a distributed microservices environment, minimizing resource contention.",
    features: [
      "Hangfire background server configuration",
      "Retry policies with Exponential Backoff (Polly)",
      "Distributed lock mechanisms using Redis Cache",
      "Detailed admin dashboard panel for real-time monitoring"
    ],
    techStack: ["ASP.NET Core", "Hangfire", "EF Core", "PostgreSQL", "Redis"]
  },
  {
    id: 9,
    name: "Real-Time WebSocket Server",
    projectImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://chat.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/node-chat",
    techImage: [nodeImg, expressImg],
    tech: "node js",
    status: "normal",
    description: "A server side WebSocket engine running on Node.js and Socket.io. It supports concurrent multi-room chat sessions, typing indicators, user statuses, persistent message logs, and automatic reconnect triggers.",
    features: [
      "Persistent WebSocket connection pooling",
      "Real-time typing and active status indicators",
      "Chat rooms and direct messaging capabilities",
      "Cross-Origin Resource Sharing (CORS) authorization rules"
    ],
    techStack: ["Node.js", "Express.js", "Socket.io", "MongoDB"]
  },
  {
    id: 10,
    name: "Secure Auth Token Gateway",
    projectImage: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://auth.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/node-jwt-auth",
    techImage: [nodeImg, expressImg, sqlImg],
    tech: "node js",
    status: "normal",
    description: "A dedicated authentication microservice built using Node.js and Express. It handles secure user registrations, password hashing with bcrypt, JSON Web Token (JWT) issuance, sliding session refresh tokens, and brute-force protection.",
    features: [
      "Secure password hashing via bcrypt",
      "Access & Refresh token generation strategy",
      "Redis blacklist checking for invalidated tokens",
      "Rate-limiting and IP security policies"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT"]
  },
  {
    id: 11,
    name: "GenAI Project Dashboard",
    projectImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://pm.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/genai-pm-platform",
    techImage: [dotnetImg, reactImg, sqlImg],
    tech: "full stack",
    status: "favourite",
    description: "An advanced Full-Stack platform designed for software agencies to oversee generative AI development workflows. Connects a React web app with an ASP.NET Core backend using clean architecture. Includes project milestone trackers, LLM cost dashboards, and developer task assignment.",
    features: [
      "Interactive LLM cost and analytics charts",
      "Milestone-based project tracking calendar",
      "Secure role access policies (Admin, PM, Developer)",
      "Automated PDF project reporting and invoicing"
    ],
    techStack: ["ASP.NET Core Web API", "React.js", "SQL Server", "EF Core", "Chart.js"]
  },
  {
    id: 12,
    name: "Enterprise ERP System",
    projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    linkProject: "https://erp.ahmedfaheem.com",
    linkProjectGH: "https://github.com/ahmedfaheem3006/enterprise-erp",
    techImage: [dotnetImg, angularImg, efImg, sqlImg],
    tech: "full stack",
    status: "favourite",
    description: "A massive, distributed ERP (Enterprise Resource Planning) platform built for small-to-medium manufacturing firms. It handles inventory control, human resource scheduling, financial tracking, and purchase orders. Uses an Angular frontend connected with a CQRS-based ASP.NET Core backend.",
    features: [
      "Real-time inventory levels alerts and logging",
      "Complex payroll and employee scheduler modules",
      "Double-entry bookkeeping financial ledgers",
      "CQRS optimized read-write separations"
    ],
    techStack: ["ASP.NET Core Web API", "Angular 16+", "SQL Server", "EF Core", "Bootstrap 5"]
  }
];

export default dataOfProjects;
