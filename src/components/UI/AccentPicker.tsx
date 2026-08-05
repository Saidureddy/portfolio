import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useAccentTheme } from "../../hooks/useAccentTheme";

export default function AccentPicker() {
  const { accentId, setAccentId, accentThemes } = useAccentTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const active = accentThemes.find((t) => t.id === accentId) ?? accentThemes[0];

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Choose accent color theme"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors hover:border-[var(--accent-400)] dark:border-white/10 dark:bg-white/5"
      >
        <span
          className="h-5 w-5 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${active.swatch[0]}, ${active.swatch[1]})`,
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#0f0f13]"
          >
            {accentThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setAccentId(theme.id);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <span
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${theme.swatch[0]}, ${theme.swatch[1]})`,
                  }}
                />
                <span className="flex-1">{theme.label}</span>
                {theme.id === accentId && (
                  <Check size={16} className="text-[var(--accent-500)]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
