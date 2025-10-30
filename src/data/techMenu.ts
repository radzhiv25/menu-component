import {
  Home,
  Layers,
  Plug,
  ServerCog,
  Cloud,
  FlaskConical,
  BookOpen,
  LifeBuoy,
  LineChart,
  Mail,
  Network,
  Database,
  Settings2,
  Boxes,
  Lock,
  Cpu,
  Gauge,
  FolderOpen,
} from "lucide-react"
import type { Menu } from "../types/menu"

export const techMenu: Menu = [
  {
    title: "Home",
    description: "Welcome to our platform for developers and architects",
    icon: Home,
    subMenu: [],
  },
  {
    title: "Architecture Solutions",
    description: "Modern design patterns, scalability and reliability",
    icon: Layers,
    subMenu: [
      {
        title: "Microservices & APIs",
        description: "Distributed systems, gateways, and service orchestration",
        icon: Network,
        subMenu: [
          {
            title: "API Gateways",
            description: "Manage routing, authentication, and rate limiting for services",
            icon: Plug,
            subMenu: [
              {
                title: "Kong",
                description: "Open-source API gateway for routing and load balancing",
                icon: Boxes,
                subMenu: [],
              },
              {
                title: "NGINX",
                description: "High-performance gateway and reverse proxy for APIs",
                icon: Boxes,
                subMenu: [],
              },
            ],
          },
          {
            title: "Communication",
            description: "Service-to-service communication methods and protocols",
            icon: Cpu,
            subMenu: [
              {
                title: "gRPC",
                description: "High-performance RPC framework for service communication",
                icon: Cpu,
                subMenu: [],
              },
              {
                title: "Message Queues",
                description: "Reliable asynchronous messaging with broker-based systems",
                icon: Database,
                subMenu: [],
              },
            ],
          },
          {
            title: "Service Discovery",
            description: "Dynamic service registry and load balancing solutions",
            icon: Settings2,
            subMenu: [
              {
                title: "Eureka",
                description: "Netflix OSS registry for locating microservices dynamically",
                icon: Gauge,
                subMenu: [],
              },
              {
                title: "Consul",
                description: "Service mesh tool for discovery, config, and segmentation",
                icon: Gauge,
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        title: "Containerization",
        description: "Container management and orchestration for scalable deployment",
        icon: Boxes,
        subMenu: [
          {
            title: "Kubernetes",
            description: "Cluster management and orchestration for containers",
            icon: Settings2,
            subMenu: [
              {
                title: "Helm Charts",
                description: "Reusable templates for deploying Kubernetes applications",
                icon: FolderOpen,
                subMenu: [],
              },
              {
                title: "Namespaces",
                description: "Isolate workloads and manage multi-tenant clusters",
                icon: FolderOpen,
                subMenu: [],
              },
            ],
          },
          {
            title: "Docker",
            description: "Containerization engine for building and running applications",
            icon: Boxes,
            subMenu: [
              {
                title: "Compose",
                description: "Define multi-container applications using YAML configurations",
                icon: Boxes,
                subMenu: [],
              },
              {
                title: "Registry",
                description: "Centralized storage for container images",
                icon: Database,
                subMenu: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Integrations",
    description: "Connect services, tools, and data pipelines seamlessly",
    icon: Plug,
    subMenu: [
      {
        title: "Authentication",
        description: "Identity and access management integrations",
        icon: Lock,
        subMenu: [
          {
            title: "OAuth 2.0",
            description: "Industry-standard protocol for delegated access control",
            icon: Lock,
            subMenu: [],
          },
          {
            title: "SAML",
            description: "XML-based authentication for enterprise identity federation",
            icon: Lock,
            subMenu: [],
          },
        ],
      },
      {
        title: "Payments",
        description: "Secure and scalable digital payment integrations",
        icon: LineChart,
        subMenu: [
          {
            title: "Stripe",
            description: "Payment processing and billing for online businesses",
            icon: LineChart,
            subMenu: [],
          },
          {
            title: "Razorpay",
            description: "Payment gateway for transactions in India and Asia-Pacific",
            icon: LineChart,
            subMenu: [],
          },
        ],
      },
      {
        title: "Data Pipelines",
        description: "ETL and analytics integrations for data movement and insights",
        icon: Database,
        subMenu: [
          {
            title: "ETL Tools",
            description: "Extract, transform, and load data efficiently across sources",
            icon: Database,
            subMenu: [
              {
                title: "Airbyte",
                description: "Open-source data integration and replication platform",
                icon: Database,
                subMenu: [],
              },
              {
                title: "Fivetran",
                description: "Fully managed data pipeline automation platform",
                icon: Database,
                subMenu: [],
              },
            ],
          },
          {
            title: "Analytics",
            description: "Data warehousing and analytical platforms for BI solutions",
            icon: LineChart,
            subMenu: [
              {
                title: "BigQuery",
                description: "Serverless data warehouse for large-scale analytics",
                icon: Database,
                subMenu: [],
              },
              {
                title: "Snowflake",
                description: "Cloud-based data platform for analytics and sharing",
                icon: Database,
                subMenu: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "DevOps & CI/CD",
    description: "Automation, infrastructure, and deployment pipelines",
    icon: ServerCog,
    subMenu: [
      {
        title: "Continuous Integration",
        description: "Automate builds, tests, and deployments for rapid delivery",
        icon: Gauge,
        subMenu: [
          {
            title: "GitHub Actions",
            description: "Workflow automation for building and deploying code",
            icon: Gauge,
            subMenu: [],
          },
          {
            title: "Jenkins",
            description: "Open-source automation server for continuous delivery",
            icon: Gauge,
            subMenu: [],
          },
        ],
      },
      {
        title: "Infrastructure as Code",
        description: "Automate infrastructure provisioning using code-based configs",
        icon: Layers,
        subMenu: [
          {
            title: "Terraform",
            description: "Infrastructure provisioning with declarative syntax",
            icon: Layers,
            subMenu: [],
          },
          {
            title: "Pulumi",
            description: "IaC using familiar programming languages",
            icon: Layers,
            subMenu: [],
          },
        ],
      },
      {
        title: "Monitoring & Observability",
        description: "Track performance, uptime, and system health metrics",
        icon: Gauge,
        subMenu: [
          {
            title: "Grafana",
            description: "Visualization and analytics for system monitoring",
            icon: Gauge,
            subMenu: [],
          },
          {
            title: "Prometheus",
            description: "Time-series metrics monitoring and alerting toolkit",
            icon: Gauge,
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    title: "Cloud & Scalability",
    description: "Distributed systems and cloud-native infrastructure",
    icon: Cloud,
    subMenu: [
      {
        title: "AWS",
        description: "Amazon Web Services for scalable cloud solutions",
        icon: Cloud,
        subMenu: [
          {
            title: "EC2 & Auto Scaling",
            description: "Virtual machines and autoscaling for flexible workloads",
            icon: Cloud,
            subMenu: [],
          },
          {
            title: "Lambda",
            description: "Serverless compute for event-driven workloads",
            icon: Cpu,
            subMenu: [],
          },
        ],
      },
      {
        title: "GCP",
        description: "Google Cloud Platform for data and compute solutions",
        icon: Cloud,
        subMenu: [
          {
            title: "Compute Engine",
            description: "Virtualized infrastructure for running scalable workloads",
            icon: Cloud,
            subMenu: [],
          },
          {
            title: "Cloud Run",
            description: "Deploy containerized apps easily with autoscaling",
            icon: ServerCog,
            subMenu: [],
          },
        ],
      },
      {
        title: "Azure",
        description: "Microsoft Azure cloud for enterprise applications",
        icon: Cloud,
        subMenu: [
          {
            title: "Functions",
            description: "Serverless compute service for event-based applications",
            icon: Cpu,
            subMenu: [],
          },
          {
            title: "AKS",
            description: "Azure Kubernetes Service for container orchestration",
            icon: Boxes,
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    description: "Knowledge base, developer docs, and learning materials",
    icon: BookOpen,
    subMenu: [
      {
        title: "Documentation",
        description: "Technical and API documentation for developers",
        icon: BookOpen,
        subMenu: [],
      },
      {
        title: "API Reference",
        description: "Detailed specifications for API endpoints and responses",
        icon: BookOpen,
        subMenu: [],
      },
      {
        title: "Tutorials",
        description: "Guided examples to learn integration and deployment",
        icon: BookOpen,
        subMenu: [],
      },
    ],
  },
  {
    title: "Support",
    description: "Get help and troubleshooting assistance",
    icon: LifeBuoy,
    subMenu: [
      {
        title: "FAQs",
        description: "Common issues and quick solutions",
        icon: LifeBuoy,
        subMenu: [],
      },
      {
        title: "Contact Support",
        description: "Reach out to our support engineers for technical help",
        icon: Mail,
        subMenu: [],
      },
    ],
  },
  {
    title: "Research & Innovation",
    description: "AI, ML, and next-gen system advancements",
    icon: FlaskConical,
    subMenu: [
      {
        title: "AI Infrastructure",
        description: "Machine learning model training and deployment pipelines",
        icon: Cpu,
        subMenu: [
          {
            title: "Model Deployment",
            description: "Serve and scale ML models in production environments",
            icon: Cpu,
            subMenu: [],
          },
          {
            title: "MLOps",
            description: "Manage ML lifecycle with reproducibility and automation",
            icon: ServerCog,
            subMenu: [],
          },
        ],
      },
      {
        title: "Emerging Tech",
        description: "Exploring edge computing, quantum systems, and innovation",
        icon: FlaskConical,
        subMenu: [
          {
            title: "Edge Computing",
            description: "Low-latency computation close to data sources",
            icon: Cpu,
            subMenu: [],
          },
          {
            title: "Quantum",
            description: "Exploring computation beyond classical architectures",
            icon: Gauge,
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    title: "Investor Relations",
    description: "Financial information and investor updates",
    icon: LineChart,
    subMenu: [],
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    icon: Mail,
    subMenu: [],
  },
]

export default techMenu
