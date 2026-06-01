import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

interface EducationCard {
  degree: string;
  institution: string;
  period: string;
  description: string;
  focusArea?: string[];
}

const educationData: EducationCard[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & AI",
    institution: "B.Tech Academic Program",
    period: "2026 - 2030",
    description: "Rigorous focus on core computer science fundamentals, neural networks, machine learning engineering, and systems scalability.",
    focusArea: ["Data Science", "Artificial Intelligence", "Neural Networks", "Software Engineering"]
  },
  {
    degree: "Senior Secondary Education (12th)",
    institution: "CBSE Curriculum",
    period: "2024 - 2025",
    description: "Completed secondary education focusing on advanced mathematics and physics. Maintained consistent logical reasoning markers.",
    focusArea: ["Advanced Mathematics", "Physics & Chemistry", "GPA: 7.4 / 10"]
  }
];

const Education = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 overflow-hidden bg-background border-t border-border/40 scroll-reveal-subject">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

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
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Foundation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Education &{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Studies.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              Building theoretical frameworks in computational scaling, algorithm logics, and deep neural structures.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bento-card border border-border/60 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  <div className="relative">
                    {/* Header line */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-bold font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <BookOpen className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm font-semibold text-muted-foreground mb-4">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  </div>

                  {/* Highlights/Focus tags */}
                  {edu.focusArea && (
                    <div className="relative flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                      {edu.focusArea.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono font-bold bg-background/50 border border-border text-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
