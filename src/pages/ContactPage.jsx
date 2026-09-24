import { ContactForm } from '../components/DemoForms'

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <section className="subpage-hero"><div className="container" data-reveal="rise"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />GET IN TOUCH</span><h1>Let's Talk About<br /><em>Your Next Step.</em></h1><p>Have a question about memberships, coaching, or classes? Explore the contact experience below. This fictional gym cannot receive messages.</p></div></section>
      <section className="section section-light"><div className="container contact-grid"><div className="contact-details" data-reveal="left"><h2>Contact details</h2><p>All contact details are fictional and provided for this portfolio project only.</p><dl><div><dt>General inquiries</dt><dd>hello@ironpeakfitness.com</dd></div><div><dt>Membership</dt><dd>memberships@ironpeakfitness.com</dd></div><div><dt>Personal training</dt><dd>coaching@ironpeakfitness.com</dd></div><div><dt>Phone</dt><dd>(512) 555-0148</dd></div><div><dt>Address</dt><dd>4827 West Harbor Avenue<br />Austin, TX 78745</dd></div></dl><a className="text-link" href="/#tour">Explore free tour form <span aria-hidden="true">↗</span></a></div><div className="contact-form-card" data-reveal="right"><h2>Send a message</h2><p>Preview how an inquiry would work. No message is delivered.</p><ContactForm /></div></div></section>
    </main>
  )
}
