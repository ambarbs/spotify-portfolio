import { Github, Linkedin, Mail } from 'lucide-react';
import { FaNpm } from 'react-icons/fa';
import type { Profile } from '../../types';
import Nav from './Nav';

export default function Header({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-semibold">{profile.name}</h1>
          <p className="text-xs text-zinc-400">{profile.title}</p>
        </div>
        <Nav />
        <div className="flex gap-3">
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <Github />
          </a>
          <a
            href={profile.npm}
            aria-label="NPM"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <FaNpm size={20} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <Linkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <Mail />
          </a>
        </div>
      </div>
    </header>
  );
}
