import { useEffect, useState } from 'react'
import { TourForm } from '../components/DemoForms'
import { classes, equipment, faqs, features, plans, schedule, testimonials, trainers } from '../data/siteContent'
import heroImage from '../assets/gym-hero.jpg'
import turfImage from '../assets/gym-turf.jpg'

const extraSchedule = [
  { day: 'Thursday', sessions: [['6:00 AM', 'Iron Strength'], ['12:00 PM', 'Core & Conditioning'], ['5:30 PM', 'Peak HIIT']] },
  { day: 'Friday', sessions: [['6:00 AM', 'Peak HIIT'], ['5:30 PM', 'Iron Strength'], ['7:00 PM', 'Mobility Reset']] },
  { day: 'Saturday', sessions: [['8:00 AM', 'Athletic Performance'], ['10:00 AM', 'Core & Conditioning']] },
  { day: 'Sunday', sessions: [['9:00 AM', 'Mobility Reset'], ['11:00 AM', 'Iron Strength']] },
]

function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</span>
}

function SectionHeading({ eyebrow, title, copy, light = false, align = '' }) {
  return (
    <div className={`section-heading ${align}${light ? ' section-heading-light' : ''}`} data-reveal="rise">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="Concept image of a modern strength training floor with squat racks and natural light" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="container hero-content">
        <Eyebrow light>YOUR STRONGER STARTS HERE · AUSTIN, TX</Eyebrow>
        <h1 id="hero-title">Built for Progress.<br /><em>Designed for Real Life.</em></h1>
        <p>Premium equipment, expert coaching, and a training environment built to help you get stronger, healthier, and more confident.</p>
        <div className="hero-actions">
          <a className="button button-accent" href="#memberships">View Memberships <span aria-hidden="true">↗</span></a>
          <a className="button button-outline-light" href="#tour">Book a Free Tour <span aria-hidden="true">↗</span></a>
        </div>
        <span className="hero-image-note">Illustrative facility image · fictional gym</span>
      </div>
      <div className="container hero-bottom"><span>01 / THE IRON PEAK EXPERIENCE</span><a href="#social-proof">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>
  )
}

function HeroStats() {
  return (
    <section className="hero-stats" aria-label="Sample gym statistics">
      <div className="container hero-stats-grid">
        <div data-reveal="rise"><strong>1,800+</strong><span>Active Members</span></div>
        <div data-reveal="rise" style={{ '--reveal-delay': '90ms' }}><strong>50+</strong><span>Weekly Classes</span></div>
        <div data-reveal="rise" style={{ '--reveal-delay': '180ms' }}><strong>Open 5AM–11PM</strong><span>Monday–Friday</span></div>
      </div>
      <p>Illustrative statistics for a fictional gym.</p>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="social-proof" id="social-proof" aria-labelledby="social-title">
      <div className="container social-inner">
        <div className="social-copy" data-reveal="left">
          <div className="rating"><span className="stars" aria-label="Five stars">★★★★★</span><strong>4.9 / 5</strong><span>average rating</span></div>
          <h2 id="social-title">Trusted by Austin athletes, professionals, and everyday lifters</h2>
          <p>Based on 327 fictional member reviews. All figures on this concept site are illustrative.</p>
        </div>
        <div className="partner-block" data-reveal="right">
          <span className="partner-label">SAMPLE COMMUNITY PARTNERS</span>
          <div className="partner-logos" aria-label="Fictional partner brands">
            <span>PEAK <b>NUTRITION</b></span><span>ATLAS <b>RECOVERY</b></span><span>FORM <b>ATHLETICS</b></span><span>CORE <b>PERFORMANCE</b></span><span>AUSTIN <b>WELLNESS CO.</b></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section section-light" id="why-us">
      <div className="container">
        <SectionHeading eyebrow="THE DIFFERENCE" title="Everything You Need to Train Better" copy="The right tools, the right guidance, and space to make every session count." />
        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title} data-reveal="rise" style={{ '--reveal-delay': `${(index % 3) * 85}ms` }}>
              <span className="feature-number">{feature.number} / 06</span>
              <span className="feature-glyph" aria-hidden="true">↗</span>
              <h3>{feature.title}</h3><p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Memberships({ onChoose }) {
  return (
    <section className="section memberships-section" id="memberships">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading eyebrow="MEMBERSHIP OPTIONS" title="Choose Your Way Forward" copy="Transparent plans built for how you train. Start with the essentials or add more support as you grow." light />
          <span className="section-aside">NO GUESSWORK.<br />JUST PROGRESS.</span>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article className={`pricing-card${plan.popular ? ' pricing-card-featured' : ''}`} key={plan.name} data-reveal="scale" style={{ '--reveal-delay': `${index * 100}ms` }}>
              {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
              <div className="pricing-top"><span className="plan-index">0{plans.indexOf(plan) + 1} / MEMBERSHIP</span><h3>{plan.name}</h3><p>{plan.description}</p></div>
              <div className="price"><span>$</span>{plan.price}<small>/month</small></div>
              <ul className="plan-features">{plan.includes.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
              <button className={`button ${plan.popular ? 'button-accent' : 'button-dark'}`} type="button" onClick={() => onChoose(plan.name)}>Choose {plan.name} <span aria-hidden="true">↗</span></button>
            </article>
          ))}
        </div>
        <p className="pricing-footnote">$49 one-time enrollment fee. Cancel according to membership agreement terms. Prices and terms are fictional demo content; no purchases are processed.</p>
      </div>
    </section>
  )
}

function Training() {
  return (
    <section className="training-section" id="training">
      <div className="training-image-wrap" data-reveal="image"><img src={turfImage} alt="Concept image of a training turf, sled, dumbbells, and recovery space" loading="lazy" /><span>BUILT FOR EVERY LEVEL</span></div>
      <div className="training-copy" data-reveal="right">
        <Eyebrow>PERSONAL TRAINING</Eyebrow>
        <h2>Coaching Built Around <em>You.</em></h2>
        <p>Real progress starts with a plan that fits your life. Our fictional certified coaches help beginners find confidence and experienced athletes reach their next milestone.</p>
        <ul className="specialty-list"><li>Strength</li><li>Fat loss</li><li>Muscle building</li><li>Athletic performance</li><li>Mobility</li><li>Beginner training</li><li>General health</li></ul>
        <a className="text-link" href="#trainers">Meet Our Trainers <span aria-hidden="true">↗</span></a>
        <div className="training-stat"><strong>92%</strong><p>of personal training clients report measurable progress within their first 12 weeks.<small>Fictional sample statistic for this portfolio website.</small></p></div>
      </div>
    </section>
  )
}

function Classes() {
  const [expanded, setExpanded] = useState(false)
  const days = expanded ? [...schedule, ...extraSchedule] : schedule
  return (
    <section className="section section-light classes-section" id="classes">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading eyebrow="MOVE WITH PURPOSE" title="Find Your Kind of Strong" copy="From first reps to advanced conditioning, there's a class to meet you where you are." />
          <div className="class-count" data-reveal="scale"><strong>50+</strong><span>classes every week<br />(fictional schedule)</span></div>
        </div>
        <div className="classes-grid">
          {classes.map((item, index) => (
            <article className="class-card" key={item.name} data-reveal="rise" style={{ '--reveal-delay': `${index * 70}ms` }}>
              <span className="class-category">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p>
              <div className="class-meta"><span>{item.duration}</span><span>{item.level}</span></div>
            </article>
          ))}
        </div>
        <div className="schedule-block" id="schedule" data-reveal="rise">
          <div className="schedule-heading"><div><Eyebrow>PLAN YOUR WEEK</Eyebrow><h3>Class schedule</h3><p>A sample week at Iron Peak. Times are illustrative.</p></div><span>WEEKLY PREVIEW / 2026</span></div>
          <div className="schedule-grid">{days.map((day, index) => <div className="schedule-day" key={day.day} data-reveal="rise" style={{ '--reveal-delay': `${(index % 3) * 80}ms` }}><h4>{day.day}</h4><ul>{day.sessions.map(([time, name]) => <li key={`${time}-${name}`}><time>{time}</time><span>{name}</span></li>)}</ul></div>)}</div>
          <button className="button button-outline-dark schedule-button" type="button" aria-expanded={expanded} onClick={() => setExpanded((current) => !current)}>{expanded ? 'Show Less' : 'View Full Schedule'} <span aria-hidden="true">{expanded ? '↑' : '↗'}</span></button>
        </div>
      </div>
    </section>
  )
}

function Trainers() {
  return (
    <section className="section trainers-section" id="trainers">
      <div className="container">
        <SectionHeading eyebrow="THE PEOPLE BEHIND YOUR PROGRESS" title="Coaches Who Show Up for You" copy="Experience meets approachability. Meet the entirely fictional team behind our concept gym." light />
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <article className="trainer-card" key={trainer.name} data-reveal="rise" style={{ '--reveal-delay': `${index * 80}ms` }}>
              <div className={`trainer-portrait portrait-${trainer.portrait}`} role="img" aria-label={`AI-generated portrait of fictional trainer ${trainer.name}`} />
              <div className="trainer-info"><span className="trainer-role">{trainer.role} · {trainer.experience}</span><h3>{trainer.name}</h3><p>{trainer.bio}</p><div className="trainer-details"><strong>Specialties</strong><span>{trainer.specialties.join(' · ')}</span><strong>Certifications</strong><span>{trainer.certifications.join(' · ')}</span></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Facilities() {
  return (
    <section className="section section-light facilities-section" id="facilities">
      <div className="container">
        <SectionHeading eyebrow="THE SPACE" title="A Gym Designed for Serious Training" copy="Space to lift, move, recover, and keep coming back." />
        <div className="facility-layout">
          <div className="facility-photo" data-reveal="image"><img src={turfImage} alt="Concept view of the functional training turf and free weight area" loading="lazy" /><span>01 / FUNCTIONAL TRAINING TURF</span></div>
          <div className="facility-photo facility-photo-small" data-reveal="image" style={{ '--reveal-delay': '110ms' }}><img src={heroImage} alt="Concept view of the strength floor with squat racks" loading="lazy" /><span>02 / STRENGTH FLOOR</span></div>
          <div className="facility-list" data-reveal="rise"><h3>Room for every kind of work.</h3><p>Explore every zone, from focused lifting to an easier finish after your session.</p><div className="facility-zones">{['Strength floor', 'Functional training turf', 'Cardio zone', 'Group training studio', 'Locker rooms', 'Recovery area'].map((zone, index) => <span key={zone}><b>{String(index + 1).padStart(2, '0')}</b>{zone}</span>)}</div><div className="facility-tags">{equipment.map((item) => <span key={item}>{item}</span>)}</div><small>Facility images and specifications are fictional concept content.</small></div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about"><div className="container about-grid"><div data-reveal="left"><Eyebrow light>OUR STORY</Eyebrow><h2>Built to Make Training <em>Simpler.</em></h2></div><div className="about-copy" data-reveal="right"><p>Iron Peak Fitness was founded in 2019 with one goal: create a gym where people can train seriously without sacrificing comfort, cleanliness, or community.</p><p>We combine high-quality equipment, experienced coaching, and a welcoming atmosphere so members at every level can make consistent progress.</p><div className="values-list">{['Quality', 'Consistency', 'Community', 'Coaching', 'Cleanliness'].map((value, index) => <span key={value}><b>0{index + 1}</b>{value}</span>)}</div><small>Company history is fictional portfolio content.</small></div></div></section>
  )
}

function Testimonials() {
  return (
    <section className="section section-light testimonials-section" id="testimonials"><div className="container"><SectionHeading eyebrow="MEMBER VOICES" title="The Best Part Is Who You're Becoming" copy="Sample member testimonials for demonstration purposes. These are not real reviews." /><div className="testimonials-grid">{testimonials.map((item, index) => <blockquote className="testimonial-card" key={item.name} data-reveal="rise" style={{ '--reveal-delay': `${index * 80}ms` }}><span className="quote-mark" aria-hidden="true">“</span><p>{item.quote}</p><footer><span className="testimonial-avatar" aria-hidden="true">{item.name.split(' ').map((word) => word[0]).join('')}</span><span><strong>{item.name}</strong><small>Fictional member</small></span></footer></blockquote>)}</div></div></section>
  )
}

function Tour({ selectedPlan }) {
  return (
    <section className="section tour-section" id="tour"><div className="container tour-grid"><div className="tour-copy" data-reveal="left"><Eyebrow light>YOUR FIRST STEP</Eyebrow><h2>See the Gym Before You Join.</h2><p>Book a free facility tour and speak with a member of our coaching team. This portfolio form demonstrates the experience only.</p><div className="tour-promise"><span aria-hidden="true">↗</span><span>No pressure. Just a look around and a conversation about your goals.</span></div></div><div className="tour-card" data-reveal="right"><h3>Request a free tour</h3><p>Tell us a little about yourself to preview the booking flow.</p><TourForm selectedPlan={selectedPlan} /></div></div></section>
  )
}

function FAQ() {
  return (
    <section className="section section-light faq-section" id="faq"><div className="container faq-grid"><div><SectionHeading eyebrow="GOOD TO KNOW" title="Questions, Answered." copy="A few things to know before you take the first step." /><a className="text-link" href="/contact">Still have a question? Contact us <span aria-hidden="true">↗</span></a></div><div className="faq-list" data-reveal="right">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}<span aria-hidden="true">+</span></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div></div></section>
  )
}

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState('')

  useEffect(() => {
    const target = window.location.hash.slice(1)
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView())

  }, [])

  const choosePlan = (name) => {
    setSelectedPlan(name)
    const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('tour')?.scrollIntoView({ behavior: motionAllowed ? 'smooth' : 'auto' })
  }

  return <main><Hero /><HeroStats /><SocialProof /><Features /><Memberships onChoose={choosePlan} /><Training /><Classes /><Trainers /><Facilities /><About /><Testimonials /><Tour selectedPlan={selectedPlan} /><FAQ /></main>
}
