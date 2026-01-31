import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Back-End Engineer Specialization",
    issuer: "Microsoft",
    icon: "🏆",
    color: "primary",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    icon: "☁️",
    color: "primary",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    icon: "🤖",
    color: "accent",
  },
  {
    title: "Database Integration and Management",
    issuer: "Microsoft",
    icon: "🗄️",
    color: "primary",
  },
  {
    title: "Meta React Specialization",
    issuer: "Meta",
    icon: "⚛️",
    color: "accent",
  },
  {
    title: "Deployments and DevOps",
    issuer: "Microsoft",
    icon: "🚀",
    color: "primary",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="certifications">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Certifications />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials demonstrating expertise in Microsoft technologies and modern development
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const isAccent = cert.color === "accent";
            
            return (
              <div
                key={cert.title}
                className="group p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${isAccent ? 'bg-accent/20' : 'bg-primary/20'}`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Award className={`w-3 h-3 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                      <span className="text-xs font-mono text-muted-foreground">{cert.issuer}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Microsoft badge */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <span className="text-2xl">🎖️</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">6+</span> Microsoft & Meta Verified Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
