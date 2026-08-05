import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-4 text-center text-5xl font-black text-white">
          Key Contributions
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Standout engineering work from building TOUCAN's payment platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-4 flex items-start justify-between gap-4">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <span className="whitespace-nowrap rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-300">
                  {project.metric}
                </span>

              </div>

              <p className="mb-6 leading-7 text-slate-300">
                {project.description}
              </p>

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

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}