import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="fk-footer">
      <div className="fk-container fk-footer__inner">
        <div className="fk-footer__brand">
          <Logo size={36} />
          <div>
            <strong>FreshKeeper</strong>
            <p>Gestión inteligente de alimentos. Validado con 73 hogares en Bogotá.</p>
          </div>
        </div>
        <div className="fk-footer__meta">
          <p>ISIS-2007 · Diseño de Productos e Innovación en TI</p>
          <p>Universidad de los Andes · Colombia · 2026</p>
          <p>Grupo 3</p>
        </div>
      </div>
    </footer>
  )
}
