import { Link } from 'react-router-dom'

function PhoneContact() {
  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      <Link to="/" className="btn-secondary" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>

      <div className="about-card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
        <h1 className="title" style={{ marginBottom: '1rem' }}>Call Us</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          We are here to answer your calls 24/7.
        </p>

        <a
          href="tel:+18123456789"
          className="cta-btn"
          style={{ display: 'inline-block', fontSize: '1.2rem', padding: '1rem 2rem' }}
        >
          Call (812) 345-6789
        </a>
      </div>
    </div>
  )
}

export default PhoneContact