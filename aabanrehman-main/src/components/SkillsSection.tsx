import { Code2, Database, Cloud, Layers, GitBranch, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & .NET Core",
    icon: Code2,
    skills: ["C#", "ASP.NET Core", "Entity Framework Core", "Domain-Driven Design", "Vertical Slice Architecture", "SOLID Principles", "Clean Architecture", "Microservices", "MVC", "Minimal APIs", "Web APIs"],
    color: "primary",
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["Blazor", "React", "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "TypeScript"],
    color: "accent",
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: ["MSSQL Server", "MySQL", "SQL", "Database Management"],
    color: "primary",
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: Cloud,
    skills: ["Azure Fundamentals AZ-900", "Azure AI-900", "AWS Virtual Machines", "AWS Deployments", "CI/CD Pipelines", "Deployment", "Server Management", "Git"],
    color: "accent",
  },
  {
    title: "APIs & Integrations",
    icon: Server,
    skills: ["RESTful APIs", "Third-Party Integrations", "Stripe", "PostGrid", "USPS", "Firebase"],
    color: "primary",
  },
  {
    title: "Development Practices",
    icon: GitBranch,
    skills: ["Background Services", "Performance Optimization", "Version Control", "Code Reviews", "Mentoring"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Skills />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isAccent ? 'bg-accent/20' : 'bg-primary/20'}`}>
                  <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-colors"
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
