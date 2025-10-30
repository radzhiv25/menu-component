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
    path: "/home",
    subMenu: [],
  },
  {
    title: "Architecture Solutions",
    description: "Modern design patterns, scalability and reliability",
    icon: Layers,
    path: "/architecture",
    subMenu: [
      {
        title: "Microservices & APIs",
        icon: Network,
        description: "Distributed systems, gateways, and service orchestration",
        subMenu: [
          {
            title: "API Gateways",
            icon: Plug,
            subMenu: [
              { title: "Kong", icon: Boxes, path: "/architecture/microservices/api-gateways/kong" },
              { title: "NGINX", icon: Boxes, path: "/architecture/microservices/api-gateways/nginx" },
            ],
          },
          {
            title: "Communication",
            icon: Cpu,
            subMenu: [
              { title: "gRPC", icon: Cpu, path: "/architecture/microservices/communication/grpc" },
              { title: "Message Queues", icon: Database, path: "/architecture/microservices/communication/mq" },
            ],
          },
          {
            title: "Service Discovery",
            icon: Settings2,
            subMenu: [
              { title: "Eureka", icon: Gauge, path: "/architecture/microservices/discovery/eureka" },
              { title: "Consul", icon: Gauge, path: "/architecture/microservices/discovery/consul" },
            ],
          },
        ],
      },
      {
        title: "Containerization",
        icon: Boxes,
        description: "Manage containers and orchestration platforms",
        subMenu: [
          {
            title: "Kubernetes",
            icon: Settings2,
            subMenu: [
              { title: "Helm Charts", icon: FolderOpen, path: "/architecture/containers/kubernetes/helm" },
              { title: "Namespaces", icon: FolderOpen, path: "/architecture/containers/kubernetes/namespaces" },
            ],
          },
          {
            title: "Docker",
            icon: Boxes,
            subMenu: [
              { title: "Compose", icon: Boxes, path: "/architecture/containers/docker/compose" },
              { title: "Registry", icon: Database, path: "/architecture/containers/docker/registry" },
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
    path: "/integrations",
    subMenu: [
      {
        title: "Authentication",
        icon: Lock,
        subMenu: [
          { title: "OAuth 2.0", icon: Lock, path: "/integrations/auth/oauth" },
          { title: "SAML", icon: Lock, path: "/integrations/auth/saml" },
        ],
      },
      {
        title: "Payments",
        icon: LineChart,
        subMenu: [
          { title: "Stripe", icon: LineChart, path: "/integrations/payments/stripe" },
          { title: "Razorpay", icon: LineChart, path: "/integrations/payments/razorpay" },
        ],
      },
      {
        title: "Data Pipelines",
        icon: Database,
        subMenu: [
          {
            title: "ETL Tools",
            icon: Database,
            subMenu: [
              { title: "Airbyte", icon: Database, path: "/integrations/data/airbyte" },
              { title: "Fivetran", icon: Database, path: "/integrations/data/fivetran" },
            ],
          },
          {
            title: "Analytics",
            icon: LineChart,
            subMenu: [
              { title: "BigQuery", icon: Database, path: "/integrations/data/bigquery" },
              { title: "Snowflake", icon: Database, path: "/integrations/data/snowflake" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "DevOps & CI/CD",
    description: "Automation, infrastructure and deployment pipelines",
    icon: ServerCog,
    path: "/devops",
    subMenu: [
      {
        title: "Continuous Integration",
        icon: Gauge,
        subMenu: [
          { title: "GitHub Actions", icon: Gauge, path: "/devops/ci/github-actions" },
          { title: "Jenkins", icon: Gauge, path: "/devops/ci/jenkins" },
        ],
      },
      {
        title: "Infrastructure as Code",
        icon: Layers,
        subMenu: [
          { title: "Terraform", icon: Layers, path: "/devops/iac/terraform" },
          { title: "Pulumi", icon: Layers, path: "/devops/iac/pulumi" },
        ],
      },
      {
        title: "Monitoring & Observability",
        icon: Gauge,
        subMenu: [
          { title: "Grafana", icon: Gauge, path: "/devops/monitoring/grafana" },
          { title: "Prometheus", icon: Gauge, path: "/devops/monitoring/prometheus" },
        ],
      },
    ],
  },
  {
    title: "Cloud & Scalability",
    description: "Distributed systems and cloud-native infrastructure",
    icon: Cloud,
    path: "/cloud",
    subMenu: [
      {
        title: "AWS",
        icon: Cloud,
        subMenu: [
          { title: "EC2 & Auto Scaling", icon: Cloud, path: "/cloud/aws/ec2" },
          { title: "Lambda", icon: Cpu, path: "/cloud/aws/lambda" },
        ],
      },
      {
        title: "GCP",
        icon: Cloud,
        subMenu: [
          { title: "Compute Engine", icon: Cloud, path: "/cloud/gcp/compute" },
          { title: "Cloud Run", icon: ServerCog, path: "/cloud/gcp/cloud-run" },
        ],
      },
      {
        title: "Azure",
        icon: Cloud,
        subMenu: [
          { title: "Functions", icon: Cpu, path: "/cloud/azure/functions" },
          { title: "AKS", icon: Boxes, path: "/cloud/azure/aks" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    description: "Knowledge base, developer docs, and learning materials",
    icon: BookOpen,
    path: "/resources",
    subMenu: [
      { title: "Documentation", icon: BookOpen, path: "/resources/docs" },
      { title: "API Reference", icon: BookOpen, path: "/resources/api" },
      { title: "Tutorials", icon: BookOpen, path: "/resources/tutorials" },
    ],
  },
  {
    title: "Support",
    description: "Get help and troubleshooting assistance",
    icon: LifeBuoy,
    path: "/support",
    subMenu: [
      { title: "FAQs", icon: LifeBuoy, path: "/support/faqs" },
      { title: "Contact Support", icon: Mail, path: "/support/contact" },
    ],
  },
  {
    title: "Research & Innovation",
    description: "AI, ML, and next-gen system advancements",
    icon: FlaskConical,
    path: "/research",
    subMenu: [
      {
        title: "AI Infrastructure",
        icon: Cpu,
        subMenu: [
          { title: "Model Deployment", icon: Cpu, path: "/research/ai/deployment" },
          { title: "MLOps", icon: ServerCog, path: "/research/ai/mlops" },
        ],
      },
      {
        title: "Emerging Tech",
        icon: FlaskConical,
        subMenu: [
          { title: "Edge Computing", icon: Cpu, path: "/research/emerging/edge" },
          { title: "Quantum", icon: Gauge, path: "/research/emerging/quantum" },
        ],
      },
    ],
  },
  {
    title: "Investor Relations",
    description: "Financial information and investor updates",
    icon: LineChart,
    path: "/investors",
    subMenu: [],
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    icon: Mail,
    path: "/contact",
    subMenu: [],
  },
]

export default techMenu


