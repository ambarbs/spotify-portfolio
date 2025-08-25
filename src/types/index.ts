export type Project = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  impact: string;
  link: string;
  repo?: string;
  color: string; // tailwind gradient string
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type SkillToken = { name: string; level: 1 | 2 | 3 | 4 | 5 };
