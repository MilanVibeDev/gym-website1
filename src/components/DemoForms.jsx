import { useState } from 'react'

function todayAsInputDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function TextField({ label, name, type = 'text', required = true, ...rest }) {
  return (
    <label className="form-field">
      <span>{label}{required ? ' *' : ''}</span>
      <input name={name} type={type} required={required} {...rest} />
    </label>
  )
}

export function TourForm({ selectedPlan }) {
  const [submitted, setSubmitted] = useState(false)
  const clearFeedback = () => setSubmitted(false)

  return (
    <form className="demo-form tour-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} onChange={clearFeedback}>
      {selectedPlan && <p className="selected-plan-note">Exploring the <strong>{selectedPlan}</strong> membership</p>}
      <div className="form-grid">
        <TextField label="Name" name="name" autoComplete="name" />
        <TextField label="Email" name="email" type="email" autoComplete="email" />
        <TextField label="Phone" name="phone" type="tel" autoComplete="tel" />
        <TextField label="Preferred date" name="date" type="date" min={todayAsInputDate()} />
        <label className="form-field form-field-full">
          <span>Fitness goal *</span>
          <select name="goal" defaultValue="" required>
            <option value="">Select your primary goal</option>
            <option>Build strength</option><option>Improve general fitness</option><option>Start training</option><option>Build muscle</option><option>Improve mobility</option><option>Other</option>
          </select>
        </label>
      </div>
      <button className="button button-accent" type="submit">Book My Free Tour <span aria-hidden="true">↗</span></button>
      <p className="form-notice">Demo form only. Nothing is sent, saved, or booked.</p>
      {submitted && <p className="form-feedback" role="status">Demo complete. Your details were not submitted and no tour was booked.</p>}
    </form>
  )
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const clearFeedback = () => setSubmitted(false)

  return (
    <form className="demo-form contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} onChange={clearFeedback}>
      <div className="form-grid">
        <TextField label="First name" name="firstName" autoComplete="given-name" />
        <TextField label="Last name" name="lastName" autoComplete="family-name" />
        <TextField label="Email" name="email" type="email" autoComplete="email" />
        <TextField label="Phone" name="phone" type="tel" autoComplete="tel" required={false} />
        <label className="form-field form-field-full"><span>Subject *</span><select name="subject" defaultValue="" required><option value="">Choose a subject</option><option>General inquiry</option><option>Membership</option><option>Personal training</option><option>Classes</option><option>Other</option></select></label>
        <label className="form-field form-field-full"><span>Message *</span><textarea name="message" rows="6" required minLength="10" placeholder="How can we help?" /></label>
      </div>
      <button className="button button-accent" type="submit">Send Message <span aria-hidden="true">↗</span></button>
      <p className="form-notice">Demo form only. Nothing is sent or saved.</p>
      {submitted && <p className="form-feedback" role="status">Demo complete. Your message was not sent or saved.</p>}
    </form>
  )
}
