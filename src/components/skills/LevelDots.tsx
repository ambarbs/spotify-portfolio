export default function LevelDots({ level = 3 }: { level?: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= Math.floor(level)) {
          // full dot
          return (
            <span key={i} className="h-2 w-2 rounded-full bg-emerald-400" />
          );
        } else if (i < level) {
          // half dot
          return (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-zinc-700"
            />
          );
        }
        // empty dot
        return <span key={i} className="h-2 w-2 rounded-full bg-zinc-700" />;
      })}
    </div>
  );
}
