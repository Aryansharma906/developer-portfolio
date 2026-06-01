import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
    title: "The Future of AI in Web Development",
    description: "Exploring how artificial intelligence is reshaping the way we build modern web applications.",
    date: "Dec 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
    title: "Design Systems That Scale",
    description: "Building maintainable and scalable design systems for growing digital products.",
    date: "Nov 2024"
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              Design Insights & <span className="text-gradient-bronze">Ideas</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts on design, technology, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {insights.map((insight, index) => (
              <Card
                key={insight.title}
                className="overflow-hidden border border-border bg-card hover-lift animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{insight.date}</p>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto hover:bg-transparent text-primary"
                  >
                    Read More
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Browse All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
