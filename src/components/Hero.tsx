import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, ShieldCheck, Database } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const springConfig = { damping: 30, stiffness: 220, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  // Mouse Coordinates for Particle Canvas
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Particle Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(45, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interaction with mouse pointer
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180) {
          // Subtle attraction force
          p.x += dx * 0.003;
          p.y += dy * 0.003;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 100, 0.4)";
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Dynamic alpha based on distance
            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(0, 255, 100, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}cv.pdf`;
    link.download = "Aryan_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16 scanline scroll-reveal-subject transform-gpu">
      {/* Dynamic Cursor Glow Follower */}
      <motion.div
        className="pointer-events-none fixed z-30 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] mix-blend-screen opacity-70 hidden md:block will-change-transform transform-gpu"
        style={{
          left: glowX,
          top: glowY,
        }}
      />

      {/* Interactive HTML5 Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40 select-none"
      />

      {/* SVG Interactive Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 100, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Floating Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/12 via-primary/4  to-transparent blur-[120px] pointer-events-none will-change-transform transform-gpu" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-copper/12 via-copper/4 to-transparent blur-[140px] pointer-events-none will-change-transform transform-gpu" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Active Status & Roles Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-xs font-semibold text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Actively Building
            </span>

            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card/40 backdrop-blur-md text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Cybersecurity Intern @ TCS
            </span>

            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card/40 backdrop-blur-md text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Database className="w-3.5 h-3.5 text-copper" />
              Data Analytics Intern @ Deloitte
            </span>
          </motion.div>

          {/* Giant Visual Centerpiece Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-none select-none uppercase font-heading text-white">
              <span className="bg-gradient-to-r from-white via-primary to-emerald-400 bg-clip-text text-transparent filter drop-shadow-[0_4px_30px_rgba(0,255,100,0.25)]">
                Aryan Sharma
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-4 text-primary font-bold text-lg sm:text-xl md:text-2xl tracking-wider uppercase font-mono"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              Data Scientist & AI/ML Researcher
            </motion.div>
          </motion.div>

          {/* Sub-Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Building Tomorrow's{" "}
            <span className="bg-gradient-to-r from-primary to-copper bg-clip-text text-transparent font-extrabold">
              Intelligent Systems.
            </span>
          </motion.h2>

          {/* Deep Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Specializing in predictive machine learning models, autonomous agent networks (CrewAI, MCP), RAG indexing pipelines, and production MLOps containerizations (Docker, AWS SageMaker).
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-7 text-base font-semibold bg-primary text-background hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,100,0.35)] hover:shadow-[0_0_50px_rgba(0,255,100,0.6)] group"
            >
              Examine Featured Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-7 text-base font-semibold border-2 border-primary/20 hover:border-primary bg-background/50 hover:bg-primary/5 text-primary transition-all duration-300"
            >
              Initiate Consultation
            </Button>

            <Button
              size="lg"
              variant="ghost"
              onClick={downloadCV}
              className="w-full sm:w-auto px-6 py-7 text-base font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-card/40 border border-transparent hover:border-border"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-none select-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">Scroll Port</span>
        <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
