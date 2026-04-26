import { useState } from 'react'
import { analytics, useSectionVisibility } from '../analytics'
import Logo from './Logo'

/**
 * Sección de demo del MVP. Carga el MVP en un iframe embebido.
 * URL configurable via VITE_MVP_URL (default: pmc-dusky.vercel.app).
 */
export default function MVPDemo() {
  const ref = useSectionVisibility('mvp')
  const [launched, setLaunched] = useState(false)
  const MVP_URL = import.meta.env.VITE_MVP_URL || 'https://pmc-dusky.vercel.app/'

  const handleLaunch = () => {
    analytics.track('mvp_launched', { via: 'inline' })
    setLaunched(true)
  }
  const handleExternal = () => {
    analytics.track('mvp_launched', { via: 'external' })
  }

  return (
    <section id="mvp" className="fk-section fk-mvp" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker">Pruébalo ya</span>
          <h2 className="fk-section__title">
            No es solo una idea.<br />
            <em>Tócala</em>.
          </h2>
          <p className="fk-section__sub">
            La versión web del MVP de FreshKeeper, totalmente funcional. Sin descargas, sin registros: lánzalo aquí mismo y juega con el inventario de un hogar real.
          </p>
        </div>
        <div className="fk-mvp__layout">
          <div className="fk-mvp__copy">
            <h3>Lo que puedes probar:</h3>
            <ul className="fk-mvp__checklist">
              <li>Agregar productos manualmente, por escaneo o con IA de factura</li>
              <li>Ver alertas y estados (fresco, por vencer, caducado)</li>
              <li>Invitar miembros al Círculo del Hogar</li>
              <li>Lista de compras compartida en tiempo real</li>
              <li>Recetas sugeridas según el inventario</li>
              <li>Modo claro/oscuro y bilingüe (ES/EN)</li>
            </ul>
            <a
              href={MVP_URL}
              target="_blank"
              rel="noreferrer"
              className="fk-btn fk-btn--ghost"
              onClick={handleExternal}
            >
              Abrir en pantalla completa ↗
            </a>
          </div>
          <div className="fk-mvp__frame">
            <div className="fk-mvp__screen">
              {!launched ? (
                <div className="fk-mvp__cover">
                  <Logo size={64} />
                  <h3>FreshKeeper Demo</h3>
                  <p>Pulsa para lanzar el MVP interactivo aquí mismo.</p>
                  <button
                    className="fk-btn fk-btn--terracotta"
                    onClick={handleLaunch}
                  >
                    Lanzar demo →
                  </button>
                  <small>Sin registro. Funciona en tu navegador.</small>
                </div>
              ) : (
                <iframe
                  src={MVP_URL}
                  title="FreshKeeper MVP"
                  className="fk-mvp__iframe"
                  onLoad={() => analytics.track('mvp_loaded')}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
