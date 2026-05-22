import { useState, useRef } from 'react'
import './BanquetForm.css'

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  event?: string
  date?: string
  guests?: string
}

export default function BanquetForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)
  const [successDetail, setSuccessDetail] = useState('')
  const [hidden, setHidden] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const eventRef = useRef<HTMLSelectElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const guestsRef = useRef<HTMLInputElement>(null)

  const today = new Date().toISOString().split('T')[0]

  function clearError(field: keyof FormErrors) {
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: FormErrors = {}

    if (!nameRef.current?.value.trim()) newErrors.name = 'Please fill this in.'
    if (!phoneRef.current?.value.trim()) {
      newErrors.phone = 'Please fill this in.'
    } else if (!/^[0-9 +\-]{7,}$/.test(phoneRef.current.value)) {
      newErrors.phone = 'A valid phone number, please.'
    }
    if (!emailRef.current?.value.trim()) {
      newErrors.email = 'Please fill this in.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      newErrors.email = 'A valid email, please.'
    }
    if (!eventRef.current?.value) newErrors.event = 'Please fill this in.'
    if (!dateRef.current?.value) newErrors.date = 'Please fill this in.'
    if (!guestsRef.current?.value || Number(guestsRef.current.value) < 1) newErrors.guests = 'Please enter a valid number.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const firstName = nameRef.current!.value.trim().split(/\s+/)[0]
    const eventVal = eventRef.current!.value
    const date = dateRef.current!.value
    const d = new Date(date + 'T00:00:00')
    const niceDate = d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    setSuccessDetail(`Dear ${firstName || 'guest'}, your enquiry for a ${eventVal} on ${niceDate} has been received. A banquet manager will reach you within twenty-four hours.`)
    setHidden(true)
    setTimeout(() => setSuccess(true), 50)
  }

  return (
    <section className="section section--deep" id="enquire">
      <div className="wrap">
        <div className="section__head">
          <div className="eyebrow reveal">Tell Us About the Day</div>
          <h2 className="section__title reveal" data-delay={1}>Reserve your <em>celebration.</em></h2>
          <p className="section__lede reveal" data-delay={2}>
            Share the broad strokes — guest count, date, the kind of day you imagine —
            and a banquet manager will reach you within twenty-four hours with a tailored proposal.
          </p>
        </div>

        <form className="reserve__box reveal" onSubmit={handleSubmit} noValidate>
          <div className="reserve__grid" style={hidden ? { display: 'none' } : undefined}>
            <div className={`field${errors.name ? ' is-invalid' : ''}`}>
              <label htmlFor="b-name">Full Name</label>
              <input id="b-name" name="name" type="text" placeholder="e.g. Sana" ref={nameRef} onChange={() => clearError('name')} />
              <span className="err">{errors.name}</span>
            </div>
            <div className={`field${errors.phone ? ' is-invalid' : ''}`}>
              <label htmlFor="b-phone">Phone</label>
              <input id="b-phone" name="phone" type="tel" placeholder="+91 98765 43210" ref={phoneRef} onChange={() => clearError('phone')} />
              <span className="err">{errors.phone}</span>
            </div>
            <div className={`field${errors.email ? ' is-invalid' : ''}`}>
              <label htmlFor="b-email">Email</label>
              <input id="b-email" name="email" type="email" placeholder="you@example.com" ref={emailRef} onChange={() => clearError('email')} />
              <span className="err">{errors.email}</span>
            </div>
            <div className={`field${errors.event ? ' is-invalid' : ''}`}>
              <label htmlFor="b-event">Event Type</label>
              <select id="b-event" name="event" ref={eventRef} onChange={() => clearError('event')}>
                <option value="">Select event</option>
                <option>Wedding Reception</option>
                <option>Nikaah / Walima</option>
                <option>Engagement</option>
                <option>Mehndi / Sangeet</option>
                <option>Milad / Religious Function</option>
                <option>Birthday / Anniversary</option>
                <option>Corporate Gala</option>
                <option>Other</option>
              </select>
              <span className="err">{errors.event}</span>
            </div>
            <div className={`field${errors.date ? ' is-invalid' : ''}`}>
              <label htmlFor="b-date">Preferred Date</label>
              <input id="b-date" name="date" type="date" min={today} ref={dateRef} onChange={() => clearError('date')} />
              <span className="err">{errors.date}</span>
            </div>
            <div className={`field${errors.guests ? ' is-invalid' : ''}`}>
              <label htmlFor="b-guests">Number of People</label>
              <input id="b-guests" name="guests" type="number" min="1" placeholder="e.g. 250" ref={guestsRef} onChange={() => clearError('guests')} />
              <span className="err">{errors.guests}</span>
            </div>
            <div className="field">
              <label htmlFor="b-hall">Preferred Hall</label>
              <select id="b-hall" name="hall">
                <option value="">No preference</option>
                <option>Falaknuma Hall — Grand</option>
                <option>Chowmahalla Hall — Intimate</option>
                <option>Both halls combined</option>
              </select>
              <span className="err"></span>
            </div>
            <div className="field">
              <label htmlFor="b-pkg">Package</label>
              <select id="b-pkg" name="package">
                <option value="">Not sure yet</option>
                <option>Mehfil — Intimate</option>
                <option>Darbar — Royal</option>
                <option>Shahi — Crown</option>
                <option>Bespoke / custom package</option>
              </select>
              <span className="err"></span>
            </div>
            <div className="field">
              <label htmlFor="b-budget">Budget (Indicative)</label>
              <select id="b-budget" name="budget">
                <option value="">Prefer not to say</option>
                <option>Under $6,000</option>
                <option>$6,000 – $12,000</option>
                <option>$12,000 – $24,000</option>
                <option>$24,000 – $48,000</option>
                <option>$48,000+</option>
              </select>
              <span className="err"></span>
            </div>
            <div className="field">
              <label htmlFor="b-time">Day Slot</label>
              <select id="b-time" name="time">
                <option value="">Flexible</option>
                <option>Lunch · 12:00 PM – 4:00 PM</option>
                <option>Evening · 5:00 PM – 9:00 PM</option>
                <option>Night · 8:00 PM – 12:00 AM</option>
                <option>All day</option>
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="b-notes">
                A few words on what you imagine{' '}
                <span style={{ color: 'var(--ivory-dim)', letterSpacing: '.18em' }}>(optional)</span>
              </label>
              <textarea id="b-notes" name="notes" rows={4} placeholder="The mood you imagine, special menus, cultural ceremonies, music, dietary requirements, family traditions…" />
            </div>
          </div>

          <div className="reserve__submit" style={hidden ? { display: 'none' } : undefined}>
            <button type="submit" className="btn btn--gold">Send My Enquiry <span className="arr">→</span></button>
          </div>

          <div className={`reserve__success${success ? ' show' : ''}`}>
            <div className="check">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12 L 10 17 L 19 7" />
              </svg>
            </div>
            <h3>Your enquiry is <em>received.</em></h3>
            <p dangerouslySetInnerHTML={{ __html: successDetail || 'A banquet manager will reach you within twenty-four hours with a tailored proposal.' }} />
          </div>
        </form>
      </div>
    </section>
  )
}
