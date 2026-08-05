import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { portfolio } from "../../data/portfolio";
import SectionEyebrow from "../UI/SectionEyebrow";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field.");
      return;
    }

    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;

    window.location.href = `mailto:${portfolio.personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-7xl">

        <SectionEyebrow number="06" label="Contact" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center text-5xl font-black text-slate-900 dark:text-white"
        >
          Contact Me
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-500 dark:text-slate-400">
          Open to Java Full Stack Engineer opportunities and collaborations.
          Feel free to reach out if you'd like to discuss a role,
          collaboration, or project.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-6">

            {/* Email */}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-emerald-400">

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-3xl text-emerald-600 dark:text-emerald-400" />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
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

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-emerald-400">

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-3xl text-emerald-600 dark:text-emerald-400" />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                 <a href={`tel:${portfolio.personal.phone}`}>
                     {portfolio.personal.phone}
                     </a>
                </div>

              </div>

            </div>

            {/* GitHub */}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-black dark:hover:border-white">

              <div className="flex items-center gap-4">

                <FaGithub className="text-3xl text-slate-900 dark:text-white" />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
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

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500">

              <div className="flex items-center gap-4">

                <FaLinkedin className="text-3xl text-blue-500" />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
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

            <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-red-400">

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-3xl text-red-400" />

                <div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Location
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400">
                    Hyderabad, Telangana, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 bg-transparent p-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-300 bg-transparent p-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-300 bg-transparent p-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 dark:border-white/10 dark:text-white dark:placeholder:text-slate-500"
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