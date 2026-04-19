import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the full landing page', () => {
    render(<App />)
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders the HealAI brand name', () => {
    render(<App />)
    const brand = screen.getAllByText('HealAI')
    expect(brand.length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation items', () => {
    render(<App />)
    expect(screen.getByText('Human Health')).toBeInTheDocument()
    expect(screen.getByText('Animal & Livestock')).toBeInTheDocument()
    const ayurvedaItems = screen.getAllByText('Ayurveda')
    expect(ayurvedaItems.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the emergency button', () => {
    render(<App />)
    expect(screen.getByText('Emergency 108')).toBeInTheDocument()
  })
})

describe('HeroSection', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByText(/Navigate healthcare/)).toBeInTheDocument()
    expect(screen.getByText(/with confidence\./)).toBeInTheDocument()
  })

  it('renders the hero badge', () => {
    render(<App />)
    expect(screen.getByText(/AI-Powered · Multilingual · Humans \+ Animals/)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<App />)
    expect(screen.getByText(/Your AI-powered health navigator/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<App />)
    expect(screen.getByText('Start AI Chat')).toBeInTheDocument()
    expect(screen.getByText('Estimate Cost')).toBeInTheDocument()
    expect(screen.getByText('Emergency')).toBeInTheDocument()
  })

  it('renders the health score', () => {
    render(<App />)
    expect(screen.getByText('74')).toBeInTheDocument()
    expect(screen.getByText(/Stable · 11-day streak/)).toBeInTheDocument()
  })
})

describe('QuickActions', () => {
  it('renders the section heading', () => {
    render(<App />)
    expect(screen.getByText('Quick actions')).toBeInTheDocument()
    expect(screen.getByText('Tap any card')).toBeInTheDocument()
  })

  it('renders all 8 quick action cards', () => {
    render(<App />)
    const actions = [
      'AI Chat', 'Cost Estimator', 'Hospitals', 'Govt Schemes',
      'Image Check', 'Health Records', 'Farmer Mode'
    ]
    actions.forEach(action => {
      expect(screen.getByText(action)).toBeInTheDocument()
    })
    const ayurvedaItems = screen.getAllByText('Ayurveda')
    expect(ayurvedaItems.length).toBe(2)
  })

  it('renders descriptions for quick action cards', () => {
    render(<App />)
    expect(screen.getByText('Describe symptoms · Multilingual')).toBeInTheDocument()
    expect(screen.getByText('Min / Avg / Max by city')).toBeInTheDocument()
    expect(screen.getByText('Ayushman Bharat eligibility')).toBeInTheDocument()
    expect(screen.getByText('Livestock health & schemes')).toBeInTheDocument()
  })
})

describe('WellnessTips', () => {
  it('renders wellness tips', () => {
    render(<App />)
    expect(screen.getByText("Preventive care tips")).toBeInTheDocument()
    expect(screen.getByText(/Add turmeric to your dinner/)).toBeInTheDocument()
    expect(screen.getByText(/Sleep by 11 PM/)).toBeInTheDocument()
  })

  it('renders seasonal alert section', () => {
    render(<App />)
    expect(screen.getByText('Monsoon Watch')).toBeInTheDocument()
    expect(screen.getByText(/Boil drinking water/)).toBeInTheDocument()
    expect(screen.getByText('Mosquito nets at dusk')).toBeInTheDocument()
  })
})

describe('HumanMode', () => {
  it('renders human mode section', () => {
    render(<App />)
    expect(screen.getByText('Human Mode')).toBeInTheDocument()
    expect(screen.getByText(/balanced with tradition/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<App />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/Universal Health Navigator for Humans/)).toBeInTheDocument()
    expect(screen.getByText(/not a substitute for professional medical advice/)).toBeInTheDocument()
  })
})
