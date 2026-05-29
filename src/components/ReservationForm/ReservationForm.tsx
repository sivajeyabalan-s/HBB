import { useState, useRef } from 'react'
import './ReservationForm.css'

interface FormErrors {
  name?: string
  phone?: string
  date?: string
  time?: string
  guests?: string
}

export default function ReservationForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)
  const [successDetail, setSuccessDetail] = useState('')
  const [hidden, setHidden] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const timeRef = useRef<HTMLSelectElement>(null)
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
    if (!dateRef.current?.value) newErrors.date = 'Please fill this in.'
    if (!timeRef.current?.value) newErrors.time = 'Please fill this in.'
    if (!guestsRef.current?.value || Number(guestsRef.current.value) < 1) newErrors.guests = 'Please enter a valid number.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const firstName = nameRef.current!.value.trim().split(/\s+/)[0]
    const guests = `${guestsRef.current!.value} ${Number(guestsRef.current!.value) === 1 ? 'guest' : 'guests'}`
    const date = dateRef.current!.value
    const time = timeRef.current!.value
    const d = new Date(date)
    const formatted = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    setSuccessDetail(`${firstName}, your table for ${guests} on ${formatted} at ${time} is confirmed. We look forward to hosting you.`)
    setHidden(true)
    setTimeout(() => setSuccess(true), 50)
  }

  return (
    <section className="section section--alt" id="reserve">
      <div className="sec-head">
        <div className="sec-head__num">VII.</div>
        <h2 className="sec-head__title reveal">A seat is held in <em>your name.</em></h2>
        <div className="sec-head__aside">Reservation</div>
      </div>

      <form className="ledger reveal" onSubmit={handleSubmit} noValidate>
        <div className="ledger__head">
          <h3>Reserve your <em>evening.</em></h3>
          <p>Reserve Your Table</p>
        </div>

        <div className="ledger__grid" style={hidden ? { display: 'none' } : undefined}>
          <div className={`lfield${errors.name ? ' is-invalid' : ''}`}>
            <label htmlFor="r-name">In whose name</label>
            <input id="r-name" name="name" type="text" placeholder="Aisha Mehta" ref={nameRef} onChange={() => clearError('name')} />
            <span className="err">{errors.name}</span>
          </div>
          <div className={`lfield${errors.phone ? ' is-invalid' : ''}`}>
            <label htmlFor="r-phone">Reachable at</label>
            <input id="r-phone" name="phone" type="tel" placeholder="+91 98765 43210" ref={phoneRef} onChange={() => clearError('phone')} />
            <span className="err">{errors.phone}</span>
          </div>
          <div className={`lfield${errors.date ? ' is-invalid' : ''}`}>
            <label htmlFor="r-date">On the date of</label>
            <input id="r-date" name="date" type="date" min={today} ref={dateRef} onChange={() => clearError('date')} />
            <span className="err">{errors.date}</span>
          </div>
          <div className={`lfield${errors.time ? ' is-invalid' : ''}`}>
            <label htmlFor="r-time">Arriving at</label>
            <select id="r-time" name="time" ref={timeRef} onChange={() => clearError('time')}>
              <option value="">Choose a time</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
              <option>10:00 PM</option>
            </select>
            <span className="err">{errors.time}</span>
          </div>
          <div className={`lfield${errors.guests ? ' is-invalid' : ''}`}>
            <label htmlFor="r-guests">Number of People</label>
            <input id="r-guests" name="guests" type="number" min="1" max="500" placeholder="e.g. 4" ref={guestsRef} onChange={() => clearError('guests')} />
            <span className="err">{errors.guests}</span>
          </div>
          <div className="lfield">
            <label htmlFor="r-occ">In celebration of</label>
            <select id="r-occ" name="occasion">
              <option value="">A quiet dinner</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Family gathering</option>
              <option>Corporate dinner</option>
              <option>Other</option>
            </select>
            <span className="err"></span>
          </div>
          <div className="lfield lfield--full">
            <label htmlFor="r-notes">
              A note for the kitchen{' '}
              <small style={{ color: 'var(--ivory-dim)', letterSpacing: '.18em', fontSize: '8px' }}>(optional)</small>
            </label>
            <textarea id="r-notes" name="notes" rows={3} placeholder="Dietary preferences, surprise arrangements, seating requests…" />
          </div>
        </div>

        <div className="ledger__submit" style={hidden ? { display: 'none' } : undefined}>
          <p>The maître d' will confirm within the hour.</p>
          <button type="submit" className="btn btn--gold">Submit <span className="arr">→</span></button>
        </div>

        <div className={`ledger__success${success ? ' show' : ''}`}>
          <div className="check">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12 L 10 17 L 19 7" />
            </svg>
          </div>
          <h3>Your table is <em>held.</em></h3>
          <p>{successDetail || 'A confirmation will reach you shortly. We look forward to hosting you.'}</p>
        </div>
      </form>
    </section>
  )
}
