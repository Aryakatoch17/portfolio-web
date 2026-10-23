import { experience } from '../data'
import { useReveal } from '../hooks'

export function Experience() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="history-container" id="history" ref={ref}>
      <h1>Career History</h1>
      <p className="section-intro">
        Roles spanning ML research, on-device GenAI, and full-stack product delivery.
      </p>
      <div className={`timeline${visible ? ' visible' : ''}`}>
        {experience.map((item, index) => (
          <article
            className={`timeline-item${index % 2 === 0 ? ' left' : ' right'}`}
            key={item.role + item.org}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <span className="timeline-date">{item.period}</span>
              <h3>{item.role}</h3>
              <h4>
                {item.org} · {item.location}
              </h4>
              <p>{item.detail}</p>
              <div className="timeline-skills">
                {item.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
