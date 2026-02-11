import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-elevated' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 relative z-50">
            <span className="text-xl font-bold font-mono text-gradient">{"<AR />"}</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="/Aaban_Rehman_CV.pdf" download="Aaban_Rehman_CV.pdf">
              <Button size="sm" className="bg-gradient-primary text-primary-foreground font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay backdrop */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 md:hidden z-[999]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Mobile menu */}
            <div 
              className="fixed inset-0 md:hidden z-[1000] overflow-y-auto"
              style={{ 
                background: '#1e293b',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              {/* Close button inside menu */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="px-8 py-4 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="/Aaban_Rehman_CV.pdf" download="Aaban_Rehman_CV.pdf" className="mt-4">
                  <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
