import { useMemo, useState } from "react";
import type { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import NowPlayingBar from "../NowPlayingBar";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [nowPlayingId, setNowPlayingId] = useState(projects[0]?.id);
  const [playing, setPlaying] = useState(true);

  const nowPlaying = useMemo(
    () => projects.find((p) => p.id === nowPlayingId) ?? projects[0],
    [nowPlayingId, projects]
  );

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-xl text-white mb-3">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} onClick={() => setNowPlayingId(p.id)} />
        ))}
      </div>
      {nowPlaying && (
        <NowPlayingBar
          nowPlaying={nowPlaying}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
    </section>
  );
}
