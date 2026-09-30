import { Code2, Database, Cloud, Layers, Server, Lock, Cpu, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & .NET",
    icon: Code2,
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      ".NET 9",
      "Entity Framework Core",
      "Dapper",
      "SOLID",
      "Clean Architecture",
      "Vertical Slice Architecture",
      "Domain-Driven Design (DDD)",
      "Microservices",
      "Background Services",
      "MVC",
      "Minimal APIs",
      "Web APIs",
      "OpenAPI/Swagger",
      "xUnit",
      "NUnit"
    ],
    color: "primary",
  },
  {
    title: "Messaging & Caching",
    icon: Cpu,
    skills: [
      "Azure Service Bus",
      "RabbitMQ",
      "Redis (caching layer)"
    ],
    color: "accent",
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: [
      "Blazor",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery"
    ],
    color: "primary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MSSQL Server",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Cosmos DB",
      "EF Core Migrations",
      "Stored Procedures",
      "Indexing",
      "Performance Tuning"
    ],
    color: "accent",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Azure (AZ-900, AI-900)",
      "Azure App Services",
      "Azure SQL",
      "Azure Key Vault",
      "Azure Service Bus",
      "AWS (EC2, VM)",
      "Docker",
      "Kubernetes (conceptual)",
      "YAML Pipelines",
      "CI/CD",
      "Git",
      "AWS Infrastructure Management",
    ],
    color: "primary",
  },
  {
    title: "Authentication & Security",
    icon: Lock,
    skills: [
      "OAuth2",
      "OpenID Connect",
      "JWT",
      "Azure AD SSO"
    ],
    color: "accent",
  },
  {
    title: "Architecture & System Design",
    icon: Server,
    skills: [
      "Microservices",
      "Domain-Driven Design (DDD)",
      "Vertical Slice Architecture (VSA)",
      "Event-Driven Architecture",
      "Clean Architecture",
      "Performance Optimization"
    ],
    color: "primary",
  },
  {
    title: "Integrations",
    icon: Workflow,
    skills: [
      "Stripe",
      "PostGrid",
      "USPS",
      "Firebase",
      "REST APIs",
      "Third-Party API Integration"
    ],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="skills">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Skills />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive expertise in modern .NET development, AI integration, and cloud-native architecture
          </p>
        </div>

        {/* Categorized skills view */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";

            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isAccent ? 'bg-accent/20' : 'bg-primary/20'} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>

                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
