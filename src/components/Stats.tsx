import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 18, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const newValue = Math.floor(stat.value * easeOutQuart);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
        }
      }, stepDuration);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {counts[index]}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
