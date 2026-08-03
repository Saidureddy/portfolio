import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-400"
    >
      {children}
    </motion.button>
  );
}