import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squeeze } from "hamburger-react";
import { portfolio } from "../../data/portfolio";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../UI/ThemeToggle";

const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

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
      className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/30"
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
          {portfolio.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-all duration-300 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button + Theme Toggle */}

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a
            href={portfolio.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-400"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}

        <div className="flex items-center gap-3 lg:hidden">
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
            className="overflow-hidden border-t border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">

              {portfolio.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-600 transition-all duration-300 hover:bg-black/5 hover:text-emerald-500 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-emerald-400"
                >
                  {item.name}
                </a>
              ))}

              <a
                href={portfolio.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-emerald-500 px-4 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-400"
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
