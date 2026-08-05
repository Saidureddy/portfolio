import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squeeze } from "hamburger-react";
import { portfolio } from "../../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            {portfolio.personal.name}
          </h1>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {portfolio.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-emerald-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        <div className="hidden lg:block">
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

        <div className="lg:hidden">
          <Squeeze
            toggled={isOpen}
            toggle={setIsOpen}
            color="#ffffff"
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
            className="overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">

              {portfolio.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-emerald-400"
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