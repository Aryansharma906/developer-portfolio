import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, Star, Compass } from "lucide-react";

interface Milestone {
  year: string;
  role: string;
  company: string;
  type: "academic" | "professional" | "simulation";
  description: string;
  highlights: string[];
}

const milestones: Milestone[] = [
  {
    year: "Feb 2026 - May 2026",
    role: "Cyber Security Analyst Intern",
    company: "Tata Consultancy Services",
    type: "professional",
    description: "Designed IAM frameworks, structured JML user lifecycle pipelines, and engineered Zero Trust context-aware MFA solutions.",
    highlights: ["Enterprise IAM architecture design", "Automated Joiner-Mover-Leaver logic", "Zero Trust MFA configurations"]
  },
  {
    year: "Completed Feb 2026",
    role: "Software Engineering Simulation",
    company: "JPMorgan Chase (Forage)",
    type: "simulation",
    description: "Architected AI-driven financial outreach automation utilizing Kafka topics and Spring Boot microservice routing.",
    highlights: ["Kafka messaging topology", "Spring Boot backends", "Ethical AI modeling integrations"]
  },
  {
    year: "Dec 2025 - Feb 2026",
    role: "Data Analytics Intern",
    company: "Deloitte",
    type: "professional",
    description: "Conducted forensic investigations on large datasets to identify patterns and compliance anomalies, reporting findings via interactive dashboards.",
    highlights: ["Forensic dataset investigation", "Dynamic Tableau dashboard creation", "Compliance anomaly detection"]
  },
  {
    year: "Nov 2025 - Feb 2026",
    role: "Gen AI Data Analytics Simulation",
    company: "Tata Group",
    type: "simulation",
    description: "Conducted exploratory analytics (EDA) evaluating customer risk profiles for model readiness in financial sectors.",
    highlights: ["Exploratory Data Analysis", "Customer delinquency modeling", "Risk scoring segmentation"]
  },
  {
    year: "2026 - 2030",
    role: "B.Tech in Computer Science & AI",
    company: "B.Tech Academic Program",
    type: "academic",
    description: "Core specialization in Machine Learning models, systems scaling, and next-generation AI interfaces.",
    highlights: ["AI specialized curriculum focus", "Software systems building", "Collaborative project design"]
  }
];

const LearningJourney = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="learning-journey" className="relative py-32 overflow-hidden bg-background border-t border-border/40 scroll-reveal-subject">
      {/* Lights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={containerRef} className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary"
            >
              <Compass className="w-3.5 h-3.5" />
              Timeline & Momentum
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              The Learning{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Trajectory.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              Milestones mapping professional security consulting, forensic analysis, software simulations, and current studies.
            </motion.p>
          </div>

          {/* Timeline Tree */}
          <div className="relative">
            {/* Center connector line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, idx) => {
                const Icon = item.type === "academic" ? GraduationCap : item.type === "professional" ? Briefcase : Star;
                const isLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Circle Node */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,100,0.3)]">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <div className="p-6 rounded-2xl bento-card border border-border/60 hover:border-primary/30 transition-all duration-300 relative">
                        {/* Date header */}
                        <div className={`flex items-center gap-1.5 text-xs text-primary font-bold font-mono mb-2 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.role}
                        </h3>

                        {/* Company */}
                        <p className="text-sm font-semibold text-muted-foreground mb-4">
                          {item.company}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Bullets */}
                        <div className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          {item.highlights.map((h, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono font-bold bg-background/50 border border-border text-foreground/80">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
