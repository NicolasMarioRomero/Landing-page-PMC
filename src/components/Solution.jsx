import { analytics, useSectionVisibility } from '../analytics'

const FEATURES = [
  {
    icon: '📦',
    title: 'Inventario compartido en tiempo real',
    desc: 'Todos en el hogar ven qué hay, cuánto queda y cuándo vence — desde sus propios teléfonos.',
  },
  {
    icon: '🔔',
    title: 'Alertas antes de que sea tarde',
    desc: 'Recibe notificaciones 3–5 días antes del vencimiento. Nunca más descubres algo dañado al abrirlo.',
  },
  {
    icon: '🛒',
    title: 'Lista de mercado inteligente',
    desc: 'FreshKeeper genera automáticamente qué comprar basado en lo que ya tienes y lo que consume tu hogar.',
  },
  {
    icon: '📊',
    title: 'Reportes de ahorro mensual',
    desc: 'Ve exactamente cuánto dinero recuperaste este mes. El ahorro promedio es de $180K–$320K mensuales.',
  },
]

/**
 * Sección "Show Potential Success" (rúbrica StoryBrand).
 * 4 features + tarjeta de ahorro con comparación antes/después.
 */
export default function Solution() {
  const ref = useSectionVisibility('solucion')
  return (
    <section id="solucion" className="fk-section fk-solution" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker">La solución</span>
          <h2 className="fk-section__title">
            Con FreshKeeper,<br />
            tu hogar <em>ahorra</em>.
          </h2>
        </div>
        <div className="fk-solution__layout">
          <div className="fk-solution__features">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="fk-feature"
                onClick={() => analytics.track('feature_click', { feature: f.title })}
              >
                <h3 className="fk-feature__title">
                  <span aria-hidden="true">{f.icon}</span> {f.title}
                </h3>
                <p className="fk-feature__desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="fk-savings-card">
            <div className="fk-savings-card__label">Ahorro promedio</div>
            <div className="fk-savings-card__num">$247K</div>
            <p className="fk-savings-card__caption">
              ahorro promedio mensual por hogar después de 30 días con FreshKeeper.
            </p>
            <div className="fk-savings-card__compare">
              <div className="fk-savings-compare__col fk-savings-compare__before">
                <span>Antes</span>
                <strong>$320K</strong>
              </div>
              <span className="fk-savings-arrow">→</span>
              <div className="fk-savings-compare__col fk-savings-compare__after">
                <span>Con FK</span>
                <strong>$73K</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
