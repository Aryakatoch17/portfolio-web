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
          className="mode-toggle"
          onClick={onToggleMode}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={mode === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {mode === 'dark' ? (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm12.95 6.36a1 1 0 010 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.41 0zM7.76 6.34a1 1 0 010 1.41l-.7.7A1 1 0 015.64 7l.7-.7a1 1 0 011.42 0zm9.9-1.41a1 1 0 010 1.41l-.7.7A1 1 0 0115.54 5.6l.7-.7a1 1 0 011.42 0zM7.05 17.66a1 1 0 010 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.41 0z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.1 22c-5.2-.3-9.3-4.7-9.1-9.9.2-4.5 3.7-8.2 8.1-8.9.6-.1 1.1.5.9 1.1A7.5 7.5 0 0119.7 14c.5-.1 1.1.4 1 1-.6 4-4.1 6.9-8.6 7z"
              />
            </svg>
          )}
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
