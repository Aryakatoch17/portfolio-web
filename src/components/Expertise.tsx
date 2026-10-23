import { expertise } from '../data'
import { useReveal } from '../hooks'

function Icon({ name }: { name: string }) {
  if (name === 'brain') {
    return (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
        <path
          fill="currentColor"
          d="M9 3a4 4 0 00-3.87 3.05A3.5 3.5 0 003 9.5c0 1.3.72 2.43 1.78 3.03A3.5 3.5 0 004 15.5 3.5 3.5 0 007.5 19h.76A4.5 4.5 0 0012 21a4.5 4.5 0 003.74-2H16.5A3.5 3.5 0 0020 15.5a3.5 3.5 0 00-.78-2.97A3.5 3.5 0 0021 9.5a3.5 3.5 0 00-2.13-3.22A4 4 0 0015 3c-1.2 0-2.27.53-3 1.36A4 4 0 009 3zm0 2c1.1 0 2 .9 2 2v10.5c0 .83-.67 1.5-1.5 1.5H7.5A1.5 1.5 0 016 17.5c0-.55.3-1.05.78-1.31L8 15.5V13l-1.45-.73A1.5 1.5 0 015.5 11 1.5 1.5 0 017 9.5h2V7a2 2 0 00-2-2zm6 0a2 2 0 00-2 2v2.5h2A1.5 1.5 0 0118.5 11a1.5 1.5 0 01-1.05 1.43L16 13v2.5l1.22.69c.48.26.78.76.78 1.31a1.5 1.5 0 01-1.5 1.5h-2A1.5 1.5 0 0113 17.5V7c0-1.1.9-2 2-2z"
        />
      </svg>
    )
  }
  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8.7 15.9L4.8 12l3.9-3.9L7.3 6.7 2 12l5.3 5.3 1.4-1.4zm6.6 0l1.4 1.4L22 12l-5.3-5.3-1.4 1.4 3.9 3.9-3.9 3.9zM14.1 4.1l-1.9 15.2 1.98.24L16.08 4.34 14.1 4.1z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2l1.2 3.8L17 7l-3.8 1.2L12 12l-1.2-3.8L7 7l3.8-1.2L12 2zm6 8l.8 2.4L21 13l-2.2.6L18 16l-.8-2.4L15 13l2.2-.6L18 10zM6.5 14l.9 2.7L10 17.5l-2.6.8-.9 2.7-.9-2.7-2.6-.8 2.6-.8.9-2.7z"
      />
    </svg>
  )
}

export function Expertise() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="skills-container" id="expertise" ref={ref}>
      <h1>Expertise</h1>
      <div className={`skills-grid fade${visible ? ' visible' : ''}`}>
        {expertise.map((item) => (
          <div className="skill" key={item.title}>
            <Icon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="flex-chips">
              <span className="chip-title">Focus:</span>
              {item.stack.map((label) => (
                <span className="chip" key={label}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
