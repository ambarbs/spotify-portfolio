const links = ["home", "projects", "skills", "experience", "contact"] as const;

export default function Nav() {
  const onNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {links.map((l) => (
        <a
          key={l}
          href={`#${l}`}
          onClick={onNav(l)}
          className="hover:text-white text-zinc-400 capitalize"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}
