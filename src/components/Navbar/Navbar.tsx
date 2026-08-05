import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squeeze } from "hamburger-react";
import clsx from "clsx";
import { portfolio } from "../../data/portfolio";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../UI/ThemeToggle";
import AccentPicker from "../UI/AccentPicker";

const NAVBAR_HEIGHT = 80;
const SECTION_IDS = portfolio.navigation.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;

      const top =
        target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/30"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div>
          <h1 className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
            {portfolio.personal.name}
          </h1>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {portfolio.navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;

            return (
              <a
                key={item.name}
                href={item.href}
                className={clsx(
                  "relative pb-1 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-[var(--accent-500)] dark:text-[var(--accent-400)]"
                    : "text-slate-600 hover:text-[var(--accent-500)] dark:text-gray-300 dark:hover:text-[var(--accent-400)]"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[var(--accent-500)] dark:bg-[var(--accent-400)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Resume Button + Theme Toggle */}

        <div className="hidden items-center gap-4 lg:flex">
          <AccentPicker />
          <ThemeToggle />
          <a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[var(--accent-500)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--accent-400)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}

        <div className="flex items-center gap-3 lg:hidden">
          <AccentPicker />
          <ThemeToggle />
          <Squeeze
            toggled={isOpen}
            toggle={setIsOpen}
            color={theme === "dark" ? "#ffffff" : "#0f172a"}
            size={26}
            label="Toggle navigation menu"
          />
        </div>

      </div>

      {/* Mobile Menu Panel */}

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">

              {portfolio.navigation.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={clsx(
                      "rounded-xl px-4 py-3 text-base font-medium transition-all duration-300",
                      isActive
                        ? "bg-[var(--accent-500)]/10 text-[var(--accent-500)] dark:text-[var(--accent-400)]"
                        : "text-slate-600 hover:bg-slate-100 hover:text-[var(--accent-500)] dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-[var(--accent-400)]"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}

              <a
                href={portfolio.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-[var(--accent-500)] px-4 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-[var(--accent-400)]"
              >
                Resume
              </a>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
