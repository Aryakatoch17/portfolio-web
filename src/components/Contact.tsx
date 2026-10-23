import { useState, type FormEvent } from 'react'
import { profile } from '../data'
import { useReveal } from '../hooks'

export function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: false, email: false, message: false })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    }
    setErrors(next)
    if (next.name || next.email || next.message) return

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="items-container" id="contact" ref={ref}>
      <div className={`contact_wrapper fade${visible ? ' visible' : ''}`}>
        <h1>Contact Me</h1>
        <p>
          Building a full-stack AI product, GenAI feature, or ML-backed web app? Let&apos;s collaborate.
          Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-flex">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={errors.name}
              />
              {errors.name ? <em>Please enter your name</em> : null}
            </label>
            <label>
              <span>Email / Phone</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email}
              />
              {errors.email ? <em>Please enter your email or phone number</em> : null}
            </label>
          </div>
          <label className="body-form">
            <span>Message</span>
            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={errors.message}
            />
            {errors.message ? <em>Please enter the message</em> : null}
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
