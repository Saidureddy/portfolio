import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
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
  className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] pt-28 lg:pt-20"
>
    <Background />
      {/* Background Blur */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Container */}

<div className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300">
            👋 Welcome To My Portfolio
          </span>

          <h1 className="text-6xl lg:text-8xl font-black leading-none">

  <span className="block text-white">
    Badam
  </span>

  <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Rajasekhara Reddy
  </span>

</h1>

          <h2 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
            {portfolio.personal.role}
          </h2>

         <div className="space-y-6">

  <div className="h-14">

    <TypeAnimation
      sequence={typingSequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent"
    />

  </div>

  <p className="max-w-xl text-lg leading-8 text-slate-300">
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
    className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
  >
    👁 View Resume
  </a>

  {/* Download Resume */}

  <a
    href={portfolio.personal.resume}
    download
    className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:bg-white/10"
  >
    ⬇ Download Resume
  </a>

  {/* Projects */}

  <a
    href="#projects"
    className="rounded-xl border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10"
  >
    💼 Projects
  </a>

 

</div>
<div className="mt-10 flex flex-wrap gap-10">

  <div>
    <h2 className="text-4xl font-bold text-emerald-400">4+</h2>
    <p className="text-slate-400">Years Experience</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-cyan-400">12+</h2>
    <p className="text-slate-400">Microservices Shipped</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-yellow-400">8K TPS</h2>
    <p className="text-slate-400">Peak Throughput</p>
  </div>

</div>
</motion.div>

       
             {/* RIGHT - AI Assistant */}

{/* RIGHT */}

<div className="flex flex-col items-center">

  {/* Profile Card */}

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl"
  >
    <img
  src={profileImg}
  alt="Badam Rajasekhara Reddy"
/>
  </motion.div>

  {/* AI Button */}

  <button
    className="mt-8 flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
  >
    🤖 Ask My AI Assistant
  </button>

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
  <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
    <div className="mt-2 h-3 w-3 rounded-full bg-emerald-400" />
  </div>
</motion.div>
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
  <div className="h-12 w-7 rounded-full border border-white/20 flex justify-center">

    <div className="mt-2 h-3 w-3 rounded-full bg-emerald-400"/>

  </div>
</motion.div>
    </section>
  );
}