import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: This is a client-side demo form. In production, integrate with a backend service.
    // For now, it shows a success message. Users can still reach out via email/phone.
    setTimeout(() => {
      toast({
        title: "Thanks for your interest!",
        description: "Please email me directly at aabanqureshi564@gmail.com for now.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Contact />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about tech
          </p>
        </div>

        {/* Contact card */}
        <div className="p-8 md:p-12 rounded-2xl glass border border-border shadow-elevated">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Right - Contact info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
              
              <a 
                href="mailto:aabanqureshi564@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:glow-primary transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">aabanqureshi564@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+923470506699" 
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">+92 347 0506699</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-mono text-sm text-foreground">Islamabad</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Connect on social</h4>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/aaban-qureshi/" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-border hover:border-primary hover:bg-secondary">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/AabanQureshi" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-border hover:border-primary hover:bg-secondary">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by <span className="text-primary">Aaban Rehman</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
