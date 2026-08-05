import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-5xl font-black text-white"
        >
          Contact Me
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Open to Java Full Stack Engineer opportunities and collaborations.
          Feel free to reach out if you'd like to discuss a role,
          collaboration, or project.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-6">

            {/* Email */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-emerald-400">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-3xl text-emerald-400" />

                <div>

                  <h3 className="font-semibold text-white">
                    Email
                  </h3>

                 <a
                 href={`mailto:${portfolio.personal.email}`}
                  >
                     {portfolio.personal.email}
                     </a>
                </div>

              </div>

            </div>

            {/* Phone */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-emerald-400">

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-3xl text-emerald-400" />

                <div>

                  <h3 className="font-semibold text-white">
                    Phone
                  </h3>

                 <a href={`tel:${portfolio.personal.phone}`}>
                     {portfolio.personal.phone}
                     </a>
                </div>

              </div>

            </div>

            {/* GitHub */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white">

              <div className="flex items-center gap-4">

                <FaGithub className="text-3xl text-white" />

                <div>

                  <h3 className="font-semibold text-white">
                    GitHub
                  </h3>

                 <a
  href={portfolio.personal.github}
  target="_blank"
  rel="noopener noreferrer"
>
  View GitHub Profile
</a>

                </div>

              </div>

            </div>

            {/* LinkedIn */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500">

              <div className="flex items-center gap-4">

                <FaLinkedin className="text-3xl text-blue-500" />

                <div>

                  <h3 className="font-semibold text-white">
                    LinkedIn
                  </h3>

                  <a
                 href={portfolio.personal.linkedin}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Profile
                 </a>

                </div>

              </div>

            </div>

            {/* Location */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-red-400">

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-3xl text-red-400" />

                <div>

                  <h3 className="font-semibold text-white">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    Hyderabad, Telangana, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="mb-6 text-3xl font-bold text-white">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-emerald-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-emerald-400"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none focus:border-emerald-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}