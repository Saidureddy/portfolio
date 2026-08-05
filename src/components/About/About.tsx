import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import SectionEyebrow from "../UI/SectionEyebrow";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 px-6 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <SectionEyebrow number="01" label="About" />

          <h2 className="mb-6 text-center text-5xl font-black text-slate-900 dark:text-white">
            About Me
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-600 dark:text-slate-300">
            {portfolio.personal.about.description}
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 backdrop-blur-xl transition hover:border-emerald-400 md:col-span-2">

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
      <h4 className="font-semibold text-slate-900 dark:text-white">
        {edu.degree}
      </h4>

      <p className="text-slate-600 dark:text-slate-300 text-sm">
        {edu.institution}
      </p>

      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {edu.duration}
      </p>

      <p className="text-emerald-400 text-sm">
        {edu.score}
      </p>
    </div>
  ))}
</div>

            </div>

            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-yellow-400">

              <Award className="mb-4 text-amber-600 dark:text-yellow-400" size={32} />

              <p className="mb-1 text-4xl font-black text-amber-600 dark:text-yellow-400">
                {portfolio.personal.about.education[0].score}
              </p>

              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Academic Score
              </h3>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400 md:col-span-2">

              <Briefcase className="mb-6 text-cyan-400" size={38} />

              <h3 className="mb-4 text-2xl font-bold">
                Current Role
              </h3>

             <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="font-semibold text-slate-900 dark:text-white">
        {portfolio.personal.about.currentRole.role}
      </h4>

      <p className="text-slate-600 dark:text-slate-300 text-sm">
        {portfolio.personal.about.currentRole.company}
      </p>

      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {portfolio.personal.about.currentRole.duration}
      </p>

      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {portfolio.personal.about.currentRole.location}
      </p>
</div>

            </div>

            <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-pink-400">

              <MapPin className="mb-4 text-pink-400" size={32} />

              <p className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                Hyderabad
              </p>

              <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Telangana, India
              </h3>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}