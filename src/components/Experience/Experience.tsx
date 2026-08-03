import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black text-white"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-emerald-500/40 ml-5">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[44px] top-4 h-6 w-6 rounded-full bg-emerald-500 border-4 border-[#09090B]" />

              {/* Card */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20">

                <div className="flex items-center gap-4 mb-4">

                  <Briefcase className="text-emerald-400" size={30} />

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-emerald-400">
                      {exp.company}
                    </p>
                  </div>

                </div>

                <div className="mb-6 flex flex-wrap gap-6 text-slate-400 text-sm">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {exp.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>

                </div>

                <p className="mb-6 leading-7 text-slate-300">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {exp.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}