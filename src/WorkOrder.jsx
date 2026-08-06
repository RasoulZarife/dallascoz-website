import { useState } from 'react'
import { Link } from 'react-router-dom'

function WorkOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Work order submitted successfully!')
    // Add custom backend submission logic here
  }

  return (
    <div className="work-order-container" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'underline', marginBottom: '1rem', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>
      <h1>Submit a Work Order</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem' }}>Work Requested</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '0.75rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit Work Order
        </button>
      </form>
    </div>
  )
  
}

export default WorkOrder