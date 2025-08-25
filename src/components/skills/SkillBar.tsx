export default function SkillBar({ level = 3 }: { level?: number }) {
  return (
    <div className="h-2 w-full bg-zinc-800 rounded">
      <div
        className="h-2 rounded bg-emerald-500"
        style={{ width: `${(level / 5) * 100}%` }}
      />
    </div>
  );
}
