import { profile } from '../data'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="footer-social">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
