import { useEffect } from 'react'
import './App.css'
import { analytics, useScrollTracking } from './analytics'

import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import MVPDemo from './components/MVPDemo'
import Traction from './components/Traction'
import Plans from './components/Plans'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

/**
 * FreshKeeper Landing Page
 * Shell que compone todas las secciones.
 * Cada seccion vive en src/components/*.jsx
 */
export default function App() {
  useScrollTracking()

  useEffect(() => {
    analytics.trackPageView()
    const t0 = Date.now()
    const onUnload = () => {
      analytics.track('session_duration', {
        seconds: Math.round((Date.now() - t0) / 1000),
      })
    }
    window.addEventListener('beforeunload', onUnload)
    return () => window.removeEventListener('beforeunload', onUnload)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <MVPDemo />
        <Traction />
        <Plans />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
