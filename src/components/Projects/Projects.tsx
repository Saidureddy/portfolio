import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-black text-white"
        >
          Projects
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Standout engineering work from building TOUCAN's payment platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
            >

              <h3 className="mb-4 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mb-6 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mb-6 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}