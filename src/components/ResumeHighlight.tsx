import { Button } from "@/components/ui/button";
import { Download, FileText, Award, Briefcase, Code } from "lucide-react";
import profile from "@/data/profile";

const ResumeHighlight = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = `${import.meta.env.BASE_URL}cv.pdf`;
        link.download = `${profile.name}-CV.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const highlights = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "5+ years building scalable web applications with TypeScript, React, Node.js, and modern cloud infrastructure",
            skills: ["TypeScript", "React", "Node.js", "MongoDB", "GraphQL"]
        },
        {
            icon: Award,
            title: "AR/WebXR Expertise",
            description: "Pioneering immersive web experiences using cutting-edge AR and WebXR technologies",
            skills: ["WebXR", "Three.js", "Babylon.js", "AR/VR", "Spatial Computing"]
        },
        {
            icon: Briefcase,
            title: "AI/ML Integration",
            description: "Leveraging machine learning and AI to create intelligent, adaptive applications",
            skills: ["Machine Learning", "NLP", "Prompt Engineering", "AI Tools", "Automation"]
        }
    ];

    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-background via-background/50 to-background overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                        <FileText className="w-4 h-4" />
                        Professional Profile
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold">My Professional Journey</h2>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                        Explore my expertise across full-stack development, AR/WebXR innovation, and AI integration
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                <div className="relative z-10 space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-foreground/70 mb-4">{item.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Ready to Work Together?</h3>
                        <p className="text-lg text-foreground/70">
                            Download my comprehensive CV to see my full experience, projects, and accomplishments
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-base px-8 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold"
                            onClick={downloadCV}
                        >
                            <FileText className="mr-2 w-5 h-5" />
                            Download Full CV
                            <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-base px-8 group font-semibold"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <span>Get in Touch</span>
                            <Code className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <p className="text-sm text-foreground/60 pt-4">
                        📧 {profile.email} • 📱 {profile.phone}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ResumeHighlight;
