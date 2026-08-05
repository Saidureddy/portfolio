import { useEffect, useState } from "react";
import { accentThemes, DEFAULT_ACCENT_ID } from "../data/accentThemes";

function getInitialAccent(): string {
  const stored = localStorage.getItem("accent");
  if (stored && accentThemes.some((t) => t.id === stored)) return stored;
  return DEFAULT_ACCENT_ID;
}

function applyAccent(id: string) {
  const theme = accentThemes.find((t) => t.id === id) ?? accentThemes[0];
  const root = document.documentElement;

  (Object.keys(theme.accent) as Array<keyof typeof theme.accent>).forEach((shade) => {
    root.style.setProperty(`--accent-${shade}`, theme.accent[shade]);
  });

  (Object.keys(theme.accent2) as Array<keyof typeof theme.accent2>).forEach((shade) => {
    root.style.setProperty(`--accent2-${shade}`, theme.accent2[shade]);
  });
}

export function useAccentTheme() {
  const [accentId, setAccentId] = useState<string>(getInitialAccent);

  useEffect(() => {
    applyAccent(accentId);
    localStorage.setItem("accent", accentId);
  }, [accentId]);

  return { accentId, setAccentId, accentThemes };
}
