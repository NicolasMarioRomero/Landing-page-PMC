/**
 * FreshKeeper Analytics
 * =====================
 * Sistema de tracking dual:
 *   1. Google Analytics 4 (gtag) — si VITE_GA_MEASUREMENT_ID está definido en .env
 *   2. Event bus local — siempre activo, útil para debugging y dashboards propios
 *
 * Para activar GA4:
 *   - Crea una propiedad en https://analytics.google.com
 *   - Obtén tu Measurement ID (G-XXXXXXXXXX)
 *   - Crea un archivo .env en la raíz con:  VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * Los eventos trackeados cubren la rúbrica del curso:
 *   - Conversion rate (cta_click → mvp_launched)
 *   - Bounce rate (session_duration < 10s sin interacciones)
 *   - Session duration (session_duration)
 *   - Scroll depth (scroll_depth 25/50/75/100)
 *   - Engagement con features y secciones
 */

import { useEffect, useRef } from 'react'

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// Load gtag script once
let gaLoaded = false
function loadGA() {
  if (gaLoaded || !GA_ID || typeof window === 'undefined') return
  gaLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: false, // we send manually
  })
}

// In-memory event log (for dev panel & future custom dashboards)
const eventLog = []
const listeners = new Set()

function emit(event) {
  eventLog.push(event)
  listeners.forEach((fn) => fn(event))
  if (import.meta.env.DEV) {
    // Pretty console log during development
    // eslint-disable-next-line no-console
    console.log('%c[FK analytics]', 'color:#22c55e;font-weight:bold', event.name, event.params || {})
  }
}

export const analytics = {
  /**
   * Track a named event.
   * @param {string} name  Event name (snake_case)
   * @param {object} params Additional parameters
   */
  track(name, params = {}) {
    const event = {
      name,
      params,
      ts: Date.now(),
      path: typeof window !== 'undefined' ? window.location.pathname + window.location.hash : '',
    }
    emit(event)
    if (GA_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, params)
    }
  },

  trackPageView() {
    loadGA()
    this.track('page_view', {
      page_title: document.title,
      page_location: window.location.href,
    })
    if (GA_ID && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  },

  /** Get all events (for debug panel) */
  getEvents() {
    return [...eventLog]
  },

  /** Subscribe to events (for live dashboards) */
  subscribe(fn) {
    listeners.add(fn)
    return () => listeners.delete(fn)
  },
}

// Make available in dev console
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  window.__fkAnalytics = analytics
}

// ============== React hooks ==============

/**
 * Hook: track scroll depth milestones (25%, 50%, 75%, 100%).
 * Fires each milestone only once per page load.
 */
export function useScrollTracking() {
  const fired = useRef(new Set())
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop + window.innerHeight
      const total = h.scrollHeight
      const pct = Math.round((scrolled / total) * 100)
      ;[25, 50, 75, 100].forEach((m) => {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m)
          analytics.track('scroll_depth', { percent: m })
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

/**
 * Hook: track when a section enters the viewport.
 * Returns a ref to attach to the section.
 */
export function useSectionVisibility(sectionName) {
  const ref = useRef(null)
  const fired = useRef(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true
            analytics.track('section_view', { section: sectionName })
          }
        })
      },
      { threshold: 0.3 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [sectionName])
  return ref
}
