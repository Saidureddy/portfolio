import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-20 top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]"
      />

    </div>
  );
}