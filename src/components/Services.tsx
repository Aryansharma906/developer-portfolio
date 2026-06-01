import { Code, Palette, Brain, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Design",
    description: "Creating responsive, modern websites that deliver exceptional user experiences across all devices."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Crafting visual identities and designs that capture attention and communicate effectively."
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Developing intelligent systems powered by machine learning and artificial intelligence."
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Building memorable brand experiences that resonate with your target audience."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              What I Can Do <span className="text-gradient-bronze">For You</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into reality through innovative design and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-6 bg-card border border-border hover-lift group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
