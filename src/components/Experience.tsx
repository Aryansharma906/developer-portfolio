import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Cyber Security Analyst Intern",
    period: "Feb 2026 - May 2026",
    description: "Engineered and documented IAM frameworks for enterprise-level systems. Designed automated HR-driven User Lifecycle (JML) pipelines and context-aware Multi-Factor Authentication (MFA) to enforce Zero Trust architecture. Collaborated with Cybersecurity Consulting team to align security policies with business objectives.",
    highlights: [
      "Engineered IAM frameworks for enterprise systems",
      "Designed automated JML pipelines",
      "Implemented Zero Trust architecture",
    ],
  },
  {
    company: "Deloitte",
    role: "Data Analytics Intern",
    period: "Dec 2025 - Feb 2026",
    description: "Conducted forensic data investigations on large-scale datasets, identifying anomalies, compliance risks, and behavioral patterns. Engineered dynamic Tableau dashboards translating raw findings into high-impact visual narratives. Leveraged Advanced Excel to classify, clean, and synthesize datasets for risk mitigation strategies.",
    highlights: [
      "Conducted forensic data investigations",
      "Built dynamic Tableau dashboards",
      "Synthesized datasets for risk mitigation",
    ],
  },
  {
    company: "Tata Group",
    role: "Gen AI Data Analytics",
    period: "Nov 2025 - Feb 2026",
    description: "Conducted exploratory data analysis (EDA) to evaluate customer delinquency risk and structured insights for predictive modeling within financial services.",
    highlights: [
      "Conducted EDA on financial data",
      "Evaluated customer delinquency risk",
      "Structured insights for predictive modeling",
    ],
  },
  {
    company: "JPMorgan Chase",
    role: "Software Engineering",
    period: "Completed Feb 2026",
    description: "Designed an AI-driven collections strategy leveraging agentic AI automation, incorporating ethical AI principles, regulatory compliance, and scalable implementation frameworks. Integrated Kafka and Spring Boot into microservice architecture.",
    highlights: [
      "Designed AI-driven collections strategy",
      "Integrated Kafka & Spring Boot",
      "Implemented microservice architecture",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium"
            >
              Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-emerald-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Building AI systems at world-class organizations
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className={`relative mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 p-0.5 shadow-[0_0_20px_rgba(0,255,100,0.5)]"
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="relative pl-16 md:pl-0 md:px-12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary hover:bg-card/60 transition-all duration-500 shadow-[0_0_25px_-8px_rgba(0,255,100,0.2)] hover:shadow-[0_0_50px_-8px_rgba(0,255,100,0.5)]"
                  >
                    {/* Period */}
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {exp.period}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-2xl font-bold mb-1 text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold mb-4 text-foreground">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          whileHover={{ x: 5, scale: 1.02 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + i * 0.1 }}
                          className={`flex items-center gap-2 text-sm text-foreground/80 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(0,255,100,0.5)]" />
                          <span className="cursor-pointer hover:text-primary transition-colors duration-300">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
