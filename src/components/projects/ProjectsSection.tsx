import { useState, useMemo } from "react";
import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import NowPlayingBar from "../NowPlayingBar";

export default function ProjectsSection() {
  const [nowPlayingId, setNowPlayingId] = useState(PROJECTS[0].id);
  const [playing, setPlaying] = useState(true);

  const nowPlaying = useMemo(
    () => PROJECTS.find((p) => p.id === nowPlayingId) ?? PROJECTS[0],
    [nowPlayingId]
  );

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-xl text-white mb-3">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} onClick={() => setNowPlayingId(p.id)} />
        ))}
      </div>
      <NowPlayingBar
        nowPlaying={nowPlaying}
        playing={playing}
        setPlaying={setPlaying}
      />
    </section>
  );
}
