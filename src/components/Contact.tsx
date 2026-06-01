import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Compass } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import profile from "@/data/profile";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("API unavailable");

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.info("Preparing your email client...");
      window.location.href = `mailto:${profile.email}?subject=Portfolio Inquiry from ${data.name}&body=${encodeURIComponent(data.message)}%0A%0AFrom: ${data.email}`;
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: "from-primary/20 to-emerald-500/20 text-primary border-primary/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aryan Sharma",
      href: profile.linkedin,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Aryansharma906",
      href: profile.github,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-background border-t border-border/40 scroll-reveal-subject">
      {/* Background Matrix Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,100,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,100,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary"
            >
              <Compass className="w-3.5 h-3.5" />
              Dialogue Channel
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Initiate a{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Conversation.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              Available for AI/ML engineering positions, technical collaborations, and research proposals.
            </motion.p>
          </div>

          {/* Dual Column */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bento-card border border-border/40">
                <div className="flex items-center gap-3 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Deployment Location</span>
                </div>
                <p className="text-white text-base sm:text-lg font-semibold">
                  Delhi NCR, India &bull; Available Worldwide
                </p>
              </div>

              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-6 rounded-2xl bento-card border border-border/40 hover:border-primary/30 transition-all duration-300 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="block text-xs text-muted-foreground uppercase tracking-wider">{method.label}</span>
                          <span className="text-white font-bold group-hover:text-primary transition-colors">{method.value}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-7 p-8 rounded-2xl bento-card border border-border/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold text-white mb-6">Send Transmission</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Your Identity</label>
                    <Input
                      placeholder="Name / Organization"
                      {...register("name")}
                      className="bg-background/50 border-border/60 focus:border-primary text-foreground placeholder:text-muted-foreground/45 py-6 rounded-xl"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Return Address</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      {...register("email")}
                      className="bg-background/50 border-border/60 focus:border-primary text-foreground placeholder:text-muted-foreground/45 py-6 rounded-xl"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Dialogue Payload</label>
                  <Textarea
                    placeholder="Describe your engineering role, project scope, or proposal details..."
                    rows={6}
                    {...register("message")}
                    className="bg-background/50 border-border/60 focus:border-primary text-foreground placeholder:text-muted-foreground/45 resize-none rounded-xl"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background hover:bg-primary/95 py-6 text-sm font-bold shadow-[0_0_20px_rgba(0,255,100,0.2)] hover:shadow-[0_0_40px_rgba(0,255,100,0.5)] transition-all duration-300"
                >
                  {isSubmitting ? "Sending Transmission..." : "Dispatch Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
