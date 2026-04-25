import { useSectionVisibility } from '../analytics'

/**
 * Sección "Highlight Potential Failure" (rúbrica StoryBrand).
 * Fondo wine oscuro, stats en serif rojo coral.
 */
export default function Problem() {
  const ref = useSectionVisibility('problema')
  return (
    <section id="problema" className="fk-section fk-problem" ref={ref}>
      <div className="fk-container">
        <div className="fk-section__head">
          <span className="fk-section__kicker fk-section__kicker--dark">El problema</span>
          <h2 className="fk-section__title">
            Cada semana pierdes<br />
            dinero que no <em>ves ir</em>.
          </h2>
        </div>
        <div className="fk-problem__layout">
          <div className="fk-problem__copy">
            <p>
              El <strong>76%</strong> de los hogares colombianos compra productos que ya tiene en casa. Nadie lo nota porque el desperdicio ocurre de a poco — un yogur aquí, unas fresas allá — hasta que sumas y duele.
            </p>
            <p>
              Sin visibilidad compartida del inventario, las familias y roommates están condenados a repetir el ciclo: comprar, olvidar, botar.
            </p>
          </div>
          <div className="fk-problem__stats">
            <div>
              <div className="fk-problem__stat-num">$2.16M</div>
              <div className="fk-problem__stat-label">pesos pierde un hogar colombiano al año en alimentos sin consumir (DANE, 2023)</div>
            </div>
            <div>
              <div className="fk-problem__stat-num">8/10</div>
              <div className="fk-problem__stat-label">hogares compró algo que ya tenía el último mes</div>
            </div>
            <div>
              <div className="fk-problem__stat-num">63%</div>
              <div className="fk-problem__stat-label">de hogares multipersona sufre conflictos por descoordinación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
