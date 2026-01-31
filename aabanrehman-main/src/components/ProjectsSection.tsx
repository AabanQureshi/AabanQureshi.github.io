import { FileText, GraduationCap, Clock, Receipt, Calendar, ShoppingCart, Users, Package, Brain, LucideIcon } from "lucide-react";

interface Project {
  title: string;
  subTitle: string;
  description: string;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    title: "SmartInvoice AI",
    subTitle: "AI-powered invoicing and expense management platform for small businesses",
    description: "SmartInvoice AI automates invoice generation, receipt processing, and financial reporting using intelligent workflows and AI-driven insights, helping businesses simplify billing and cash flow management.",
    role: "Backend Architect & Full-Stack .NET Developer",
    techStack: [
      ".NET 8",
      ".NET 9",
      "ASP.NET Web API",
      "Clean Architecture",
      "CQRS",
      "EF Core",
      "SQL Server",
      "AI/OCR Services",
      ".NET MAUI"
    ],
    keyFeatures: [
      "Automated cadence-based invoice generation",
      "Receipt OCR processing",
      "Financial reports and analytics",
      "Client and contract management",
      "Scalable modular backend",
      "API-first design"
    ],
    icon: FileText
  },
  {
    title: "QuizSystem AI",
    subTitle: "Scalable quiz and assessment management platform",
    description: "A modular online quiz system designed for performance, maintainability, and clean architectural separation, enabling structured quiz creation and evaluation workflows.",
    role: "Backend Developer & System Designer",
    techStack: [
      ".NET 8",
      ".NET 9",
      "ASP.NET Core",
      "CQRS (custom implementation)",
      "EF Core",
      "SQL Server",
      "Razor Pages"
    ],
    keyFeatures: [
      "Quiz creation and administration",
      "User attempt tracking",
      "Result processing engine",
      "Custom CQRS architecture",
      "Optimized query handlers",
      "Clean layered design"
    ],
    icon: GraduationCap
  },
  {
    title: "Automated Background Invoicing Engine",
    subTitle: "Rule-based invoice generation driven by billing schedules",
    description: "A background processing system that generates invoices automatically based on service contracts and billing cadences, optimized for high-volume financial workflows.",
    role: "Backend Logic Engineer",
    techStack: [
      ".NET 8",
      "EF Core",
      "Background Workers",
      "SQL Server"
    ],
    keyFeatures: [
      "Cadence-based billing automation",
      "Service-level validation",
      "High-performance batch processing",
      "Scalable job execution",
      "Optimized EF Core queries"
    ],
    icon: Clock
  },
  {
    title: "Personal Finance Tracker Mobile App",
    subTitle: "Automated expense tracking via transaction detection",
    description: "A mobile-first finance tracking application that automatically captures transactions from payment notifications and organizes expenses in real time.",
    role: "Product Designer & Mobile App Developer",
    techStack: [
      ".NET MAUI",
      ".NET 8",
      "Local Storage",
      "Notification Parsing"
    ],
    keyFeatures: [
      "Automatic transaction capture",
      "Expense categorization",
      "Live balance tracking",
      "Manual adjustments",
      "Offline-first support"
    ],
    icon: Receipt
  },
  {
    title: "EventFlow – Distributed Event-Driven Booking Platform",
    subTitle: "Scalable microservices system for real-time event ticketing and reservations",
    description: "A high-throughput booking platform built on event-driven microservices with strong consistency workflows and observability, supporting massive concurrent traffic.",
    role: "Lead Architect & Full-Stack .NET Engineer",
    techStack: [
      "ASP.NET Core",
      "MediatR",
      "EF Core",
      "EventStoreDB",
      "MassTransit",
      "Docker",
      "Azure Kubernetes Service",
      "Azure Service Bus",
      "OpenTelemetry",
      "Grafana"
    ],
    keyFeatures: [
      "Event sourcing architecture",
      "CQRS with vertical slices",
      "Distributed sagas",
      "High concurrency handling",
      "Full observability stack",
      "Cloud-native deployment"
    ],
    icon: Calendar
  },
  {
    title: "MediVault – Secure Healthcare Document Management SaaS",
    subTitle: "Encrypted healthcare document storage and sharing platform",
    description: "A secure SaaS solution enabling clinics and patients to store, share, and audit medical documents with enterprise-grade encryption and compliance-focused design.",
    role: "Solution Architect & Backend Lead",
    techStack: [
      "ASP.NET Core Web API",
      "Azure Functions",
      "Azure AD B2C",
      "Azure Key Vault",
      "Cosmos DB",
      "SignalR",
      "Tesseract OCR",
      "xUnit",
      "Testcontainers"
    ],
    keyFeatures: [
      "End-to-end encryption",
      "Role-based access control",
      "Immutable audit logging",
      "Secure file storage",
      "Real-time collaboration",
      "OCR metadata extraction"
    ],
    icon: FileText
  },
  {
    title: "OrderForge – Real-time E-commerce Order Orchestration Engine",
    subTitle: "Reliable microservices order processing pipeline with sagas",
    description: "A resilient order orchestration system coordinating inventory, payments, shipping, and notifications using event-driven consistency patterns.",
    role: "Principal Backend Engineer",
    techStack: [
      "ASP.NET Core",
      "EF Core",
      "MassTransit",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Polly",
      "Hangfire",
      "Docker",
      "Kubernetes"
    ],
    keyFeatures: [
      "Saga-based orchestration",
      "Transactional outbox pattern",
      "Idempotency handling",
      "High-volume order processing",
      "Fault-tolerant workflows",
      "Performance-optimized data access"
    ],
    icon: ShoppingCart
  },
  {
    title: "PulseHR – Modern HR & Payroll Microservices Platform",
    subTitle: "End-to-end employee lifecycle and payroll management system",
    description: "A cloud-native HR platform covering onboarding, attendance, payroll, and compliance with domain-driven microservices and audit-focused workflows.",
    role: "Co-Architect & Senior .NET Developer",
    techStack: [
      "ASP.NET Core Minimal APIs",
      "Carter",
      "Dapr",
      "Azure Service Bus",
      "SQL Server",
      "FluentValidation",
      "Swagger/OpenAPI",
      "NSubstitute"
    ],
    keyFeatures: [
      "DDD bounded contexts",
      "Payroll consistency workflows",
      "CQRS for audit-heavy domains",
      "API-first architecture",
      "Distributed integrations",
      "Compliance-ready reporting"
    ],
    icon: Users
  },
  {
    title: "SmartInventory – AI-Powered Warehouse Management System",
    subTitle: "Predictive inventory management with real-time stock tracking",
    description: "An intelligent warehouse platform combining real-time inventory monitoring with AI-driven demand forecasting to optimize stock levels and replenishment.",
    role: "Full-Stack .NET Lead",
    techStack: [
      "ASP.NET Core",
      "Blazor Server",
      "ML.NET",
      "Azure Machine Learning",
      "SignalR",
      "EF Core",
      "Azure IoT Hub",
      ".NET MAUI"
    ],
    keyFeatures: [
      "AI demand forecasting",
      "Real-time stock updates",
      "Barcode scanning mobile app",
      "Automated purchase orders",
      "Live dashboards",
      "Cloud-native deployment"
    ],
    icon: Package
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Projects />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Architecting scalable solutions with modern .NET technologies and cloud-native practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={`${project.title}-${index}`}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent font-mono line-clamp-2">
                      {project.subTitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full">
                    <Brain className="w-3 h-3 mr-1.5" />
                    {project.role}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-primary">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {project.keyFeatures.length > 3 && (
                      <li className="text-xs text-primary font-mono">
                        +{project.keyFeatures.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
