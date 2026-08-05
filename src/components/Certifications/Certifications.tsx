import { motion } from "framer-motion";
import { certificates } from "../../data/certifications";
import SectionEyebrow from "../UI/SectionEyebrow";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-white py-16 px-6 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl">

        <SectionEyebrow number="05" label="Achievements" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-black text-slate-900 dark:text-white"
        >
          Key Achievements
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-500 dark:text-slate-400">
          Measurable impact delivered on TOUCAN's payment platform.
        </p>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

{certificates.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group border-t-2 border-[var(--accent-400)]/40 pt-6 transition-colors duration-300 hover:border-[var(--accent2-400)]"
            >

              <p className="mb-2 bg-gradient-to-r from-[var(--accent-400)] to-[var(--accent2-400)] bg-clip-text text-4xl font-black text-transparent transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
                {item.metric}
              </p>

              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}