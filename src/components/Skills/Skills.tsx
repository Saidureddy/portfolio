import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import SectionEyebrow from "../UI/SectionEyebrow";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-16 px-6 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl">

        <SectionEyebrow number="02" label="Skills" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black text-slate-900 dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition hover:border-[var(--accent-400)] dark:border-white/10 dark:bg-white/5"
            >

              <h3 className="mb-5 text-lg font-bold text-[var(--accent-600)] dark:text-[var(--accent-400)]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <span
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-[var(--accent-400)] hover:text-[var(--accent-600)] dark:border-white/10 dark:bg-black/20 dark:text-slate-200 dark:shadow-none dark:hover:text-[var(--accent-400)]"
                    >
                      <Icon size={16} className="text-[var(--accent-600)] dark:text-[var(--accent-400)]" />
                      {skill.name}
                    </span>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
