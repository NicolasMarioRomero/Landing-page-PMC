import { analytics, useSectionVisibility } from '../analytics'

const PLANS = [
  {
    name: 'Básico',
    priceNum: 'Gratis',
    cycle: 'Para siempre',
    hint: '',
    cta: 'Empezar gratis',
    ctaStyle: 'fk-btn fk-btn--ghost',
    features: [
      '1 hogar, hasta 2 personas',
      'Inventario de hasta 30 productos',
      'Alertas de vencimiento básicas',
      'Lista de mercado manual',
    ],
  },
  {
    name: 'Hogar',
    priceNum: '$9.900',
    cycle: '/ mes por hogar',
    hint: 'El plan más usado',
    cta: 'Probar 30 días gratis',
    ctaStyle: 'fk-btn fk-btn--terracotta',
    featured: true,
    features: [
      'Hasta 6 miembros del hogar',
      'Inventario ilimitado',
      'Alertas inteligentes y anticipadas',
      'Lista de mercado automática',
      'Reportes de ahorro mensual',
    ],
  },
  {
    name: 'Premium',
    priceNum: '$18.900',
    cycle: '/ mes',
    hint: '',
    cta: 'Probar 30 días gratis',
    ctaStyle: 'fk-btn fk-btn--ghost',
    features: [
      'Hogares ilimitados',
      'Escaneo por código de barras',
      'Recetas sugeridas',
      'Analytics avanzados',
      'Soporte prioritario',
    ],
  },
]

/**
 * Sección de pricing. 3 tiers con el "Hogar" destacado.
 */
export default function Plans() {
  const ref = useSectionVisibility('planes')
  return (
    <section id="planes" className="fk-section fk-plans" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker">Planes</span>
          <h2 className="fk-section__title">
            Empieza gratis.<br />
            <em>Ahorra desde hoy</em>.
          </h2>
          <p className="fk-section__sub">
            Si ahorras en promedio $247.000 al mes, el plan más completo se paga solo en el primer día.
          </p>
        </div>
        <div className="fk-plans__grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`fk-plan ${plan.featured ? 'fk-plan--featured' : ''}`}
            >
              {plan.featured && <span className="fk-plan__badge">Más popular</span>}
              <div className="fk-plan__name">{plan.name}</div>
              <div className="fk-plan__price">
                <span className="fk-plan__price-num">{plan.priceNum}</span>
                <span className="fk-plan__price-cycle">{plan.cycle}</span>
              </div>
              {plan.hint && <div className="fk-plan__hint">{plan.hint}</div>}
              <ul className="fk-plan__features">
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button
                className={plan.ctaStyle}
                onClick={() =>
                  analytics.track('cta_click', {
                    location: 'plans',
                    plan: plan.name.toLowerCase(),
                  })
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
