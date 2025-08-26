// src/lib/data-source.ts

export const DATA_URL = import.meta.env.VITE_DATA_URL as string | undefined;

function stripHtmlGuards(text: string) {
  const t = text.trim().toLowerCase();
  if (t.startsWith("<!doctype") || t.startsWith("<html")) {
    throw new Error("Got HTML instead of JSON (likely not a RAW URL)");
  }
  return text;
}

async function fetchJson(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const text = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
  try {
    return JSON.parse(stripHtmlGuards(text));
  } catch (e: any) {
    throw new Error(`Invalid JSON from ${url}: ${e?.message ?? "parse error"}`);
  }
}

/**
 * Loads portfolio data:
 * - Prod: uses VITE_DATA_URL as-is (no cache-buster).
 * - Dev: appends ?t=timestamp to bypass caches.
 * - Fallback: /portfolio.json (served from public/).
 */
export async function fetchPortfolio(): Promise<any> {
  if (DATA_URL) {
    const url = import.meta.env.DEV
      ? `${DATA_URL}${DATA_URL.includes("?") ? "&" : "?"}t=${Date.now()}`
      : DATA_URL;

    try {
      return await fetchJson(url);
    } catch (e) {
      console.warn("[data] remote failed, falling back to /portfolio.json:", e);
    }
  }
  return await fetchJson("/portfolio.json");
}
