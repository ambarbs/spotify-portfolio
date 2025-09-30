import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ContactSection from './components/contact/ContactSection';
import { usePortfolio } from './context/PortfolioContext';
import ProjectsSection from './components/projects/ProjectsSection';

export default function App() {
  const state = usePortfolio();

  if (state.status === 'loading') return <div className="p-6">Loading…</div>;
  if (state.status === 'error')
    return (
      <div className="p-6 text-red-400">Failed to load data: {state.error}</div>
    );

  const { profile, projects, skillsSections, skills, experience } = state.data;

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <Header profile={profile} />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-16">
        <Hero profile={profile} />
        <ProjectsSection projects={projects} />
        <SkillsSection skillsSections={skillsSections} skills={skills} />
        <ExperienceSection experienceSection={experience} />
        <ContactSection profile={profile} />
      </main>
    </div>
  );
}
