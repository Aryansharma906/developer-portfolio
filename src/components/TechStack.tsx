import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Cpu, Terminal, Compass, LayoutGrid } from "lucide-react";

interface TechCategory {
  category: string;
  description: string;
  icon: any;
  color: string;
  skills: string[];
}

const categories: TechCategory[] = [
  {
    category: "AI & Machine Learning",
    description: "Training neural architectures, optimizing tree regressors, and engineering clean analytical pipelines.",
    icon: Brain,
    color: "from-primary/20 to-emerald-500/20 text-primary border-primary/30",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy"],
  },
  {
    category: "Generative AI & Vector Search",
    description: "Orchestrating agent networks, tuning vector indexes, and managing contextual data structures.",
    icon: Compass,
    color: "from-emerald-500/20 to-cyan-500/20 text-emerald-400 border-emerald-500/30",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "Pinecone", "ChromaDB", "Semantic Search"],
  },
  {
    category: "Software Engineering",
    description: "Designing RESTful services, integrating async message brokers, and managing relation stores.",
    icon: Code,
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    skills: ["Python", "SQL", "TypeScript", "FastAPI", "Spring Boot", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Automation & Workflows",
    description: "Containerizing services, deploying models, and automating enterprise security policies.",
    icon: Terminal,
    color: "from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30",
    skills: ["Docker", "Kubernetes", "Apache Kafka", "MLflow", "GitHub Actions", "IAM Security"],
  },
  {
    category: "Tools & Analytics",
    description: "Extracting forensic intelligence, compiling data reports, and scaling cloud environments.",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    skills: ["AWS", "GCP", "Tableau", "Git / Versioning", "Advanced Excel", "Zero-Trust Architecture"],
  }
];

const TechStack = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden bg-background/50 border-t border-border/40 scroll-reveal-subject">
      {/* Background Matrix-like Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,100,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,100,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={containerRef} className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Technical Domain
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Architectural{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Expertise.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              No abstract indicators or skill percentages. Simple, categorized engineering capabilities.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-2xl bento-card flex flex-col justify-between relative overflow-hidden">
                    {/* Glow border overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(0,255,100,0.15)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {cat.category}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {cat.description}
                      </p>
                    </div>

                    {/* Skill tags */}
                    <div className="relative flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold font-mono bg-background/50 border border-border hover:border-primary/40 text-foreground/90 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
