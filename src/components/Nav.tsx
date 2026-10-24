import { useState } from 'react'
import { useScrolled } from '../hooks'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#skills', label: 'Skills' },
  { href: '#history', label: 'History' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

type Props = {
  mode: 'dark' | 'light'
  onToggleMode: () => void
}

export function Nav({ mode, onToggleMode }: Props) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav-home" onClick={close}>
        {`{Arya}`}
      </a>

      <div className="nav-right">
        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`theme-switch${mode === 'light' ? ' light' : ''}`}
          onClick={onToggleMode}
          role="switch"
          aria-checked={mode === 'light'}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={mode === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          <span className="theme-switch-icon sun" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <circle cx="12" cy="12" r="4" fill="#F5C518" />
              <g stroke="#F5C518" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
              </g>
            </svg>
          </span>
          <span className="theme-switch-icon moon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="15" height="15">
              <path
                fill="#E8EEF8"
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              />
            </svg>
          </span>
          <span className="theme-switch-knob" aria-hidden="true" />
        </button>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
