import { useEffect } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import ContactPage from './pages/ContactPage'
import { legalPages } from './data/legalPages'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

const homeDescription = 'Train at Iron Peak Fitness, a modern Austin gym offering premium strength equipment, personal training, group fitness classes, and flexible memberships.'

export default function App() {
  useScrollReveal()
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const legal = legalPages[path]
  const title = path === '/' ? 'Iron Peak Fitness | Premium Gym in Austin, TX' : path === '/contact' ? 'Contact | Iron Peak Fitness' : legal ? `${legal.title} | Iron Peak Fitness` : 'Page Not Found | Iron Peak Fitness'
  const description = path === '/' ? homeDescription : legal?.description || (path === '/contact' ? 'Explore contact options for the fictional Iron Peak Fitness gym in Austin, Texas.' : 'The requested Iron Peak Fitness page could not be found.')

  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [title, description])

  let page
  if (path === '/') page = <HomePage />
  else if (path === '/contact') page = <ContactPage />
  else if (legal) page = <LegalPage page={legal} isPrivacy={path === '/privacy-policy'} />
  else page = <main className="not-found"><div className="container"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />404 / WRONG TURN</span><h1>This page isn't on the map.</h1><p>The page you're looking for isn't here. Head back to the homepage to keep exploring.</p><a className="button button-accent" href="/">Back to Home <span aria-hidden="true">↗</span></a></div></main>

  return <><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader /><div id="main-content" tabIndex="-1">{page}</div><SiteFooter /></>
}
