import { Briefcase, Building2, Store, Receipt, Scale, GraduationCap, LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon: LucideIcon;
  type: "professional" | "active";
}

interface ExpandState {
  techStack: boolean;
}

const projects: Project[] = [
  {
    title: "InkedFlow",
    description: "A microservices-based platform (10+ ASP.NET Core API projects) using DDD and Vertical Slice Architecture. Integrated Stripe, PostGrid, USPS. Built background services for automated contract generation, invoice creation, and Firebase push notifications.",
    techStack: ["ASP.NET Core", "Microservices", "DDD", "VSA", "Stripe", "Firebase", "Docker", "AWS"],
    icon: Briefcase,
    type: "professional"
  },
  {
    title: "MediDiscounts",
    description: "Led as project lead — coordinated mobile, web, and admin panel teams. Cut integration bugs by 25% and delivered on time.",
    techStack: ["ASP.NET Core", ".NET", "Project Lead", "REST APIs"],
    icon: Building2,
    type: "professional"
  },
  {
    title: "BizyPop",
    description: "Multi-tenant loyalty and incentives platform. Refactored incentives system into a unified multi-incentive architecture with UNION ALL-based paginated queries, QR code generation, and Business/BusinessUser many-to-many restructure.",
    techStack: ["ASP.NET Core", "EF Core", "Multi-Tenant", "SQL Server", "Clean Architecture"],
    icon: Store,
    type: "active"
  },
  {
    title: "SmartInvoice AI",
    description: "AI-powered billing system for small businesses — OCR-based invoice generation, monthly financial reports, cash flow insights. Hybrid Clean Architecture + Vertical Slice + CQRS. Web API + MVC frontend + planned MAUI mobile app.",
    techStack: ["ASP.NET Core", "AI Integration", "OCR", "EF Core", "CQRS", ".NET MAUI"],
    icon: Receipt,
    type: "professional"
  },
  {
    title: "WooqLaw",
    description: "Legal-tech platform built with Blazor frontend and ASP.NET Core backend. Developed 5+ reusable Blazor components, increased data retrieval speed by 22%.",
    techStack: ["Blazor", "ASP.NET Core", "REST APIs", "MSSQL"],
    icon: Scale,
    type: "professional"
  },
  {
    title: "NAVTTC LMS",
    description: "Led production go-live of a nationwide Learning Management System in partnership with NAVTTC. Handled real data migration, deployment, and post-launch support across multiple government institutes.",
    techStack: [".NET", "SQL Server", "LMS", "Project Lead"],
    icon: GraduationCap,
    type: "professional"
  }
];

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<number, ExpandState>>({});

  const toggleExpand = (index: number, type: 'techStack') => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: !prev[index]?.[type]
      }
    }));
  };

  return (
    <section className="py-24 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Projects />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Professional <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Delivering scalable .NET solutions for real-world business challenges
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isTechStackExpanded = expandedProjects[index]?.techStack || false;

            return (
              <div
                key={`${project.title}-${index}`}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated flex flex-col hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    {project.type === "active" && (
                      <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Active
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(isTechStackExpanded ? project.techStack : project.techStack.slice(0, 5)).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <button
                        onClick={() => toggleExpand(index, 'techStack')}
                        className="px-2 py-0.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {isTechStackExpanded ? (
                          <>
                            Show less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            +{project.techStack.length - 5} more <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
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
