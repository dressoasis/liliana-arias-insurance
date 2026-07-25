# Quality Gate (Puerta de Calidad)

El **Quality Gate** define las condiciones innegociables que todo componente, vista o feature debe cumplir en el proyecto **Liliana Arias Insurance** antes de considerarse "Terminado" (Definition of Done) y ser fusionado en la rama principal.

Esta infraestructura garantiza que el proyecto sea mantenible, escalable y mantenga el estatus "Enterprise".

---

## 1. Arquitectura y Clean Code
- **Responsabilidad Única (SRP):** El componente debe tener una única razón para cambiar. Si renderiza UI y además realiza fetching de datos o lógica compleja de negocio, debe separarse.
- **Reutilización:** Si el patrón visual o lógico ya existe, no se debe recrear. Antes de programar, se debe consultar el `/dev` page o el Design System.
- **Clean Code & Naming:** Los nombres de variables, funciones y componentes deben revelar su intención claramente (ej. `isMobileMenuOpen` en lugar de `isOpen`). No se permiten *magic numbers* o *magic strings*.
- **Imports:** Los imports deben estar limpios, agrupados lógicamente (librerías externas primero, componentes internos después) y sin rutas relativas excesivamente profundas si se puede evitar. No deben haber dependencias circulares.

## 2. Design System
- **Estilos:** No se permite el uso de colores (`text-[#ff0000]`), espaciados o tamaños tipográficos hardcodeados. Todo debe referenciar los tokens definidos en el theme (`text-primary`, `mt-8`, `text-lg`).
- **Iconografía:** Todo icono debe inyectarse a través del componente centralizado `<Icon />`. Cero imports directos de librerías de iconos.

## 3. Accesibilidad (WCAG AA) y UX
- El componente debe ser completamente navegable por teclado.
- Debe contar con un anillo de enfoque visible (`focus-visible`).
- Uso semántico de HTML (no usar `<div>` en lugar de `<button>`).
- Todas las imágenes tienen textos alternativos relevantes, o `aria-hidden="true"` si son decorativas.

## 4. Responsive y Mobile First
- El componente debe haber sido construido pensado primero en pantallas pequeñas y escalado progresivamente.
- No deben existir desbordamientos horizontales de contenido (overflow).
- Tap targets en móviles (botones, links) deben medir al menos 44x44px.

## 5. Rendimiento (Performance)
- **Cero re-renders innecesarios:** Hooks, contextos y estado local deben estar lo más bajo posible en el árbol de componentes.
- **Lazy Loading:** Las imágenes que no están "above the fold" deben cargar bajo demanda. Las rutas deben usar code-splitting.
- **Cero abusos de hooks:** No envolver todo en `useMemo` o `React.memo` si no existe un problema medible o una razón arquitectónica (ver `PERFORMANCE_GUIDE.md`).

## 6. SEO
- **Estructura de Headings:** Las páginas y componentes inyectados deben respetar la jerarquía de encabezados (`H1` a `H6`) sin saltarse niveles.
- **Metadatos y Esquemas:** Si el componente representa una entidad de negocio (como una oficina, un FAQ o un servicio), debe tener la infraestructura lista para inyectar JSON-LD si es necesario.

## 7. Documentación y Testing
- Los componentes complejos o de uso global deben incluir comentarios JSDoc explicando sus props principales.
- El componente no debe romper pruebas existentes (E2E o Unitarias en el futuro) ni alterar el flujo de la aplicación para otros roles/usuarios.

---
*Cualquier código que no cumpla con este Quality Gate será rechazado en la revisión del Pull Request.*
