import { Download, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../../data/profile";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl text-white font-bold">{PROFILE.name}</h2>
            <p className="text-zinc-300 mt-1">{PROFILE.summary}</p>
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {PROFILE.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumeUrl}
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
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
