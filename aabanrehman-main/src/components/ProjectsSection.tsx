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
    description: "Microservices-based enterprise platform with 10+ ASP.NET Core APIs using DDD and VSA. Integrated Stripe, PostGrid, USPS, Azure Service Bus, and background services for automated contract/invoice workflows and Firebase notifications.",
    techStack: ["ASP.NET Core", "Microservices", "DDD", "VSA", "Azure Service Bus", "Stripe", "PostGrid", "USPS", "Firebase", "Docker"],
    icon: Briefcase,
    type: "professional"
  },
  {
    title: "MediDiscounts",
    description: "Led cross-functional delivery as project lead, coordinating mobile, web, and admin teams to reduce integration bugs by 25% and ensure on-time delivery.",
    techStack: ["ASP.NET Core", ".NET", "Project Leadership", "Integration Management", "Cross-Team Coordination"],
    icon: Building2,
    type: "professional"
  },
  {
    title: "WooqLaw",
    description: "Legal-tech platform where full-stack features were built with Blazor frontend and ASP.NET Core backend. Delivered reusable components and API optimizations that improved retrieval speed by 22%.",
    techStack: ["Blazor", "ASP.NET Core", "REST APIs", "Clean Architecture", "SOLID", "MSSQL"],
    icon: Scale,
    type: "professional"
  },
  {
    title: "NAVTTC LMS",
    description: "Led production go-live of a nationwide LMS in partnership with NAVTTC, including real data migration, deployment, institute onboarding, and post-launch support.",
    techStack: [".NET", "SQL Server", "LMS", "Deployment", "Data Migration", "Project Leadership"],
    icon: GraduationCap,
    type: "professional"
  },
  {
    title: "Cloud Infrastructure & CI/CD",
    description: "Managed AWS VM infrastructure and YAML-based CI/CD workflows for enterprise .NET services, helping achieve 99.9% uptime and consistent deployment quality.",
    techStack: ["AWS VM", "YAML Pipelines", "CI/CD", "Docker", "Monitoring", "Performance Tuning"],
    icon: Receipt,
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
