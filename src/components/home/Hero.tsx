import { Download, Mail, MapPin } from "lucide-react";
import type { Profile } from "../../types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl text-white font-bold">{profile.name}</h2>
            <p className="text-zinc-300 mt-1">{profile.summary}</p>
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-white/10 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
