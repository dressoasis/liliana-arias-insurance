# Review Checklist (Checklist de Pull Requests)

Esta lista de verificación debe ser utilizada tanto por el desarrollador antes de enviar código (Self-Review) como por los revisores durante el proceso de Pull Request. Copia y pega esta lista en la descripción de tu PR.

---

### 🎨 Design System y UI
- [ ] No existen estilos ni clases de Tailwind hardcodeadas (ej. `bg-[#123456]`).
- [ ] No existen colores fuera de la paleta semántica del Design System.
- [ ] No existen iconos importados directamente de librerías externas (solo a través de `<Icon />`).
- [ ] No existen tamaños tipográficos, sombras o border-radius por fuera del sistema.

### 🏗️ Arquitectura y Código
- [ ] No existen `console.log`, `console.warn` ni `console.error` sueltos (usar `logger.info`, etc.).
- [ ] No existen componentes que superen las **250 líneas de código**. Si lo hacen, se dividieron lógicamente.
- [ ] No existen props innecesarias o componentes que reciban "drill" excesivo.
- [ ] No existen *magic strings* ni textos hardcodeados para enlaces (se usan las configuraciones centralizadas).
- [ ] No existe duplicación funcional. Las utilidades y componentes ya existentes fueron reutilizados.
- [ ] Archivos y componentes están ubicados en la carpeta correcta (`features`, `shared`, `ui`, etc.).
- [ ] Imports ordenados y limpios (sin importaciones sin uso).

### ⚡ Rendimiento (Performance)
- [ ] No existen hooks innecesarios (`useState` derivables, o uso ciego de `useMemo`/`useCallback`).
- [ ] Lazy loading implementado donde aplica (imágenes, rutas pesadas).
- [ ] Lighthouse preparado: El componente no degrada significativamente las métricas CLS (Cumulative Layout Shift) o LCP (Largest Contentful Paint).

### ♿ Accesibilidad (A11y) y UX
- [ ] Accesibilidad validada (WCAG AA). Uso correcto de roles ARIA y semántica HTML.
- [ ] Soporte completo para navegación por teclado (estados `:focus-visible`).
- [ ] Responsive validado (probado en vistas Mobile, Tablet y Desktop).
- [ ] Las imágenes contienen atributos `alt` descriptivos o están marcadas como decorativas.

### 📝 Documentación
- [ ] El código es autodocumentado o incluye comentarios explicativos en lógicas de negocio complejas.
- [ ] Si se creó una primitiva de UI, se actualizó la página `/dev` para previsualizar el componente.
