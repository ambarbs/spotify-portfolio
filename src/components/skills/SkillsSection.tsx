import { Code } from 'lucide-react';
import LevelDots from './LevelDots';
import SkillBar from './SkillBar';
import type { Skill, SkillSection } from '../../types';
import SkillCategoryCard from './SkillCategoryCard';

export default function SkillsSection({
  skills,
  skillsSections,
}: {
  skills: Skill[];
  skillsSections: SkillSection[];
}) {
  return (
    <section id="skills" className="scroll-mt-20 space-y-6">
      <h2 className="text-xl text-white">Skills</h2>

      {/* A) Category cards (from skillsSections) */}
      <div className="grid md:grid-cols-3 gap-4">
        {skillsSections.map((cat) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            text={cat.text}
          />
        ))}
      </div>

      {/* B) Explicit skills with levels */}
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white/5 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Code className="h-4 w-4 text-zinc-400" />
                {s.name}
              </span>
              <LevelDots level={s.level} />
            </div>
            <SkillBar level={s.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
