import { Link } from 'react-router-dom'

function MailContact() {
  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      <Link to="/" className="btn-secondary" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>

      <div className="about-card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
        <h1 className="title" style={{ marginBottom: '1rem' }}>Email Us</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Send us an email for any job quotes and we will get back to you within the same day.
        </p>

        <a
          href="mailto:info@dallascoz.com"
          className="cta-btn"
          style={{ display: 'inline-block', fontSize: '1.1rem', padding: '0.9rem 1.8rem' }}
        >
          Send Email (info@dallascoz.com)
        </a>
      </div>
    </div>
  )
}

export default MailContact