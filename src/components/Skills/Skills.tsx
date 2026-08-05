import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#09090B] py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black text-white"
        >
          Skills
        </motion.h2>

        <div className="space-y-14">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <h3 className="mb-8 text-2xl font-bold text-emerald-400">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

                {group.items.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      key={skill.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"

                    >
                      <div className="flex flex-col items-center">

                        <Icon
                          size={45}
                          className="mb-4 text-emerald-400"
                        />

                        <h4 className="text-center font-semibold text-white">
                          {skill.name}
                        </h4>

                      </div>

                    </motion.div>

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