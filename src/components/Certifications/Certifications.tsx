import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { certificates } from "../../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#09090B] py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-black text-white"
        >
          Key Achievements
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Measurable impact delivered on TOUCAN's payment platform.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

{certificates.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
            >

              <TrendingUp
                className="mb-6 text-emerald-400"
                size={36}
              />

              <p className="mb-2 text-3xl font-black text-cyan-300">
                {item.metric}
              </p>

              <h3 className="mb-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-300">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}