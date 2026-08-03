import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-black text-white"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

{certificates.map((item: any, index: number) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
            >

              <Award
                className="mb-6 text-yellow-400"
                size={40}
              />

              <h3 className="mb-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mb-2 text-emerald-400">
                {item.organization}
              </p>

              <p className="mb-5 text-sm text-slate-400">
                {item.duration}
              </p>

              <p className="mb-6 leading-7 text-slate-300">
                {item.description}
              </p>

              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
              >
                <ExternalLink size={18} />
                View Certificate
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}