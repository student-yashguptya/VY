// src/components/resourcesData.js
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import { FaBook, FaVideo, FaFileAlt, FaCode } from "react-icons/fa";

export const resourcesData = [
  {
    id: 1,
    slug: "scalable-nodejs-apps",
    title: "Building Scalable Node.js Applications",
    description:
      "Design Node.js services that remain reliable and understandable as systems and teams grow.",
    tag: "Engineering",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Nov 2025",
    author: "Team VY Engineering",
    readTime: "12 min",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Scaling is not only about throughput—it’s about clarity, stability, and controlled evolution.",
          "This guide covers architectural structure, service boundaries, observability, and rollout safety.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture Patterns",
        body: [
          "Choose between modular monoliths or microservices based on team maturity and operational readiness.",
          "Use ports-and-adapters architecture to keep business logic independent of frameworks and I/O.",
        ],
        bullets: [
          "Keep domain logic pure and self-contained.",
          "Push integrations to the edges of your system.",
          "Use environment-based configuration and stateless runtime processes.",
        ],
        image: Image2,
      },
      {
        id: "observability",
        heading: "Observability & Performance",
        body: [
          "Focus on the Four Golden Signals: latency, throughput, errors, and saturation.",
          "Profile performance to understand where optimization matters—not where it’s assumed.",
        ],
        callout:
          "Use correlation IDs across HTTP and message boundaries to trace end-to-end flow.",
      },
      {
        id: "deployment",
        heading: "Deployment & Reliability",
        body: [
          "Blue-green and canary deployments reduce release risk and simplify rollbacks.",
          "Scale reactively (CPU + load) and use circuit breakers to prevent cascade failure.",
        ],
        code: `# Simple health check (Express)
app.get('/health', (req, res) => res.status(200).json({ ok: true }))`,
      },
    ],
  },

  {
    id: 2,
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    description:
      "Improve rendering efficiency, reduce bundle cost, and maintain smooth UI interactions.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaVideo,
    image: Image3,
    date: "Nov 2025",
    author: "VY Frontend Guild",
    readTime: "10 min",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Performance comes from reducing unnecessary work.",
          "Start by measuring with React Profiler, Lighthouse, and Web Vitals.",
        ],
      },
      {
        id: "rendering",
        heading: "Rendering Strategies",
        body: [
          "Memoize components that receive stable props.",
          "Virtualize long lists and schedule non-urgent updates with `useTransition`.",
        ],
        code: `const List = React.memo(function List({ items }) {
  return items.map(i => <Row key={i.id} data={i} />);
});`,
        image: Image3,
      },
      {
        id: "bundles",
        heading: "Bundles & Network",
        body: [
          "Code-split by route and prefetch likely next pages.",
          "Use next-gen image formats and responsive scaling.",
        ],
        callout:
          "Keep track of total JavaScript executed per screen—not just bundle size.",
      },
    ],
  },

  {
    id: 3,
    slug: "mongodb-design-patterns",
    title: "MongoDB Database Design Patterns",
    description:
      "Model data around how it will be queried—not how it looks by itself.",
    tag: "Engineering",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image4,
    date: "Oct 2025",
    author: "Data Platform Team",
    readTime: "9 min",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Document shape should match read paths to avoid joins at runtime.",
          "Embed when access patterns are localized; reference when relationships are broad.",
        ],
      },
      {
        id: "patterns",
        heading: "Common Patterns",
        body: [
          "Outlier and subset patterns keep common reads efficient.",
          "Bucket and computed patterns reduce storage and query overhead.",
        ],
        bullets: ["Embed for small owned sets", "Reference for many-to-many", "Index compound fields"],
        image: Image4,
      },
    ],
  },

  {
    id: 4,
    slug: "modern-ui-design-systems",
    title: "Modern UI Design Systems",
    description:
      "A structured, scalable approach to interface design across multiple products.",
    tag: "Design",
    category: "Guide",
    icon: FaBook,
    image: Image2,
    date: "Oct 2025",
    author: "Design Language Team",
    readTime: "8 min",
    sections: [
      {
        id: "tokens",
        heading: "Tokens & Theming",
        body: [
          "Design tokens act as a shared language across platforms.",
          "Automate token distribution to web and native targets.",
        ],
        image: Image2,
      },
      {
        id: "components",
        heading: "Components & States",
        body: [
          "Document states, accessibility roles, and keyboard behavior.",
          "Use Storybook and usage insights to guide improvements.",
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "docker-containerization-masterclass",
    title: "Docker & Containerization Masterclass",
    description: "Build and ship software as portable, reproducible containers.",
    tag: "DevOps",
    category: "Course",
    icon: FaVideo,
    image: Image3,
    date: "Oct 2025",
    author: "Platform Enablement",
    readTime: "11 min",
    sections: [
      {
        id: "basics",
        heading: "Images & Layers",
        body: [
          "Use minimal base images and avoid unnecessary layers.",
          "Multi-stage builds keep runtime images small and secure.",
        ],
        code: `FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build
FROM node:20-alpine
COPY --from=build /app/dist /srv/app
CMD ["node","/srv/app/server.js"]`,
        image: Image3,
      },
      {
        id: "workflow",
        heading: "Local → CI → Production",
        body: [
          "Use reproducible builds and sign images before release.",
          "Keep dev environments aligned using compose or dev containers.",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "aws-cloud-infrastructure-essentials",
    title: "AWS Cloud Infrastructure Essentials",
    description:
      "Design reliable and scalable infrastructure in AWS with confidence.",
    tag: "Cloud",
    category: "Guide",
    icon: FaBook,
    image: Image4,
    date: "Sep 2025",
    author: "Cloud Center of Excellence",
    readTime: "10 min",
    sections: [
      {
        id: "ha",
        heading: "High Availability",
        body: [
          "Distribute workloads across multiple AZs.",
          "Use managed services with built-in failover when possible.",
        ],
        image: Image4,
      },
      {
        id: "security",
        heading: "Security Posture",
        body: [
          "Apply least-privilege IAM, monitor activity, and enforce encryption everywhere.",
          "Use secret rotation and continuous policy auditing.",
        ],
      },
    ],
  },

  {
    id: 7,
    slug: "typescript-advanced-types",
    title: "TypeScript Advanced Types",
    description:
      "Use the type system to prevent mistakes and express intent clearly.",
    tag: "Frontend",
    category: "Tutorial",
    icon: FaCode,
    image: Image2,
    date: "Sep 2025",
    author: "Type Guild",
    readTime: "9 min",
    sections: [
      {
        id: "mapped",
        heading: "Mapped & Conditional Types",
        body: [
          "Mapped types help reshape structures safely.",
          "Conditional types enable type-level logic and constraints.",
        ],
        code: `type ReadonlyKeys<T> = {
  readonly [K in keyof T]: T[K]
};`,
        image: Image2,
      },
      {
        id: "patterns",
        heading: "Patterns in Applications",
        body: [
          "Discriminated unions model multi-state workflows cleanly.",
          "Branded types prevent accidental mixing of identifiers.",
        ],
      },
    ],
  },

  {
    id: 8,
    slug: "kubernetes-orchestration-guide",
    title: "Kubernetes Orchestration Guide",
    description:
      "Automate deployment, scaling, and management of containerized workloads.",
    tag: "DevOps",
    category: "Documentation",
    icon: FaFileAlt,
    image: Image3,
    date: "Sep 2025",
    author: "Platform SRE",
    readTime: "10 min",
    sections: [
      {
        id: "controllers",
        heading: "Controllers & Workloads",
        body: [
          "Use Deployments for stateless apps and StatefulSets for stable identity workloads.",
          "Jobs and CronJobs are built for finite or scheduled work.",
        ],
        image: Image3,
      },
      {
        id: "network",
        heading: "Networking & Operations",
        body: [
          "Use Services and Ingress to expose workloads cleanly.",
          "Enforce boundaries using NetworkPolicies and runtime telemetry.",
        ],
      },
    ],
  },
];

export function getResourceById(id) {
  return resourcesData.find((r) => String(r.id) === String(id));
}

export function getRelatedResources(currentId, limit = 3) {
  return resourcesData.filter((r) => r.id !== Number(currentId)).slice(0, limit);
}
