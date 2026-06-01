import { motion } from "framer-motion";
import profile from "@/data/profile";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                {profile.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building AI-driven products and intelligent systems for the next generation of technology.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                Built With
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["React", "TypeScript", "Python", "ML"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="px-3 py-1 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Year */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h3 className="text-3xl font-bold mb-3 text-primary">
                {new Date().getFullYear()}
              </h3>
              <p className="text-muted-foreground">
                Engineering the future of AI
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <span className="text-primary font-semibold">{profile.name}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
