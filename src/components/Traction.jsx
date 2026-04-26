import { useSectionVisibility } from '../analytics'

const QUOTES = [
  {
    text: '"Llegaba al supermercado y compraba cosas que ya tenía. Con FreshKeeper eso desapareció. El primer mes ahorré más de $200 mil pesos."',
    author: 'Valentina R. — Madre de familia, Bogotá',
  },
  {
    text: '"Vivimos cuatro en el apartamento y siempre había peleas por la comida. Ahora todos ven el inventario y nos coordinamos sin dramas."',
    author: 'Sebastián M. — Estudiante de posgrado, Medellín',
  },
  {
    text: '"Por fin puedo mostrarle a mi familia exactamente cuánto dinero estábamos botando. Los reportes mensuales son un game-changer."',
    author: 'Jorge P. — Jefe de hogar, Bogotá',
  },
]

/**
 * Sección "Trust" (rúbrica StoryBrand).
 * 73 hogares + 4 numeros + 3 quotes.
 */
export default function Traction() {
  const ref = useSectionVisibility('traccion')
  return (
    <section id="traccion" className="fk-section fk-traction" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker">Confianza y credibilidad</span>
          <h2 className="fk-section__title">
            Validado con<br />
            <em>hogares reales</em>.
          </h2>
          <p className="fk-section__sub">
            73 familias y grupos de roommates en Bogotá y Medellín participaron en nuestra investigación. Los números hablan solos.
          </p>
        </div>
        <div className="fk-traction__grid">
          <div>
            <div className="fk-traction__big">73</div>
            <div className="fk-traction__big-cap">
              hogares validaron el problema — 86% vive con al menos otra persona.
            </div>
          </div>
          <div className="fk-traction__numbers">
            <div>
              <div className="fk-traction__num">76%</div>
              <div className="fk-traction__num-label">compra duplicados 2–3 veces al mes</div>
            </div>
            <div>
              <div className="fk-traction__num">93%</div>
              <div className="fk-traction__num-label">pagaría por una solución que resuelva esto</div>
            </div>
            <div>
              <div className="fk-traction__num">7%</div>
              <div className="fk-traction__num-label">usa hoy alguna solución digital. El mercado está libre.</div>
            </div>
            <div>
              <div className="fk-traction__num">$247K</div>
              <div className="fk-traction__num-label">ahorro promedio mensual reportado</div>
            </div>
          </div>
        </div>
        <div className="fk-quotes">
          {QUOTES.map((q) => (
            <blockquote key={q.author} className="fk-quote">
              <p>{q.text}</p>
              <cite>{q.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
