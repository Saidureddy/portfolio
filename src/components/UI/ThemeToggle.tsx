import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-400"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
