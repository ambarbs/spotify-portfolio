import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import ContactSection from "./components/contact/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-16">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
