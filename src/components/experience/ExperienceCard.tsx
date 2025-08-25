import { Calendar, Star } from "lucide-react";
import type { ExperienceItem } from "../../types";

export default function ExperienceCard({ e }: { e: ExperienceItem }) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
      <div className="text-white font-semibold">{e.role}</div>
      <div className="text-sm text-zinc-300">{e.company}</div>
      <div className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
        <Calendar className="h-3 w-3" /> {e.period}
      </div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
        {e.highlights.map((h, i) => (
          <li key={h + i} className="flex gap-2">
            <Star className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" /> {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
