import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../../data/profile";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-semibold">{PROFILE.name}</h1>
          <p className="text-xs text-zinc-400">{PROFILE.title}</p>
        </div>
        <Nav />
        <div className="flex gap-3">
          <a
            href={PROFILE.github}
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Github />
          </a>
          <a
            href={PROFILE.linkedin}
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Linkedin />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Mail />
          </a>
        </div>
      </div>
    </header>
  );
}
