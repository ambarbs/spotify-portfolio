export type Project = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  impact: string;
  link: string;
  repo?: string;
  color: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type SkillToken = { name: string; level: 1 | 2 | 3 | 4 | 5 };

export type Profile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  resumeUrl: string;
  email: string;
  github: string;
  linkedin: string;
  npm: string;
};

export type SkillSection = { title: string; text: string };

export type ExperienceRaw = {
  header: string;
  type: string;
  subSections: Array<{
    subSectionTitle: string;
    workTitle: string;
    yearsWorked: string;
    subSectionTexts?: string[];
    techStack?: Record<string, string>;
  }>;
};

export type Portfolio = {
  profile: Profile;
  skillsSections: SkillSection[];
  projects: Project[];
  experience: ExperienceRaw;
};
