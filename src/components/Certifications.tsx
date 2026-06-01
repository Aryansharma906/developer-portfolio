import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  platform: string;
  year: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    platform: "Coursera",
    year: "2024",
    skills: ["Supervised Learning", "Neural Networks", "ML Pipeline Design"],
  },
  {
    title: "Deep Learning Professional Certificate",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    year: "2024",
    skills: ["CNNs", "RNNs", "Sequence Models", "NLP"],
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    platform: "TensorFlow",
    year: "2023",
    skills: ["TensorFlow", "Keras", "Model Deployment"],
  },
  {
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    platform: "AWS",
    year: "2023",
    skills: ["SageMaker", "ML on Cloud", "Model Deployment"],
  },
  {
    title: "Data Engineering Professional",
    issuer: "Google Cloud",
    platform: "GCP",
    year: "2023",
    skills: ["Data Pipelines", "BigQuery", "Dataflow"],
  },
  {
    title: "CS50 Introduction to Python",
    issuer: "Harvard University",
    platform: "edX",
    year: "2022",
    skills: ["Python", "DSA", "Object Oriented Programming"],
  },
];

const Certifications = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleVerify = () => {
    window.open("https://linkedin.com/in/aryan-sharma-engineer", "_blank");
  };

  return (
    <section id="certifications" className="relative py-32 overflow-hidden bg-background border-t border-border/40 scroll-reveal-subject">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

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
              <Award className="w-3.5 h-3.5" />
              Credentials & Verification
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Verified Technical{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Certifications.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              Academic and industry validations from Stanford, Google, AWS, and Harvard.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bento-card flex flex-col justify-between relative overflow-hidden">
                  <div className="relative">
                    {/* Badge Icon */}
                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(0,255,100,0.1)] transition-all duration-300">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer} &bull; {cert.platform}</p>
                  </div>

                  <div className="relative mt-4">
                    {/* Year badge */}
                    <div className="flex justify-between items-center text-xs font-mono mb-4 text-muted-foreground">
                      <span>Platform: {cert.platform}</span>
                      <span className="text-primary font-bold">{cert.year}</span>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold bg-background/50 border border-border text-foreground/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={handleVerify}
              className="group border-2 border-primary/20 hover:border-primary bg-transparent hover:bg-primary/5 text-primary px-8 py-6"
            >
              Verify Certificate Lineage
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
