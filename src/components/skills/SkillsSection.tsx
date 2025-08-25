import { Code } from "lucide-react";
import { skillsSections } from "../../data/skills";
import { toSkillTokens } from "../../utils/transform";
import SkillCategoryCard from "./SkillCategoryCard";
import LevelDots from "./LevelDots";
import SkillBar from "./SkillBar";

const SKILL_TOKENS = toSkillTokens(skillsSections);

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 space-y-6">
      <h2 className="text-xl text-white">Skills</h2>

      {/* A) Categories */}
      <div className="grid md:grid-cols-3 gap-4">
        {skillsSections.map((cat) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            text={cat.text}
          />
        ))}
      </div>

      {/* B) Proficiency bars */}
      <div className="grid md:grid-cols-2 gap-4">
        {SKILL_TOKENS.slice(0, 12).map((s) => (
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

      {/* C) Toolbelt chip cloud */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="flex flex-wrap gap-2">
          {SKILL_TOKENS.slice(12).map((s) => (
            <span
              key={s.name}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
