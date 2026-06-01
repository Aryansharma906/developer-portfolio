import React, { useState, useEffect, useRef } from "react";
import RESEARCH_PROJECTS, { ResearchProject } from "@/config/researchProjects";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Research: React.FC = () => {
  const [projects, setProjects] = useState<ResearchProject[]>(RESEARCH_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<ResearchProject | null>(null);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tryFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/research');
        if (!res.ok) throw new Error('API unavailable');
        const json = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Using local research projects from config');
        }
      } finally {
        setLoading(false);
      }
    };

    tryFetch();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openProject = (p: ResearchProject) => {
    setSelected(p);
    setOpen(true);
  };

  if (loading && projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto shadow-neo" />
        <p className="mt-6 text-muted-foreground text-lg">Loading research projects...</p>
      </div>
    );
  }

  return (
    <section ref={sectionRef} id="research" className="py-32 bg-background grid-overlay">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/40 rounded-full text-sm font-bold text-primary mb-6 neon-border">
            <span>🔬</span>
            AI Research & Projects
          </div>
          <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6">
            Research <span className="gradient-text neon-text">Projects</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-neo mx-auto mb-6 rounded-full shadow-neo" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
            Exploring the frontier of artificial intelligence through hands-on research and experimentation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <article
              key={p.id}
              className={`group bg-card/50 backdrop-blur-md border border-primary/30 rounded-2xl overflow-hidden hover:border-primary hover:shadow-neo transition-all duration-700 neon-box ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-56 bg-muted overflow-hidden">
                <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                {p.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-neo">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  {p.tags.slice(0, 3).join(" • ")}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground flex-grow mb-4 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-primary/30 text-primary">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openProject(p)}
                    className="text-primary hover:text-primary hover:bg-primary/10 font-bold group/btn"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-card/90 backdrop-blur-xl border-primary/40">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary">{selected?.title}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <Badge key={t} variant="outline" className="border-primary/30 text-primary">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-foreground/90 text-lg leading-relaxed">
                {selected.details || selected.excerpt}
              </p>
              {selected.link && (
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neo font-bold"
                >
                  <a href={selected.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Open Repository
                  </a>
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Research;
