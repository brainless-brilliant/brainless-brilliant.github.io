import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FloatingNavigation from "./components/FloatingNavigation";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import TimelineSection from "./components/TimelineSection";
import ToolsSection from "./components/ToolsSection";

import "./App.css";

// Main App Component
const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingNavigation />
      <HeroSection />
      <ToolsSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <SkillsSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default App;