import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import TryItNowShowcase from './components/TryItNowShowcase'
import './styles/snapScroll.css'

// Import feature components
import NaturalLanguageFeature from './components/features/NaturalLanguageFeature'
import AICoachingFeature from './components/features/AICoachingFeature'
import StrengthAnalyticsFeature from './components/features/StrengthAnalyticsFeature'
import NutritionFeature from './components/features/NutritionFeature'

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Desktop version with snap scrolling */}
      <div className="hidden md:block">
        <div className="snap-container">
          {/* Hero Section */}
          <section id="hero" className="snap-section">
            <Hero />
          </section>

          {/* Feature Sections - Each feature gets its own snap section */}
          <section id="feature-1" className="snap-section">
            <NaturalLanguageFeature />
          </section>

          <section id="feature-2" className="snap-section">
            <AICoachingFeature />
          </section>

          <section id="feature-3" className="snap-section">
            <StrengthAnalyticsFeature />
          </section>

          <section id="feature-4" className="snap-section">
            <NutritionFeature />
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="snap-section">
            <HowItWorks />
          </section>

          {/* Download Section with Footer */}
          <section id="download" className="snap-section">
            <DownloadSection />
            <Footer />
          </section>
        </div>
      </div>

      {/* Mobile version with snap scrolling */}
      <div className="md:hidden snap-container">
        {/* Hero Section */}
        <section id="hero-mobile" className="snap-section pt-12 pb-20 flex items-center bg-dark">
          <Hero />
        </section>

        {/* Feature Sections - Each feature gets its own snap section */}
        <section id="feature-mobile-1" className="snap-section pt-12 pb-12 bg-dark">
          <NaturalLanguageFeature />
        </section>

        <section id="feature-mobile-2" className="snap-section pt-12 pb-12 bg-dark">
          <AICoachingFeature />
        </section>

        <section id="feature-mobile-3" className="snap-section pt-12 pb-12 bg-dark">
          <StrengthAnalyticsFeature />
        </section>

        <section id="feature-mobile-4" className="snap-section pt-12 pb-12 bg-dark">
          <NutritionFeature />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works-mobile" className="snap-section pt-12 pb-16 bg-dark">
          <HowItWorks />
        </section>

        {/* Download Section with Footer */}
        <section id="download-mobile" className="snap-section pt-12 pb-0 bg-dark">
          <DownloadSection />
          <Footer />
        </section>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/try-it-now" element={<TryItNowShowcase />} />
      </Routes>
    </Router>
  )
}

export default App
