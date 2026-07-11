import { useState } from 'react'
import {
  contact,
  contactReady,
  consultationTypes,
  concernOptions,
  locations,
  doctor,
} from '../data/doctor'

type Form = {
  name: string
  phone: string
  email: string
  consultType: string
  location: string
  concern: string
  preferredDate: string
  message: string
  hp: string // honeypot
}

const empty: Form = {
  name: '',
  phone: '',
  email: '',
  consultType: consultationTypes[0],
  location: locations[0].name,
  concern: concernOptions[0],
  preferredDate: '',
  message: '',
  hp: '',
}

const cleanPhone = (v: string) => v.replace(/[^\d+\-\s()]/g, '')
const emailOk = (v: string) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

// Today as YYYY-MM-DD in the visitor's local timezone (toISOString would
// roll back a day for anyone east of UTC, e.g. all of India, before ~5:30am).
const todayLocal = () => {
  const d = new Date()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

const hasBackend = Boolean(contact.formspreeEndpoint)

export default function Booking() {
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>(
    'idle',
  )

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  function validate(): boolean {
    const e: Partial<Record<keyof Form, string>> = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name.'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 8 || digits.length > 15)
      e.phone = 'Please enter a valid phone number.'
    if (!emailOk(form.email)) e.email = 'Please enter a valid email (or leave blank).'
    if (hasBackend && form.email.trim() === '')
      e.email = 'Please enter an email so the team can confirm your slot.'
    if (!form.preferredDate) e.preferredDate = 'Please choose a preferred date.'
    else if (form.preferredDate < todayLocal())
      e.preferredDate = 'Please choose today or a future date.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const isInPerson = form.consultType.startsWith('In-person')

  function buildMessage(): string {
    return [
      `New appointment request for Dr. Rashmi Chaudhary`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      `Consultation: ${form.consultType}`,
      isInPerson ? `Location: ${form.location}` : null,
      `Concern: ${form.concern}`,
      `Preferred date: ${form.preferredDate}`,
      form.message.trim() ? `Notes: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')
  }

  function botCheck(): boolean {
    // Honeypot filled → treat as spam, pretend success, send nothing.
    if (form.hp) {
      setStatus('sent')
      return false
    }
    return true
  }

  async function submitBackend(e: React.FormEvent) {
    e.preventDefault()
    if (!botCheck()) return
    if (!validate()) return
    setStatus('submitting')
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          consultationType: form.consultType,
          location: isInPerson ? form.location : 'Virtual',
          concern: form.concern,
          preferredDate: form.preferredDate,
          message: form.message.trim(),
          _subject: `Appointment request — ${form.name.trim()}`,
        }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  function submitDirect(e: React.FormEvent, channel: 'whatsapp' | 'email') {
    e.preventDefault()
    if (!botCheck()) return
    if (!validate()) return
    const body = buildMessage()
    if (channel === 'whatsapp') {
      window.open(
        `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(body)}`,
        '_blank',
        'noopener,noreferrer',
      )
    } else {
      const subject = `Appointment request — ${form.name.trim()}`
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
    }
    setStatus('sent')
  }

  function reset() {
    setForm(empty)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow center">Appointments</span>
          <h2 className="section-title">Book a consultation</h2>
          <p className="lead">
            Request a virtual or in-person appointment with Dr. Chaudhary — her
            team will confirm your slot.
          </p>
        </div>

        <div className="booking-grid">
          <aside className="booking-aside">
            <h3>How it works</h3>
            <ol className="steps">
              <li>
                <span className="n">1</span>
                <span>Share your details and preferred date below.</span>
              </li>
              <li>
                <span className="n">2</span>
                <span>Send the request — securely, in one tap.</span>
              </li>
              <li>
                <span className="n">3</span>
                <span>The team calls you back to confirm the timing.</span>
              </li>
            </ol>
            {contactReady && (
              <>
                <p style={{ marginTop: '1.4rem' }}>Prefer to talk to someone directly?</p>
                <div className="quick-contact">
                  <a
                    className="btn btn-whatsapp"
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                  <a className="btn btn-ghost" href={`tel:${contact.phoneDial}`} style={{ color: '#f3e4de', borderColor: 'rgba(255,255,255,.3)' }}>
                    Call {contact.phoneDisplay}
                  </a>
                </div>
              </>
            )}
          </aside>

          {status === 'sent' ? (
            <div className="form-card">
              <div className="form-success">
                <h3 style={{ marginTop: 0 }}>Request received ✓</h3>
                <p style={{ marginBottom: 0 }}>
                  Thank you — your appointment request for Dr. Chaudhary has been
                  {hasBackend ? ' sent to her team' : ' prepared'}. You’ll be
                  contacted shortly to confirm the timing.
                  {contactReady &&
                    ' If you don’t hear back soon, please reach out on WhatsApp using the button on the left.'}
                </p>
              </div>
              <button className="btn btn-ghost" style={{ marginTop: '18px' }} onClick={reset}>
                Make another request
              </button>
            </div>
          ) : (
            <form
              className="form-card"
              onSubmit={
                hasBackend
                  ? submitBackend
                  : contactReady
                    ? (e) => submitDirect(e, 'whatsapp')
                    : (e) => e.preventDefault()
              }
              noValidate
            >
              {status === 'error' && (
                <div className="form-error">
                  Sorry, something went wrong sending your request. Please try
                  again, or message us on WhatsApp using the button on the left.
                </div>
              )}

              {/* Honeypot — hidden from humans, catches bots */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.hp}
                  onChange={(e) => set('hp', e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">
                    Full name <span className="req">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    maxLength={80}
                    value={form.name}
                    aria-invalid={!!errors.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="err">{errors.name}</div>}
                </div>
                <div className="field">
                  <label htmlFor="phone">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    required
                    inputMode="tel"
                    maxLength={20}
                    value={form.phone}
                    aria-invalid={!!errors.phone}
                    onChange={(e) => set('phone', cleanPhone(e.target.value))}
                    placeholder="+91 …"
                  />
                  {errors.phone && <div className="err">{errors.phone}</div>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">
                  Email {hasBackend ? <span className="req">*</span> : '(optional)'}
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={120}
                  value={form.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email && <div className="err">{errors.email}</div>}
              </div>

              <div className="field">
                <label>Consultation type</label>
                <div className="consult-toggle">
                  {consultationTypes.map((c) => (
                    <label key={c}>
                      <input
                        type="radio"
                        name="consultType"
                        checked={form.consultType === c}
                        onChange={() => set('consultType', c)}
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              {isInPerson && (
                <div className="field">
                  <label htmlFor="location">Preferred location</label>
                  <select
                    id="location"
                    value={form.location}
                    onChange={(e) => set('location', e.target.value)}
                  >
                    {locations.map((l) => (
                      <option key={l.name} value={l.name}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-row">
                <div className="field">
                  <label htmlFor="concern">Reason for visit</label>
                  <select
                    id="concern"
                    value={form.concern}
                    onChange={(e) => set('concern', e.target.value)}
                  >
                    {concernOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="date">
                    Preferred date <span className="req">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={todayLocal()}
                    value={form.preferredDate}
                    aria-invalid={!!errors.preferredDate}
                    onChange={(e) => set('preferredDate', e.target.value)}
                  />
                  {errors.preferredDate && (
                    <div className="err">{errors.preferredDate}</div>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Anything else? (optional)</label>
                <textarea
                  id="message"
                  maxLength={600}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="Briefly describe your concern or preferred time"
                />
              </div>

              {hasBackend ? (
                <div className="form-actions">
                  <button type="submit" className="btn btn-accent" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Request appointment'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-whatsapp"
                    onClick={(e) => submitDirect(e, 'whatsapp')}
                  >
                    or send on WhatsApp
                  </button>
                </div>
              ) : contactReady ? (
                <div className="form-actions">
                  <button type="submit" className="btn btn-whatsapp">
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    className="btn btn-accent"
                    onClick={(e) => submitDirect(e, 'email')}
                  >
                    Send via Email
                  </button>
                </div>
              ) : (
                // Contact details not filled in yet (see src/data/doctor.ts) —
                // send patients to the verified Cloudnine page instead of a
                // placeholder number.
                <div className="form-actions">
                  <a
                    className="btn btn-accent"
                    href={doctor.cloudnineProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book via her Cloudnine profile ↗
                  </a>
                </div>
              )}

              <p className="form-note">
                Your details are used only to arrange this appointment. For a
                medical emergency, please call your nearest hospital instead.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
