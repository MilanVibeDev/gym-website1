export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a className="brand" href="/" aria-label="Iron Peak Fitness home">
            <span className="brand-mark" aria-hidden="true"><span>IP</span></span>
            <span className="brand-text">IRON PEAK <small>FITNESS</small></span>
          </a>
          <p>Train Strong. Live Stronger.</p>
          <address>Iron Peak Fitness LLC<br />4827 West Harbor Avenue<br />Austin, TX 78745<br />United States</address>
          <p className="footer-contact">(512) 555-0148<br />hello@ironpeakfitness.com</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="/#memberships">Memberships</a>
          <a href="/#classes">Classes</a>
          <a href="/#trainers">Trainers</a>
          <a href="/#training">Personal Training</a>
          <a href="/#about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-column">
          <h2>Information</h2>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/membership-terms">Membership Terms</a>
          <a href="/accessibility">Accessibility</a>
          <span className="footer-mini-heading">Sample social links</span>
          <div className="social-links" aria-label="Sample social media links">
            {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((name) => (
              <a key={name} href="#portfolio-disclaimer" title={`${name} is a demo placeholder`} aria-label={`${name} — demo placeholder`}>{name.slice(0, 2)}</a>
            ))}
          </div>
        </div>
        <div className="footer-hours">
          <h2>Opening hours</h2>
          <dl>
            <div><dt>Monday–Friday</dt><dd>5:00 AM – 11:00 PM</dd></div>
            <div><dt>Saturday</dt><dd>6:00 AM – 10:00 PM</dd></div>
            <div><dt>Sunday</dt><dd>7:00 AM – 8:00 PM</dd></div>
          </dl>
          <h3>Staffed hours</h3>
          <dl>
            <div><dt>Monday–Friday</dt><dd>7:00 AM – 9:00 PM</dd></div>
            <div><dt>Saturday–Sunday</dt><dd>8:00 AM – 6:00 PM</dd></div>
          </dl>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Iron Peak Fitness LLC. All rights reserved.</p>
        <p>Texas LLC · Sample registration TX-LLC-7842196 · Sample EIN 84-7315920 · Founded 2019</p>
      </div>
      <div className="container footer-disclaimer" id="portfolio-disclaimer">
        <strong>Portfolio Disclaimer:</strong> This website is a fictional concept created for portfolio and demonstration purposes. Iron Peak Fitness LLC is not a real business. Names, addresses, staff members, testimonials, registration numbers, certifications, statistics, and contact information displayed on this website are fictional.
        <span>This website is a fictional portfolio project. Iron Peak Fitness LLC, its staff, contact details, testimonials, and business information are entirely fictional.</span>
      </div>
    </footer>
  )
}
