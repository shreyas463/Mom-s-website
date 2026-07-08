import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Expertise', '#expertise'],
  ['Credentials', '#credentials'],
  ['Reviews', '#reviews'],
  ['Videos', '#videos'],
  ['Locations', '#locations'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              R
            </span>
            <span>
              Dr. Rashmi Chaudhary
            </span>
          </a>

          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="btn btn-primary nav-cta" href="#booking" onClick={() => setOpen(false)}>
              Book Consultation
            </a>
          </nav>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
    </>
  )
}
