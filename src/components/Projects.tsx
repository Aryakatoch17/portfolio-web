import { projects } from '../data'
import { useReveal } from '../hooks'

export function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="projects-container" id="projects" ref={ref}>
      <h1>Personal Projects</h1>
      <p className="section-intro">
        Products where models meet APIs and UI — full-stack AI systems I&apos;ve designed and shipped.
      </p>
      <div className={`projects-grid fade${visible ? ' visible' : ''}`}>
        {projects.map((project) => {
          const link = project.live ?? project.href
          return (
            <article className="project" key={project.title}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`project-thumb zoom${project.image ? ' has-image' : ''}`}
                style={{ ['--accent' as string]: project.accent }}
              >
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} />
                ) : (
                  <span className="project-thumb-title">{project.title}</span>
                )}
              </a>
              <h2>
                <a href={link} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h2>
              <p>{project.blurb}</p>
              <div className="project-meta">
                <a href={project.href} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
