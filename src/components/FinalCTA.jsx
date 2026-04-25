import { analytics } from '../analytics'

export default function FinalCTA() {
  return (
    <section className="fk-finalcta">
      <div className="fk-container">
        <h2>Deja de botar plata en la nevera.</h2>
        <p>Prueba FreshKeeper en 30 segundos. Sin descargar nada, sin registrarte.</p>
        <a
          href="#mvp"
          className="fk-btn fk-btn--primary fk-btn--lg"
          onClick={() => analytics.track('cta_click', { location: 'final', type: 'primary' })}
        >
          Probar el MVP ahora →
        </a>
      </div>
    </section>
  )
}
