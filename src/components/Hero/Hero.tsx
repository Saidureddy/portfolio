import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Eye, Download, Briefcase } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { certificates } from "../../data/certifications";
import Background from "../Background/Background";
import profileImg from "../../assets/images/profile.jpg";

const typingSequence = certificates.flatMap((item) => [
  `${item.metric} ${item.tagline}`,
  2000,
]);


export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 dark:bg-[#09090B] lg:pt-20"
>
    <Background />
      {/* Background Blur */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--accent-500)]/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[var(--accent2-500)]/20 blur-[150px]" />

      {/* Container */}

<div className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-5 py-2 text-sm text-[var(--accent-700)] dark:text-[var(--accent-300)]">
            👋 Welcome To My Portfolio
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none">

  <span className="block text-slate-900 dark:text-white">
    Badam
  </span>

  <span className="block bg-gradient-to-r from-[var(--accent-400)] via-[var(--accent2-400)] to-purple-400 bg-clip-text text-transparent">
    Rajasekhara Reddy
  </span>

</h1>

          <h2 className="bg-gradient-to-r from-[var(--accent-400)] to-[var(--accent2-400)] bg-clip-text text-3xl font-bold text-transparent">
            {portfolio.personal.role}
          </h2>

         <div className="space-y-6">

  <div className="h-14">

    <TypeAnimation
      sequence={typingSequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="bg-gradient-to-r from-[var(--accent-400)] to-[var(--accent2-400)] bg-clip-text text-3xl font-bold text-transparent"
    />

  </div>

  <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
    4+ years building enterprise-scale FinTech payment platforms with Java,
    Spring Boot, Microservices, Angular, and Kafka — spanning payment
    acquiring, switching, settlement, and reconciliation.
  </p>

</div>
<div className="flex flex-wrap gap-4">

  {/* View Resume */}

  <a
    href={portfolio.personal.resume}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl bg-[var(--accent-500)] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--accent-400)]"
  >
    <Eye size={18} /> View Resume
  </a>

  {/* Download Resume */}

  <a
    href={portfolio.personal.resume}
    download
    className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:border-[var(--accent-400)] hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
  >
    <Download size={18} /> Download Resume
  </a>

  {/* Projects */}

  <a
    href="#projects"
    className="flex items-center gap-2 rounded-xl border border-[var(--accent2-200)] bg-[var(--accent2-50)] px-6 py-3 font-semibold text-[var(--accent2-700)] transition-all duration-300 hover:border-[var(--accent2-400)] hover:bg-[var(--accent2-100)] dark:border-[var(--accent2-400)]/30 dark:bg-[var(--accent2-500)]/10 dark:text-[var(--accent2-300)] dark:hover:bg-[var(--accent2-500)]/20"
  >
    <Briefcase size={18} /> Projects
  </a>

 

</div>
<div className="mt-10 flex flex-wrap gap-10">

  <div>
    <h2 className="text-4xl font-bold text-[var(--accent-600)] dark:text-[var(--accent-400)]">4+</h2>
    <p className="text-slate-500 dark:text-slate-400">Years Experience</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-[var(--accent2-600)] dark:text-[var(--accent2-400)]">12+</h2>
    <p className="text-slate-500 dark:text-slate-400">Microservices Shipped</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-amber-600 dark:text-yellow-400">8K TPS</h2>
    <p className="text-slate-500 dark:text-slate-400">Peak Throughput</p>
  </div>

</div>
</motion.div>

{/* RIGHT */}

<div className="flex flex-col items-center">

  {/* Profile Card */}

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="rounded-3xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-white/5"
  >
    <img
  src={profileImg}
  alt="Badam Rajasekhara Reddy"
/>
  </motion.div>

</div>

{/* End Container */}
</div>

<motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1.8,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <div className="flex h-12 w-7 justify-center rounded-full border border-black/20 dark:border-white/20">
    <div className="mt-2 h-3 w-3 rounded-full bg-[var(--accent-400)]" />
  </div>
</motion.div>
    </section>
  );
}