import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import LearningJourney from "@/components/LearningJourney";
import Education from "@/components/Education";
import AIExploration from "@/components/AIExploration";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <LearningJourney />
        <Education />
        <AIExploration />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
