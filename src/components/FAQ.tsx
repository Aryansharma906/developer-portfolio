import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in web development, AI/ML solutions, graphic design, and branding. My expertise spans full-stack development with React and Node.js, machine learning implementations, and creating comprehensive digital experiences."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A standard website takes 2-4 weeks, while more complex AI/ML solutions or full-stack applications may require 6-12 weeks. I always provide detailed timelines during project planning."
  },
  {
    question: "What is your design process?",
    answer: "My process begins with understanding your goals and requirements, followed by research and planning. I then create wireframes and prototypes, iterate based on feedback, and finally deliver a polished, production-ready solution with ongoing support."
  },
  {
    question: "Do you work with remote clients?",
    answer: "Absolutely! I've successfully collaborated with clients worldwide. Through video calls, project management tools, and regular communication, I ensure smooth collaboration regardless of location."
  },
  {
    question: "What technologies do you use?",
    answer: "I work with modern technologies including React, TypeScript, Node.js, Python, TensorFlow, PyTorch, and various AI/ML frameworks. I choose the best tools for each project's specific needs."
  },
  {
    question: "Can you help with ongoing maintenance?",
    answer: "Yes! I offer maintenance packages that include updates, bug fixes, performance optimization, and feature enhancements to ensure your project continues to perform at its best."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              Frequently Asked <span className="text-gradient-bronze">Questions</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about my services and process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
