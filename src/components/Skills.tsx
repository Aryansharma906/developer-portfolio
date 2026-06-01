import { Code2, Brain, Zap, Wrench, Lightbulb, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    category: "Technical Mastery",
    icon: Code2,
    gradient: "bg-gradient-bronze",
    skills: [
      { name: "TypeScript & JavaScript", level: 94, depth: "Expert" },
      { name: "React & Modern Frontend", level: 93, depth: "Expert" },
      { name: "Full-Stack Development", level: 92, depth: "Advanced" },
      { name: "AR/WebXR Technologies", level: 89, depth: "Advanced" },
      { name: "Node.js & Backend", level: 91, depth: "Expert" },
      { name: "Database Design (SQL/NoSQL)", level: 88, depth: "Advanced" }
    ]
  },
  {
    category: "AI/ML & Cognitive Systems",
    icon: Brain,
    gradient: "bg-gradient-accent",
    skills: [
      { name: "Machine Learning Pipelines", level: 87, depth: "Advanced" },
      { name: "Natural Language Processing", level: 85, depth: "Advanced" },
      { name: "Prompt Engineering", level: 91, depth: "Expert" },
      { name: "AI Tool Integration (Claude, GPT)", level: 92, depth: "Expert" },
      { name: "Data Analysis & Visualization", level: 86, depth: "Advanced" },
      { name: "Python (Scientific Computing)", level: 89, depth: "Advanced" }
    ]
  },
  {
    category: "Automation & No-Code",
    icon: Zap,
    gradient: "bg-gradient-copper",
    skills: [
      { name: "Zapier & Make Workflows", level: 90, depth: "Expert" },
      { name: "No-Code Solution Architecture", level: 88, depth: "Advanced" },
      { name: "API Integration & Webhooks", level: 89, depth: "Advanced" },
      { name: "Business Process Automation", level: 87, depth: "Advanced" }
    ]
  },
  {
    category: "Design & UX/UI",
    icon: Lightbulb,
    gradient: "from-amber-500/40 to-orange-500/40",
    skills: [
      { name: "Responsive UI Design", level: 91, depth: "Expert" },
      { name: "Micro-interactions & Animations", level: 92, depth: "Expert" },
      { name: "Design Systems & Components", level: 89, depth: "Advanced" },
      { name: "Accessibility (A11y)", level: 85, depth: "Advanced" }
    ]
  },
  {
    category: "Business & Growth",
    icon: TrendingUp,
    gradient: "from-cyan-500/40 to-blue-500/40",
    skills: [
      { name: "Growth Marketing Strategy", level: 84, depth: "Advanced" },
      { name: "Consulting & Advisory", level: 86, depth: "Advanced" },
      { name: "Project Strategy & Planning", level: 88, depth: "Advanced" },
      { name: "Design Thinking & Innovation", level: 90, depth: "Expert" }
    ]
  },
  {
    category: "Strategic Thinking",
    icon: Wrench,
    gradient: "from-emerald-500/40 to-teal-500/40",
    skills: [
      { name: "Pattern Recognition", level: 95, depth: "Exceptional" },
      { name: "Systems Thinking", level: 91, depth: "Expert" },
      { name: "Metacognition & Self-Awareness", level: 92, depth: "Expert" },
      { name: "Strategic Foresight", level: 90, depth: "Expert" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">
            Expertise <span className="text-gradient-bronze">Landscape</span>
          </h2>

          <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Segmented mastery across technical, cognitive, and creative domains—each layer reflecting strategic depth and integrated thinking
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.category}
                  className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in group overflow-hidden"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${typeof category.gradient === 'string' && category.gradient.includes('bg-gradient') ? 'transparent' : 'rgba(var(--primary),'} 0.03)` }} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`${typeof category.gradient === 'string' && category.gradient.includes('bg-gradient') ? category.gradient : `bg-gradient-to-r ${category.gradient}`} p-3 rounded-lg group-hover:scale-110 transition-smooth`}>
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-foreground/90 font-medium">{skill.name}</p>
                            <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full group-hover/skill:bg-primary/20 transition-colors">
                              {skill.depth}
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden group-hover/skill:shadow-md transition-shadow">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover/skill:shadow-lg"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Psychometric Strengths */}
          <div className="mt-16 bg-card border border-border rounded-lg p-10 animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-center text-foreground">
              Cognitive & Psychometric Profile
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: "Pattern Recognition", value: 95, description: "Exceptional ability to identify hidden connections and structures" },
                { metric: "Creative Synthesis", value: 94, description: "Integrating disparate concepts into innovative solutions" },
                { metric: "Strategic Foresight", value: 90, description: "Anticipating trends and planning multiple steps ahead" }
              ].map((item) => (
                <div key={item.metric} className="text-center group hover:translate-y-1 transition-transform duration-300">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl font-bold text-primary">{item.value}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground mb-2">{item.metric}</p>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
