import { tokenize } from "../../utils/tokenize";

export default function SkillCategoryCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tokenize(text).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
