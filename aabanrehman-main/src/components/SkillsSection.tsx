import { Code2, Database, Cloud, Layers, GitBranch, Server, Code } from "lucide-react";
import { 
  SiDotnet, 
  SiReact,
  SiAngular,
  SiGit,
  SiBlazor,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiAmazon,
  SiFirebase,
  SiStripe
} from "react-icons/si";

// Individual skills with their specific icons
const individualSkills = [
  // Backend & .NET Core
  { name: "C#", icon: Code, color: "#239120", category: "Backend & .NET Core" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4", category: "Backend & .NET Core" },
  { name: "Entity Framework Core", icon: SiDotnet, color: "#512BD4", category: "Backend & .NET Core" },
  { name: ".NET Core", icon: SiDotnet, color: "#512BD4", category: "Backend & .NET Core" },
  
  // Frontend
  { name: "Blazor", icon: SiBlazor, color: "#512BD4", category: "Frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Angular", icon: SiAngular, color: "#DD0031", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "Frontend" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
  
  // Databases
  { name: "SQL Server", icon: Database, color: "#CC2927", category: "Databases" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Databases" },
  
  // Cloud & DevOps
  { name: "Azure", icon: Cloud, color: "#0089D6", category: "Cloud & DevOps" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900", category: "Cloud & DevOps" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Cloud & DevOps" },
  
  // APIs & Integrations
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "APIs & Integrations" },
  { name: "Stripe", icon: SiStripe, color: "#008CDD", category: "APIs & Integrations" },
];

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
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Skills />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills grid with icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {individualSkills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div
                key={skill.name}
                className="group p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated flex flex-col items-center justify-center gap-3 hover:scale-110 hover:-translate-y-2 transform cursor-default animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon 
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                
                <h3 className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Legacy category view for additional context */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <h3 className="text-2xl font-semibold text-center mb-8 animate-fade-in">Additional Skills & Expertise</h3>
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
      </div>
    </section>
  );
};

export default SkillsSection;
