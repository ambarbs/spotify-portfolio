import { ExternalLink } from "lucide-react";
import type { Project } from "../../types";

export default function ProjectCard({
  p,
  onClick,
}: {
  p: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10"
    >
      <div
        className={`h-32 w-full rounded-lg mb-3 bg-gradient-to-br ${p.color}`}
      />
      <h3 className="text-white font-semibold">{p.name}</h3>
      <p className="text-sm text-zinc-300">{p.tagline}</p>
      <a
        className="text-xs text-emerald-400 inline-flex items-center gap-1 mt-2"
        href={p.link}
        target="_blank"
        rel="noreferrer"
      >
        Live <ExternalLink className="h-3 w-3" />
      </a>
    </button>
  );
}
