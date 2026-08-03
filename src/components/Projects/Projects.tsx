import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-16 text-center text-5xl font-black text-white">
          Projects
        </h2>

        <div className="grid gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <h3 className="mb-4 text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mb-6 text-slate-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-white"
              >
                View GitHub
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}