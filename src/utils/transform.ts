import type { ExperienceItem, SkillToken } from "../types";
import { tokenize } from "./tokenize";

export function toExperience(exp: any): ExperienceItem[] {
  return (exp.subSections || []).map((s: any) => ({
    role: s.workTitle,
    company: s.subSectionTitle,
    period: s.yearsWorked,
    highlights: s.subSectionTexts || [],
  }));
}

export function toSkillTokens(
  categories: { title: string; text: string }[]
): SkillToken[] {
  const names = Array.from(
    new Set(categories.flatMap((c) => tokenize(c.text)))
  );
  return names.map((name) => ({
    name,
    level:
      /react|typescript|next|redux|mobx|node|aws|graphql|testing|jest|rtl|performance|css|tailwind|azure|lighthouse/i.test(
        name
      )
        ? 4
        : 3,
  })) as SkillToken[];
}
