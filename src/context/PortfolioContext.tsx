import React, { createContext, useContext, useEffect, useState } from "react";
import type { Portfolio } from "../types";
import { fetchPortfolio } from "../lib/data-source";

type State =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "ready"; data: Portfolio };

const Ctx = createContext<State>({ status: "loading" });

function assertPortfolio(v: any): asserts v is Portfolio {
  if (!v || typeof v !== "object") throw new Error("Data is not an object");
  if (!v.profile?.name) throw new Error("Missing profile.name");
  if (!Array.isArray(v.projects)) throw new Error("projects must be an array");
  if (!Array.isArray(v.skillsSections))
    throw new Error("skillsSections must be an array");
  if (!v.experience?.subSections)
    throw new Error("Missing experience.subSections");
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const raw = await fetchPortfolio();
        assertPortfolio(raw);
        if (on) setState({ status: "ready", data: raw });
      } catch (e: any) {
        if (on) setState({ status: "error", error: e?.message ?? "unknown" });
      }
    })();
    return () => {
      on = false;
    };
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export function usePortfolio() {
  return useContext(Ctx);
}
