import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack .NET Engineer",
    company: "OwaSoft Technologies",
    period: "Jul 2025 – Apr 2026, Remote",
    current: true,
    responsibilities: [
      "Architected a large-scale microservices system comprising 10+ ASP.NET Core API projects using DDD and Vertical Slice Architecture, improving scalability and fault isolation.",
      "Designed and maintained RESTful APIs with OpenAPI/Swagger; implemented OAuth2/OpenID Connect and JWT for secure authentication across mobile and web clients.",
      "Built event-driven asynchronous workflows using Azure Service Bus across distributed .NET services.",
      "Integrated multiple third-party services including a payment gateway, automated mailing, and address verification — reducing integration errors by over 30%.",
      "Developed ASP.NET Core background services for automated workflows and push notifications, significantly reducing user engagement response times.",
      "Authored YAML-based CI/CD pipelines automating build, test, and deployment across multiple .NET Core services.",
      "Containerized services using Docker; familiar with Kubernetes architecture.",
      "Managed AWS VM infrastructure achieving 99.9% uptime.",
      "Reduced database query latencies by 35% via MSSQL/EF Core schema optimizations.",
      "Led two concurrent enterprise-scale projects coordinating mobile, web, and admin panel teams — reducing integration issues by 25%.",
    ],
  },
  {
    title: ".NET Developer",
    company: "Kartoa Technologies",
    period: "Feb 2025 – May 2025",
    current: false,
    responsibilities: [
      "Built full-stack features for WooqLaw.com, a legal-tech platform, using Blazor frontend and ASP.NET Core backend.",
      "Developed and optimized 5+ reusable Blazor components, improving maintainability and frontend efficiency.",
      "Implemented RESTful API endpoints with ASP.NET Core, increasing data retrieval speed by 22%.",
      "Collaborated with senior engineers to apply Clean Architecture and SOLID principles.",
    ],
  },
  {
    title: "Project Lead",
    company: "Adan IT Center",
    period: "Aug 2024 – Feb 2025",
    current: false,
    responsibilities: [
      "Led production go-live of a nationwide LMS in partnership with NAVTTC, overseeing data migration, deployment, and post-launch support.",
      "Conducted training sessions for trainers and institutes across multiple government-affiliated locations to drive adoption.",
      "Applied production best practices to ensure scalability, data integrity, and maintainability in a live multi-institute environment.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative" id="experience">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Experience />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building enterprise solutions and mentoring the next generation of developers
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0 animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Timeline dot with glow */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${exp.current ? 'bg-primary border-primary glow-primary animate-pulse-glow' : 'bg-card border-accent hover:border-primary hover:scale-125'}`} />
              
              {/* Content card */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
