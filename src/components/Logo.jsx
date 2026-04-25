import logoIcon from '../assets/icon.png'
import logoIconRound from '../assets/icon_round.png'

/**
 * Logo de FreshKeeper.
 * @param {number} size - Tamaño en px (se aplica a width y height).
 * @param {'default'|'round'} variant - 'round' usa el icono redondeado.
 */
export default function Logo({ size = 36, variant = 'default' }) {
  const src = variant === 'round' ? logoIconRound : logoIcon
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt="FreshKeeper"
      className="fk-logo-img"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  )
}
