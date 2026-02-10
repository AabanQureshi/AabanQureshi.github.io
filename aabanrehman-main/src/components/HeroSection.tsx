import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 z-10">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">Aaban</span>{" "}
          <span className="text-gradient">Rehman</span>
        </h1>

        {/* Title */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="px-4 py-2 bg-gradient-primary text-primary-foreground font-mono text-sm md:text-base font-semibold rounded-lg">
            Full-Stack Developer
          </span>
          <span className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm md:text-base rounded-lg border border-border">
            ASP.NET Core
          </span>
          <span className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm md:text-base rounded-lg border border-border">
            Microsoft Certified
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Passionate and detail-oriented developer with hands-on experience in full-stack web development 
          using <span className="text-primary font-medium">ASP.NET Core</span>, <span className="text-primary font-medium">Blazor</span>, 
          {" "}<span className="text-primary font-medium">Entity Framework</span>, and <span className="text-primary font-medium">SQL Server</span>. 
          Building impactful solutions with clean, maintainable code.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="mailto:aabanqureshi564@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-mono">aabanqureshi564@gmail.com</span>
          </a>
          <a href="tel:+923470506699" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-mono">+92 347 0506699</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono">Islamabad</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="mailto:aabanqureshi564@gmail.com">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-8 glow-primary hover:opacity-90 transition-opacity">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </a>
          <a href="/Aaban_Rehman_CV.pdf" download="Aaban_Rehman_CV.pdf">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-all">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/aaban-qureshi/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-all">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/AabanQureshi" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-all">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
        </div>

        {/* Tech stack preview */}
        <div className="mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground mb-6 font-mono">// Technologies I work with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['C#', 'ASP.NET Core', 'Blazor', 'SQL Server', 'Azure', 'React', 'Entity Framework', 'REST APIs'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-foreground bg-card border border-border rounded-lg hover:border-primary/50 hover:glow-primary transition-all cursor-default"
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
