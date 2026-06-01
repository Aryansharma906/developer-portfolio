import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, X, Cpu, CheckCircle2, TrendingUp, Info } from "lucide-react";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: string;
  tech: string[];
  github: string;
  demo: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "AI Responsible Collections Engine",
    description: "Intelligent collection prediction system utilizing XGBoost and neural nets to segment customer payment risk profiles, optimizing outreach.",
    problem: "Financial collections systems rely on rigid, outdated rule bases, leading to high default rates and aggressive, non-compliant outreach strategies.",
    solution: "Built a predictive risk-segmentation pipeline that schedules user-tailored contact strategies using custom outreach templates.",
    outcomes: [
      "Secured a 35% improvement in overall payment recovery rates.",
      "Ensured 100% regulatory compliance for collections operations.",
      "Integrated Kafka message queues with Spring Boot microservices."
    ],
    metrics: "35% recovery improvement",
    tech: ["Python", "XGBoost", "TensorFlow", "FastAPI", "Kafka", "Spring Boot"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    title: "Enterprise RAG Vector Search",
    description: "Production Retrieval-Augmented Generation system optimizing LLM outputs with Pinecone database vector indexes.",
    problem: "Generative AI systems hallucinate answers when queried on private, complex knowledge bases, rendering them unusable for internal enterprise operations.",
    solution: "Designed a multi-step semantic search indexer using recursive text chunking and cosine similarity lookups over metadata-tagged documents.",
    outcomes: [
      "Achieved a 90% query retrieval accuracy rate.",
      "Reduced vector lookup latency to sub-80ms for enterprise documents.",
      "Implemented auto-scaling Pinecone and ChromaDB indexes."
    ],
    metrics: "90% query accuracy",
    tech: ["LangChain", "OpenAI", "Pinecone", "ChromaDB", "FastAPI", "React"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Agentic Research Assistant",
    description: "Multi-agent research tool automating literature reviews, citation mappings, and summarization pipelines.",
    problem: "Researchers spend hours reviewing redundant journals, mapping bibliography lineages, and synthesizing structured abstracts manually.",
    solution: "Constructed a multi-agent framework utilizing CrewAI and LangChain to parallelize abstract summaries, cross-reference papers, and index metadata.",
    outcomes: [
      "Boosted research literature analysis speeds by 10x.",
      "Auto-generated interactive markdown reports detailing citation networks.",
      "Implemented custom local vector store search with ChromaDB."
    ],
    metrics: "10x research speedup",
    tech: ["CrewAI", "LangChain", "GPT-4", "Python", "ChromaDB", "Streamlit"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "End-to-End MLOps Pipeline",
    description: "ML pipeline automating customer churn prediction, feature extraction, continuous training, and Docker deployments.",
    problem: "Deployed models slowly degrade in production due to feature drift, and manually retuning datasets slows release cadence.",
    solution: "Automated feature engineering and model tracking with MLflow, deploying a containerized pipeline that auto-triggers retraining when drift exceeds thresholds.",
    outcomes: [
      "Achieved a 92% churn prediction accuracy rating.",
      "Automated continuous training and rollback states using AWS SageMaker.",
      "Decomposed model code into clean, scalable Docker images."
    ],
    metrics: "92% prediction accuracy",
    tech: ["Scikit-learn", "MLflow", "AWS SageMaker", "Docker", "FastAPI", "Github Actions"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Time Series Demand Forecaster",
    description: "Demand forecasting engine combining Prophet and DeepAR architectures for multi-horizon inventory predictions.",
    problem: "Erratic market demands create stockout events and excess inventory overhead due to weak forecasting algorithms.",
    solution: "Created an ensemble forecaster blending Facebook Prophet with DeepAR neural models, tracking dynamic uncertainty boundaries.",
    outcomes: [
      "Reduced Mean Absolute Percentage Error (MAPE) by 25%.",
      "Created visual forecast charts using dynamic React dashboards.",
      "Scaled pipeline to handle 10,000+ historical stock SKU datasets."
    ],
    metrics: "25% MAPE reduction",
    tech: ["Prophet", "PyTorch", "FastAPI", "React", "Pandas", "Plotly"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Kafka Anomaly Detector",
    description: "Streaming financial transaction anomaly detection platform leveraging real-time Kafka topics and TensorFlow.",
    problem: "Delayed fraud detection permits bad actors to execute illicit transfers, causing substantial financial liability.",
    solution: "Engineered a low-latency sliding-window prediction pipeline that evaluates incoming stream payloads against neural autoencoders.",
    outcomes: [
      "Achieved a 99.5% transaction anomaly detection rate.",
      "Maintained system processing latency below 15ms per transaction stream.",
      "Configured Grafana monitoring dashboards for operational alerting."
    ],
    metrics: "99.5% fraud detection rate",
    tech: ["Apache Kafka", "TensorFlow", "FastAPI", "Grafana", "InfluxDB", "Python"],
    github: "https://github.com/Aryansharma906",
    demo: "https://github.com/Aryansharma906",
    color: "from-pink-500/20 to-primary/20",
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-background border-t border-border/40 scroll-reveal-subject">
      {/* Glow Rings */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-copper/5 rounded-full blur-[120px] pointer-events-none" />

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
              <Cpu className="w-3.5 h-3.5" />
              Systems Engineering
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Case Studies in{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                AI & Software.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              From custom model training to real-time microservices. Select a case study to inspect details.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full p-8 rounded-2xl bento-card flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle Gradient Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary font-mono">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {project.metrics}
                      </span>
                      <Info className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative">
                    {/* Tech tag preview */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold bg-background/60 border border-border text-foreground/80">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold bg-background/30 text-muted-foreground">
                          +{project.tech.length - 3} More
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                      Inspect Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-card border border-primary/20 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] z-10 scanline"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-lg bg-background border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
                onClick={() => setSelectedProject(null)}
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Metric */}
              <div className="flex flex-wrap items-center gap-3 mb-6 pr-8">
                <h3 className="text-2xl sm:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary font-mono">
                  {selectedProject.metrics}
                </span>
              </div>

              <div className="space-y-8">
                {/* Meta grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl border border-border bg-background/40">
                    <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">The Challenge</span>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-border bg-background/40">
                    <span className="block text-xs uppercase tracking-widest text-copper font-bold mb-2">The Solution</span>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-4">Key Outcomes & Implementation Details</span>
                  <div className="space-y-3">
                    {selectedProject.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-foreground/90">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Tech Stack */}
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">Technologies Leveraged</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold font-mono bg-background border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-background hover:bg-primary/90 flex-1 sm:flex-initial"
                  >
                    <a href={selectedProject.github} target="_blank" rel="noreferrer">
                      <Github className="w-5 h-5 mr-2" /> Open Repository
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-primary/20 hover:border-primary text-primary flex-1 sm:flex-initial"
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" /> Launch Live System
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
