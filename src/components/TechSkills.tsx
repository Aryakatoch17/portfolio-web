import { skillGroups } from '../data'
import { useReveal } from '../hooks'

export function TechSkills() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="tech-skills-container" id="skills" ref={ref}>
      <h1>Technical Skills</h1>
      <p className="tech-skills-lede">
        The full-stack AI toolkit — languages, ML frameworks, backends, and frontends I use to ship
        intelligent products. Broader focus areas live under Expertise.
      </p>

      <div className={`tech-skills-groups fade${visible ? ' visible' : ''}`}>
        {skillGroups.map((group) => (
          <div className="tech-skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tech-skill-list">
              {group.items.map((item) => (
                <li className="tech-skill-item" key={item.name} title={item.name}>
                  <img
                    className="skill-icon-img"
                    src={`https://cdn.simpleicons.org/${item.icon}/${item.color.replace('#', '')}`}
                    alt=""
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                  <span className="tech-skill-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
