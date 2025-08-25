export default function LevelDots({ level = 3 }: { level?: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < level ? "bg-emerald-400" : "bg-zinc-700"
          }`}
        />
      ))}
    </div>
  );
}
