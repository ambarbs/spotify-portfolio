export const tokenize = (csv: string) =>
  csv
    .split(",")
    .map((t) => t.replace(/\(.*?\)/g, "").trim())
    .filter(Boolean);
