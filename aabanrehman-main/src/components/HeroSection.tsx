import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 z-10">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-hero rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float-slow opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-accent/50 rounded-full animate-float-slow opacity-30" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Open to Work badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-scale-in hover-glow cursor-default border border-green-500/20">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-foreground font-medium">Open to Work — Freelance, Contract &amp; Full-Time Roles</span>
        </div>

        {/* Main heading with gradient animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">Aaban</span>{" "}
          <span className="text-gradient animate-gradient">Rehman</span>
        </h1>

        {/* Title badges with stagger animation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-gradient-primary text-white font-mono text-sm md:text-base font-semibold rounded-lg animate-scale-in glow-primary" style={{ animationDelay: '0.2s' }}>
            Full-Stack .NET Engineer
          </span>
          <span className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm md:text-base rounded-lg border border-border animate-scale-in hover:border-primary/50 transition-colors" style={{ animationDelay: '0.3s' }}>
            AI Integration Specialist
          </span>
        </div>

        {/* Description with fade animation */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Specialized in <span className="text-primary font-medium">ASP.NET Core</span>, <span className="text-primary font-medium">Microservices</span>,
          {" "}<span className="text-primary font-medium">AI Agents</span>, and <span className="text-primary font-medium">Clean Architecture</span>.
          Available for freelance, contract, remote international, and Pakistan-based roles.
        </p>

        {/* Contact info with slide animations */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-muted-foreground">
          <a href="mailto:aabanqureshi564@gmail.com" className="flex items-center gap-2 hover:text-primary transition-all animate-slide-in-left hover:scale-105" style={{ animationDelay: '0.6s' }}>
            <Mail className="w-4 h-4" />
            <span className="text-sm font-mono">aabanqureshi564@gmail.com</span>
          </a>
          <a href="tel:+923470506699" className="flex items-center gap-2 hover:text-primary transition-all animate-fade-in hover:scale-105" style={{ animationDelay: '0.7s' }}>
            <Phone className="w-4 h-4" />
            <span className="text-sm font-mono">+92 347 0506699</span>
          </a>
          <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono">Islamabad</span>
          </div>
        </div>

        {/* CTA Buttons with hover effects */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <a href="mailto:aabanqureshi564@gmail.com">
            <Button size="lg" className="bg-gradient-primary text-white font-semibold px-8 glow-primary hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </a>
          <a href="/Aaban_Rehman_CV.pdf" download="Aaban_Rehman_CV.pdf">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-all hover:scale-105 hover-glow">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/aaban-qureshi/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-accent transition-all hover:scale-105">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/AabanQureshi" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-all hover:scale-105">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
        </div>

        {/* Tech stack preview with stagger hover effects */}
        <div className="mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <p className="text-sm text-muted-foreground mb-6 font-mono">// Technologies I work with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['C#', 'ASP.NET Core', 'Blazor', 'SQL Server', 'Azure', 'React', 'Entity Framework', 'REST APIs'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-foreground bg-card border border-border rounded-lg hover:border-primary/50 hover:glow-primary transition-all cursor-default hover:scale-110 hover:-translate-y-1"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
