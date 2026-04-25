# FreshKeeper - Landing Page

Landing page oficial de **FreshKeeper**, el refrigerador inteligente que toda la casa comparte.
Proyecto del curso **ISIS-2007 "Diseno de Productos e Innovacion en TI"** (Grupo 3, Universidad de los Andes).

Stack: **React 19 + Vite 8** (sin dependencias UI externas, solo fuentes de Google).

---

## Puesta en marcha

```bash
npm install
npm run dev         # http://localhost:5174
npm run build       # output en /dist
npm run preview     # sirve /dist localmente
```

### Variables de entorno

Copia `.env.example` a `.env` y rellena:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Google Analytics 4 (opcional)
VITE_MVP_URL=http://localhost:5173    # URL del MVP embebido
```

Si `VITE_GA_MEASUREMENT_ID` queda vacio, la landing sigue funcionando y los eventos quedan en el event bus local (accesibles en consola via `window.__fkAnalytics`).

---

## Como correr el MVP en paralelo

El boton **"Lanzar demo"** carga `VITE_MVP_URL` dentro de un iframe. Para desarrollo local:

```bash
# en otra terminal
cd MVP/PMC
npm install
npm run dev          # levanta en http://localhost:5173
```

La carpeta `MVP/` esta en `.gitignore`: clonala aparte desde el repo del MVP.

---

## Analytics (tracking)

Modulo: [`src/analytics.js`](src/analytics.js).

Sistema dual:

1. **Google Analytics 4** - via `gtag`, solo si `VITE_GA_MEASUREMENT_ID` esta definido.
2. **Event bus local** - siempre activo. Util para demos y dashboards propios.

Eventos trackeados (alineados con la rubrica de la sesion 12):

| Evento | Cuando | Params |
|---|---|---|
| `page_view` | al cargar la landing | `page_title`, `page_location` |
| `section_view` | seccion entra al viewport (>=30%) | `section` |
| `scroll_depth` | se alcanza 25/50/75/100% | `percent` |
| `cta_click` | click en cualquier CTA principal | `location`, `type` |
| `feature_click` | click en feature card (Solution) | `feature` |
| `mvp_launched` | se lanza el iframe del MVP | `source` |
| `nav_click` | click en el menu del header | `section` |
| `session_duration` | antes de cerrar la pestana | `seconds` |

### Como verificar que funciona

1. Abre la landing en dev y abre la consola.
2. Veras logs verdes `[FK analytics]` con cada evento.
3. En consola puedes inspeccionar: `window.__fkAnalytics.getEvents()`.
4. Si GA4 esta activo, ve a **Realtime** en analytics.google.com.

### Que mide cada cosa (metricas de negocio)

- **Conversion rate** = `mvp_launched` / `page_view`
- **Bounce rate** = sesiones con `session_duration < 10s` y sin `cta_click`
- **Engagement** = promedio de `scroll_depth` y numero de `section_view` por sesion
- **Feature interest** = distribucion de `feature_click` por `feature`

---

## Mapeo a la rubrica (PMC Sesion 12)

| Criterio | Seccion en la landing |
|---|---|
| Survive & Thrive (20%) | `Hero`, `Comparison` |
| Que ofreces / Como mejora la vida / Que hacer (30%) | `Hero`, `HowItWorks`, CTAs omnipresentes |
| CTA + Failure + Success + Plan (25%) | `Problem` (failure), `Solution` (success), `HowItWorks` (plan), `FinalCTA` |
| Header aspiracional + Junk drawer + Trust (25%) | `Hero`, `BusinessModel`, `Traction` + `Team` |

---

## Estructura

```
src/
  App.jsx          # todas las secciones de la landing
  App.css          # estilos por seccion
  index.css        # design tokens + reset + fuentes
  analytics.js     # tracking (GA4 + event bus)
  assets/          # imagenes (logo, screenshots)
  main.jsx         # entry point
index.html         # meta tags + OG
.env.example       # variables de entorno
```

---

## Equipo (Grupo 3)

- Jacobo Zarruk
- (completar con nombres reales del equipo en `App.jsx` -> componente `Team`)
