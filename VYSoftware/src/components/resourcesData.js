import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import { FaBook, FaVideo, FaFileAlt, FaCode } from "react-icons/fa";

export const resourcesData = [
  {
    id: 1,
    slug: "scalable-nodejs-apps",
    title: "Building Scalable Node.js Applications",
    description:
      "A comprehensive guide to architecting production-ready Node.js applications with best practices and optimization techniques.",
    tag: "Engineering",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Nov 2025",
    author: "Team VY Engineering",
    readTime: "12 min read",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Scaling is not only about throughput—it's about clarity, stability, and controlled evolution. This guide covers architectural structure, service boundaries, observability, and rollout safety.",
          "Whether you're building your first Node.js service or optimizing an existing system, understanding these principles will help you create maintainable and performant applications.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture Patterns",
        body: [
          "Choose between modular monoliths or microservices based on team maturity and operational readiness. There's no one-size-fits-all solution.",
          "Use ports-and-adapters architecture to keep business logic independent of frameworks and I/O operations. This separation makes your code testable and maintainable.",
        ],
        bullets: [
          "Keep domain logic pure and self-contained",
          "Push integrations to the edges of your system",
          "Use environment-based configuration and stateless runtime processes",
          "Apply dependency injection for better testing",
        ],
        image: Image2,
      },
      {
        id: "observability",
        heading: "Observability & Performance",
        body: [
          "Focus on the Four Golden Signals: latency, throughput, errors, and saturation. These metrics give you a complete picture of system health.",
          "Profile performance to understand where optimization matters—not where it's assumed. Use tools like clinic.js and 0x for profiling.",
        ],
        callout:
          "Pro Tip: Use correlation IDs across HTTP and message boundaries to trace end-to-end flow through distributed systems.",
      },
      {
        id: "deployment",
        heading: "Deployment & Reliability",
        body: [
          "Blue-green and canary deployments reduce release risk and simplify rollbacks. Always have a strategy to revert changes quickly.",
          "Scale reactively based on CPU and load metrics. Use circuit breakers to prevent cascade failures across your services.",
        ],
        code: `// Simple health check endpoint (Express)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    ok: true, 
    uptime: process.uptime(),
    timestamp: Date.now()
  });
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  await server.close();
  await db.disconnect();
  process.exit(0);
});`,
      },
    ],
  },

  {
    id: 2,
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    description:
      "Master advanced React patterns to build lightning-fast user interfaces and improve overall application performance.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaVideo,
    image: Image3,
    date: "Nov 2025",
    author: "VY Frontend Guild",
    readTime: "10 min read",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Performance comes from reducing unnecessary work. The best optimization is the work you don't do.",
          "Start by measuring with React Profiler, Lighthouse, and Web Vitals. You can't optimize what you can't measure.",
        ],
      },
      {
        id: "rendering",
        heading: "Rendering Strategies",
        body: [
          "Memoize components that receive stable props using React.memo. This prevents unnecessary re-renders.",
          "Virtualize long lists using libraries like react-window or react-virtual. Schedule non-urgent updates with useTransition and useDeferredValue.",
        ],
        code: `import React, { useMemo } from 'react';

const List = React.memo(function List({ items }) {
  return items.map(i => <Row key={i.id} data={i} />);
});

// Use useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);`,
        image: Image3,
      },
      {
        id: "bundles",
        heading: "Bundles & Network",
        body: [
          "Code-split by route and prefetch likely next pages. Use React.lazy and Suspense for dynamic imports.",
          "Use next-gen image formats (WebP, AVIF) and responsive scaling. Lazy load images below the fold.",
        ],
        callout:
          "Remember: Keep track of total JavaScript executed per screen—not just bundle size. Parse and compile time matters too.",
      },
    ],
  },

  {
    id: 3,
    slug: "mongodb-design-patterns",
    title: "MongoDB Database Design Patterns",
    description:
      "Learn essential database design patterns and best practices for NoSQL databases using MongoDB at scale.",
    tag: "Engineering",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image4,
    date: "Oct 2025",
    author: "Data Platform Team",
    readTime: "9 min read",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Document shape should match read paths to avoid joins at runtime. MongoDB is designed for document-oriented access patterns.",
          "Embed when access patterns are localized; reference when relationships are broad and frequently changing.",
        ],
      },
      {
        id: "patterns",
        heading: "Common Patterns",
        body: [
          "Outlier and subset patterns keep common reads efficient while handling edge cases gracefully.",
          "Bucket and computed patterns reduce storage and query overhead for time-series and analytics workloads.",
        ],
        bullets: [
          "Embed for small owned sets (1-to-few relationships)",
          "Reference for many-to-many relationships",
          "Index compound fields for common queries",
          "Use aggregation pipeline for complex transformations",
        ],
        image: Image4,
      },
    ],
  },

  {
    id: 4,
    slug: "modern-ui-design-systems",
    title: "Modern UI Design Systems",
    description:
      "Design scalable, maintainable design systems that work seamlessly across all your products and platforms.",
    tag: "Design",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Oct 2025",
    author: "Design Language Team",
    readTime: "8 min read",
    sections: [
      {
        id: "tokens",
        heading: "Design Tokens & Theming",
        body: [
          "Design tokens act as a shared language across platforms. They're the atomic building blocks of your design system.",
          "Automate token distribution to web and native targets using tools like Style Dictionary or Theo.",
        ],
        image: Image2,
      },
      {
        id: "components",
        heading: "Components & States",
        body: [
          "Document all component states, accessibility roles, and keyboard behavior. Your design system is only as good as its documentation.",
          "Use Storybook and usage insights to guide improvements. Track which components are used most and invest there.",
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "docker-containerization-masterclass",
    title: "Docker & Containerization Masterclass",
    description:
      "Complete guide to containerizing applications and managing deployment pipelines with Docker and container orchestration.",
    tag: "DevOps",
    category: "Course",
    icon: FaVideo,
    image: Image3,
    date: "Oct 2025",
    author: "Platform Enablement",
    readTime: "11 min read",
    sections: [
      {
        id: "basics",
        heading: "Images & Layers",
        body: [
          "Use minimal base images and avoid unnecessary layers. Every layer adds size and complexity.",
          "Multi-stage builds keep runtime images small and secure by separating build-time and runtime dependencies.",
        ],
        code: `FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /srv/app
COPY --from=build /app/dist ./
EXPOSE 3000
CMD ["node", "server.js"]`,
        image: Image3,
      },
      {
        id: "workflow",
        heading: "Local → CI → Production",
        body: [
          "Use reproducible builds and sign images before release. Version your images with semantic versioning.",
          "Keep dev environments aligned using Docker Compose or dev containers. What works locally should work in production.",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "aws-cloud-infrastructure-essentials",
    title: "AWS Cloud Infrastructure Essentials",
    description:
      "Master AWS services and build highly available, scalable cloud infrastructure for your applications and services.",
    tag: "Cloud",
    category: "Guide",
    icon: FaBook,
    image: Image4,
    date: "Sep 2025",
    author: "Cloud Center of Excellence",
    readTime: "10 min read",
    sections: [
      {
        id: "ha",
        heading: "High Availability",
        body: [
          "Distribute workloads across multiple Availability Zones for fault tolerance. Design for failure from day one.",
          "Use managed services with built-in failover when possible. Let AWS handle the undifferentiated heavy lifting.",
        ],
        image: Image4,
      },
      {
        id: "security",
        heading: "Security Posture",
        body: [
          "Apply least-privilege IAM policies, monitor all activity, and enforce encryption everywhere—at rest and in transit.",
          "Use secret rotation and continuous policy auditing with AWS Config and CloudTrail.",
        ],
      },
    ],
  },

  {
    id: 7,
    slug: "typescript-advanced-types",
    title: "TypeScript Advanced Types",
    description:
      "Deep dive into TypeScript's advanced type system to write more type-safe and maintainable code for production.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaCode,
    image: Image2,
    date: "Sep 2025",
    author: "Type Guild",
    readTime: "9 min read",
    sections: [
      {
        id: "mapped",
        heading: "Mapped & Conditional Types",
        body: [
          "Mapped types help reshape structures safely. They're powerful for creating variations of existing types.",
          "Conditional types enable type-level logic and constraints. Use them to create flexible, type-safe APIs.",
        ],
        code: `type ReadonlyKeys<T> = {
  readonly [K in keyof T]: T[K]
};

type Nullable<T> = T | null;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};`,
        image: Image2,
      },
      {
        id: "patterns",
        heading: "Patterns in Applications",
        body: [
          "Discriminated unions model multi-state workflows cleanly. They're perfect for state machines and reducers.",
          "Branded types prevent accidental mixing of identifiers like UserID and ProductID.",
        ],
      },
    ],
  },

  {
    id: 8,
    slug: "kubernetes-orchestration-guide",
    title: "Kubernetes Orchestration Guide",
    description:
      "Learn how to deploy, manage, and scale containerized applications using Kubernetes at production scale.",
    tag: "DevOps",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image3,
    date: "Sep 2025",
    author: "Platform SRE",
    readTime: "10 min read",
    sections: [
      {
        id: "controllers",
        heading: "Controllers & Workloads",
        body: [
          "Use Deployments for stateless apps and StatefulSets for workloads that need stable identity and persistent storage.",
          "Jobs and CronJobs are built for finite or scheduled work. Choose the right workload type for your use case.",
        ],
        image: Image3,
      },
      {
        id: "network",
        heading: "Networking & Operations",
        body: [
          "Use Services and Ingress to expose workloads cleanly. Services provide stable endpoints, Ingress handles routing.",
          "Enforce boundaries using NetworkPolicies and runtime telemetry. Security and observability go hand-in-hand.",
        ],
      },
    ],
  },
];

export function getResourceById(id) {
  return resourcesData.find((r) => String(r.id) === String(id));
}

export function getRelatedResources(currentId, limit = 3) {
  return resourcesData
    .filter((r) => r.id !== Number(currentId))
    .slice(0, limit);
}
