import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    rating: 5,
    text: "Aryan's work on our AI-powered analytics platform exceeded all expectations. His technical expertise combined with creative problem-solving made him an invaluable asset to our project.",
    stat: "98%",
    label: "Client Satisfaction"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Solutions Ltd.",
    rating: 5,
    text: "Working with Aryan was a game-changer for our startup. His ability to understand complex requirements and deliver elegant solutions is remarkable.",
    stat: "150%",
    label: "Performance Boost"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Studios",
    rating: 5,
    text: "The attention to detail and user-centric approach in Aryan's designs truly set him apart. He brings both technical skill and artistic vision to every project.",
    stat: "95%",
    label: "User Engagement"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              What My Clients <span className="text-gradient-bronze">Say</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building lasting relationships through quality work and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-6 bg-card border border-border hover-lift animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-bronze flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{testimonial.label}</span>
                    <span className="text-2xl font-bold text-primary">{testimonial.stat}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
