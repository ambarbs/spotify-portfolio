import ExperienceCard from "./ExperienceCard";
import { toExperience } from "../../utils/transform";
import type { ExperienceRaw } from "../../types";

export default function ExperienceSection({
  experienceSection,
}: {
  experienceSection: ExperienceRaw;
}) {
  const EXPERIENCE = toExperience(experienceSection);
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-xl text-white mb-3">Experience</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {EXPERIENCE.map((e) => (
          <ExperienceCard key={e.company + e.period} e={e} />
        ))}
      </div>
    </section>
  );
}
