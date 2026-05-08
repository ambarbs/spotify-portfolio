// src/components/engineering-summary/EngineeringSummary.tsx

const engineeringAreas = [
  {
    title: 'Frontend Architecture',
    description:
      'React, TypeScript, Next.js, micro-frontends, modular UI, performance, accessibility, and maintainable application structure.',
  },
  {
    title: 'Design Systems',
    description:
      'Reusable component libraries, shared UI patterns, Figma-to-code collaboration, accessibility improvements, and component refactoring.',
  },
  {
    title: 'Product Engineering',
    description:
      'Turning ambiguous requirements into shipped features across product, design, backend, QA, and delivery teams.',
  },
  {
    title: 'Integration & Platform',
    description:
      'REST, GraphQL, Node.js, BFF patterns, CMS-driven UI, CI/CD, cloud-aware frontend delivery, and production quality workflows.',
  },
];

export default function EngineeringSummary() {
  return (
    <section id="engineering-summary" className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Engineering Profile
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Frontend systems, not just interfaces
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          I focus on building scalable, maintainable frontend platforms for
          complex product environments — from design systems and micro-frontends
          to API-driven UI and production delivery.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {engineeringAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h3 className="text-lg font-semibold text-white">{area.title}</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
