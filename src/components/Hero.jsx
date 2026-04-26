import { analytics } from '../analytics'

function FridgeMockup() {
  return (
    <div className="fk-fridge">
      <div className="fk-fridge__head">
        <span>Mi nevera</span>
        <span aria-hidden="true">🏡</span>
      </div>
      <div className="fk-fridge__alert">
        <span aria-hidden="true">⚠</span>
        <span>Usa el yogur hoy — vence esta noche</span>
      </div>
      <ul className="fk-fridge__list">
        <li className="fk-fridge__item">
          <span className="fk-fridge__item-name">
            <span className="fk-fridge__item-dot fk-fridge__item-dot--red"></span>
            Yogur griego
          </span>
          <span className="fk-fridge__item-meta">vence hoy</span>
        </li>
        <li className="fk-fridge__item">
          <span className="fk-fridge__item-name">
            <span className="fk-fridge__item-dot fk-fridge__item-dot--orange"></span>
            Leche entera
          </span>
          <span className="fk-fridge__item-meta">3 días</span>
        </li>
        <li className="fk-fridge__item">
          <span className="fk-fridge__item-name">
            <span className="fk-fridge__item-dot fk-fridge__item-dot--mid"></span>
            Queso campesino
          </span>
          <span className="fk-fridge__item-meta">8 días</span>
        </li>
        <li className="fk-fridge__item">
          <span className="fk-fridge__item-name">
            <span className="fk-fridge__item-dot fk-fridge__item-dot--green"></span>
            Huevos (×6)
          </span>
          <span className="fk-fridge__item-meta">12 días</span>
        </li>
      </ul>
      <a href="#como-funciona" className="fk-fridge__cta">Ver cómo funciona ↓</a>
    </div>
  )
}

export default function Hero() {
  const handleCTA = (type) => {
    analytics.track('cta_click', { location: 'hero', type })
  }
  return (
    <section id="top" className="fk-hero">
      <div className="fk-container fk-hero__inner">
        <div className="fk-hero__content">
          <span className="fk-hero__kicker">Gestión inteligente de alimentos</span>
          <h1 className="fk-hero__title">
            Tu nevera,<br />
            finalmente<br />
            <em>organizada</em>.
          </h1>
          <p className="fk-hero__sub">
            FreshKeeper rastrea tu inventario, te avisa antes de que caduque algo y coordina las compras de todo el hogar — en tiempo real.
          </p>
          <div className="fk-hero__ctas">
            <a href="#planes" className="fk-btn fk-btn--primary fk-btn--lg" onClick={() => handleCTA('primary')}>
              Empezar gratis →
            </a>
            <a href="#mvp" className="fk-btn fk-btn--ghost fk-btn--lg" onClick={() => handleCTA('demo')}>
              Probar el MVP
            </a>
          </div>
          <div className="fk-hero__stats">
            <div>
              <div className="fk-hero__stat-num">$320K</div>
              <div className="fk-hero__stat-label">pesos al mes en comida botada por hogar</div>
            </div>
            <div>
              <div className="fk-hero__stat-num">34%</div>
              <div className="fk-hero__stat-label">de los alimentos comprados se desperdician</div>
            </div>
            <div>
              <div className="fk-hero__stat-num">47min</div>
              <div className="fk-hero__stat-label">semanales revisando manualmente el inventario</div>
            </div>
          </div>
        </div>
        <div className="fk-hero__visual">
          <FridgeMockup />
        </div>
      </div>
    </section>
  )
}
