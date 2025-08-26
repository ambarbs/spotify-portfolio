import { Github, Linkedin, Mail } from "lucide-react";
import type { Profile } from "../../types";

export default function ContactSection({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-xl text-white mb-3">Contact</h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-zinc-300">
            Open to senior front-end roles, creative contracts, or fun
            side-projects.
          </p>
          <p className="text-sm text-zinc-400">Usually replies within a day.</p>
        </div>
        <div className="flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-4 py-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={profile.linkedin}
            className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 inline-flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            className="px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 inline-flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
