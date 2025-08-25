import ExperienceCard from "./ExperienceCard";
import { experienceSection } from "../../data/experience";
import { toExperience } from "../../utils/transform";

const EXPERIENCE = toExperience(experienceSection);

export default function ExperienceSection() {
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
