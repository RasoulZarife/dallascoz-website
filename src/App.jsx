import { Routes, Route, Link } from 'react-router-dom'
import DallascozLogo from './assets/DallascozLogo.jpg'
import WorkOrder from './WorkOrder'
import About from './About'
import PhoneContact from './PhoneContact'
import MailContact from './MailContact'
import './App.css'

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={DallascozLogo} className="logo" alt="Dallascoz Logo" />
        <h1 className="title">Dallascoz LLC</h1>
        <p className="subtitle">Maintenance & Remodeling</p>
        <Link to="/work-order" className="cta-btn">
          Submit Work Order
        </Link>
      </section>

      {/* About Section */}
      <div className="about-card">
        <h2>About Us</h2>
        <p style={{ marginBottom: '1.2rem' }}>
          How it Started
        </p>
        <Link to="/about" className="btn-secondary">
          Read More About Us
        </Link>
      </div>

      {/* Info Grid */}
      <section className="grid">
        <div className="card">
          <h3>Our Location</h3>
          <p>7448 Arbor Park Dr, Fort Worth, TX 76120</p>
          <a
            href="https://www.google.com/maps?q=7448+Arbor+Park+Dr,+Fort+Worth,+TX+76120"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Visit Us
          </a>
        </div>

        <div className="card">
          <h3>Contact Us</h3>
          <p>Get in touch with our team</p>
          <div className="button-group">
            <Link to="/phone" className="btn-secondary">
              Phone
            </Link>
            <Link to="/mail" className="btn-secondary">
              Mail
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work-order" element={<WorkOrder />} />
      <Route path="/about" element={<About />} />
      <Route path="/phone" element={<PhoneContact />} />
      <Route path="/mail" element={<MailContact />} />
    </Routes>
  )
}

export default App