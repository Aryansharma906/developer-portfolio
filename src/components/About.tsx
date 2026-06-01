import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Compass, Activity, ArrowUpRight } from "lucide-react";
import profile from "@/data/profile";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics = [
    { label: "Pattern Recognition", value: profile.psychometric.pattern_recognition, color: "bg-primary" },
    { label: "Creative Synthesis", value: profile.psychometric.creative_synthesis, color: "bg-emerald-400" },
    { label: "Metacognition", value: profile.psychometric.metacognition, color: "bg-cyan-400" },
    { label: "Systems Thinking", value: profile.psychometric.systems_thinking, color: "bg-copper" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-background/50 border-t border-border/40 scroll-reveal-subject">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={containerRef} className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary"
            >
              <Activity className="w-3.5 h-3.5" />
              Cognitive Architecture
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none"
            >
              The Mindset of a <br />
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Systems Architect.
              </span>
            </motion.h2>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative Story */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 rounded-2xl bento-card"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary" /> First Principles & Code
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  I approach software engineering from a perspective of raw construction. I don't just import packages—I seek to understand compiler pathways, memory maps, and API loops. To me, a clean system is a work of art that balances optimal resource usage with highly readable architecture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-8 rounded-2xl bento-card"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-copper" /> Machine Learning & Agents
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Machine learning is the ultimate design framework. I focus on how software adapts dynamically. From building automated prediction collections engines to orchestrating multi-agent systems via Model Context Protocol (MCP) integrations, I engineer systems that are active, context-aware, and highly autonomous.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-8 rounded-2xl bento-card"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-emerald-400" /> Professional Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Before starting my formal higher academic studies in Computer Science, I secured internships at top-tier organizations. At Tata Consultancy Services, I automated IAM pipelines for Zero Trust environments, while at Deloitte, I conducted forensics analytics on high-volume datasets. This real-world experience forms the foundation of my technical work.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Psychometric Metrics Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 p-8 rounded-2xl bento-card relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                <span>Cognitive Metrics</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                  ANALYTICAL RATINGS <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </h3>

              <p className="text-sm text-muted-foreground mb-8">
                Evaluated cognitive markers focusing on software problem-solving capabilities, logical synthesis, and systems thinking.
              </p>

              <div className="space-y-6">
                {metrics.map((metric, i) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/90 font-medium">{metric.label}</span>
                      <span className="font-mono text-primary font-bold">{metric.value}%</span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-border/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${metric.value}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                        className={`h-full ${metric.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Stats Summary */}
              <div className="mt-10 pt-8 border-t border-border/40 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl border border-border/20 bg-background/30">
                  <span className="block text-2xl font-bold text-white font-mono">2026</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Start Year</span>
                </div>
                <div className="p-4 rounded-xl border border-border/20 bg-background/30">
                  <span className="block text-2xl font-bold text-primary font-mono">4+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Engagements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
