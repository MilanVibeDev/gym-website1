export default function LegalPage({ page, isPrivacy }) {
  return (
    <main className="subpage legal-page">
      <section className="subpage-hero"><div className="container" data-reveal="rise"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />IRON PEAK / INFORMATION</span><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <div className="container legal-layout">
        <aside className="legal-aside" data-reveal="left"><span>DEMO DOCUMENT</span><p>Effective date<br /><strong>September 1, 2026</strong></p><a href="/">← Back to homepage</a></aside>
        <div className="legal-content">
          <div className="demo-legal-notice" data-reveal="rise"><strong>Demo Legal Notice:</strong> {isPrivacy ? 'This privacy policy is sample content for a fictional portfolio website and is not intended to serve as actual legal advice or a production-ready privacy policy.' : 'This page is demo legal copy for a fictional portfolio website. It is not legally reviewed, binding, or ready for production use.'}</div>
          {page.sections.map(([title, body], index) => <section key={title} id={`section-${index + 1}`} data-reveal="rise"><span className="legal-number">{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{body}</p></section>)}
        </div>
      </div>
    </main>
  )
}
