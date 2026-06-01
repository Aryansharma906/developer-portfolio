import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Domain", href: "#tech-stack" },
  { label: "Trajectory", href: "#learning-journey" },
  { label: "Studies", href: "#education" },
  { label: "AI Sandbox", href: "#ai-exploration" },
  { label: "Credentials", href: "#certifications" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (!element) return setIsMobileMenuOpen(false);

    const header = document.querySelector("nav");
    const headerHeight = header ? header.clientHeight : 80;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(0, elementTop - headerHeight - 16);
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent hover:from-emerald-400 hover:to-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AS
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-[0_0_20px_-5px_rgba(0,255,100,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,255,100,0.7)] transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover:text-emerald-400 transition-colors p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-6 bg-card/90 backdrop-blur-xl border-t border-primary/20"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="block w-full text-left px-6 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-6 pt-3">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_rgba(0,255,100,0.5)]"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
