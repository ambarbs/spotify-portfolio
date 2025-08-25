import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import type { Project } from "../types";

export default function NowPlayingBar({
  nowPlaying,
  playing,
  setPlaying,
}: {
  nowPlaying: Project;
  playing: boolean;
  setPlaying: (fn: (p: boolean) => boolean) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key={nowPlaying.id}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div>
            <div className="text-white text-sm">{nowPlaying.name}</div>
            <div className="text-xs text-zinc-400">{nowPlaying.tagline}</div>
          </div>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="ml-auto bg-emerald-500 px-3 py-1 rounded-full text-black"
          >
            {playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
