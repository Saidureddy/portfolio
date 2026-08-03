import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h2 className="mb-6 text-center text-5xl font-black text-white">
            About Me
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-300">
            {portfolio.personal.about.description}
          </p>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-emerald-400">

              <GraduationCap className="mb-6 text-emerald-400" size={38} />

              <h3 className="mb-4 text-2xl font-bold">
                Education
              </h3>

              <div className="space-y-4">
  {portfolio.personal.about.education.map((edu, index) => (
    <div
      key={index}
      className="border-l-2 border-emerald-400 pl-4"
    >
      <h4 className="font-semibold text-white">
        {edu.degree}
      </h4>

      <p className="text-slate-300 text-sm">
        {edu.institution}
      </p>

      <p className="text-slate-400 text-sm">
        {edu.duration}
      </p>

      <p className="text-emerald-400 text-sm">
        {edu.score}
      </p>
    </div>
  ))}
</div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400">

              <Briefcase className="mb-6 text-cyan-400" size={38} />

              <h3 className="mb-4 text-2xl font-bold">
                Internship
              </h3>

             <div className="space-y-4">
  {portfolio.personal.about.internships.map((item, index) => (
    <div
      key={index}
      className="border-l-2 border-cyan-400 pl-4"
    >
      <h4 className="font-semibold text-white">
        {item.role}
      </h4>

      <p className="text-slate-300 text-sm">
        {item.company}
      </p>

      <p className="text-slate-400 text-sm">
        {item.duration}
      </p>

      <p className="text-slate-400 text-sm">
        {item.location}
      </p>
    </div>
  ))}
</div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-yellow-400">

              <Award className="mb-6 text-yellow-400" size={38} />

              <h3 className="mb-4 text-2xl font-bold">
                CGPA
              </h3>

              <p className="text-3xl font-bold text-yellow-400">
  {portfolio.personal.about.education[0].score}
</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-pink-400">

              <MapPin className="mb-6 text-pink-400" size={38} />

              <h3 className="mb-4 text-2xl font-bold">
                Location
              </h3>

              <p className="text-slate-300">
                {portfolio.personal.about.location}
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}