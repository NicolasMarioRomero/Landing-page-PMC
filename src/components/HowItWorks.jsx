import { useSectionVisibility } from '../analytics'

const STEPS = [
  {
    num: '01',
    title: 'Crea tu hogar',
    desc: 'Descarga FreshKeeper, crea un espacio de hogar y comparte el código con las personas que viven contigo.',
  },
  {
    num: '02',
    title: 'Registra tu inventario',
    desc: 'Escanea el código de barras o agrégalo manualmente. FreshKeeper trae la fecha de vencimiento automáticamente.',
  },
  {
    num: '03',
    title: 'Recibe alertas y ahorra',
    desc: 'FreshKeeper te avisa, genera tu lista de mercado y te muestra cuánto dinero estás recuperando mes a mes.',
  },
]

/**
 * Sección "Clear Plan" (rúbrica StoryBrand).
 * 3 pasos numerados con linea conectora.
 */
export default function HowItWorks() {
  const ref = useSectionVisibility('como-funciona')
  return (
    <section id="como-funciona" className="fk-section fk-how" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker">Cómo funciona</span>
          <h2 className="fk-section__title">
            Tres pasos para<br />
            <em>empezar a ahorrar</em>.
          </h2>
          <p className="fk-section__sub">
            En menos de 5 minutos tienes tu inventario activo y tu hogar coordinado.
          </p>
        </div>
        <div className="fk-how__steps">
          {STEPS.map((s) => (
            <div key={s.num} className="fk-step">
              <div className="fk-step__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
