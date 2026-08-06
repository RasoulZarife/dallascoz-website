import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="container" style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      <Link to="/" className="btn-secondary" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>

      <div className="about-card" style={{ textAlign: 'left', padding: '2rem' }}>
        <h1 className="title" style={{ marginBottom: '1rem', textAlign: 'center' }}>About Dallascoz LLC</h1>
        
        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Dallascoz LLC was founded in December of 2025 in Fort Worth, Texas. What started as a small, focused maintenance service provider quickly expanded, and in less than six months became one of the leading Maintenance Groups in Texas.
        </p>

        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          We specialize in comprehensive property maintenance, repairs, and remodeling services. Our team is committed to offering prompt, high-quality, and reliable solutions for residential and commercial properties alike.
        </p>

        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
          Whether it is plumbing, electrical, HVAC, handyman work, or full-scale painting and remodeling, Dallascoz ensures top-tier workmanship and dependable support for every job.
        </p>
      </div>
    </div>
  )
}

export default About