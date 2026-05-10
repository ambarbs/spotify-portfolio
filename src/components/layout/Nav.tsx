const links = [
  { id: 'home', label: 'Home' },
  { id: 'engineering-summary', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function Nav() {
  const onNav = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={onNav(link.id)}
          className="text-zinc-400 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
