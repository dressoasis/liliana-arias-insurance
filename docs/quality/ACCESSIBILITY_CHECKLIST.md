# Guía de Accesibilidad (WCAG AA)

Para que Liliana Arias Insurance sea una plataforma verdaderamente inclusiva y premium, debemos cumplir estrictamente con los estándares WCAG 2.1 Nivel AA.

## Checklist de Validación

### 1. Keyboard Navigation (Navegación por Teclado)
- [ ] Todo elemento interactivo (botones, enlaces, inputs) debe ser alcanzable usando solo la tecla `Tab`.
- [ ] El orden del foco (`tabindex`) debe ser lógico y predecible (generalmente, de arriba a abajo y de izquierda a derecha).
- [ ] Ningún usuario debe quedar "atrapado" en un componente (Keyboard Trap). Especial cuidado en modales y menús móviles.

### 2. Focus Visible
- [ ] Debe existir un indicador visual claro para el estado `:focus` o `:focus-visible` (Anillo de enfoque).
- [ ] En este proyecto, usamos las clases de Tailwind: `focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`. Nunca esconder el foco con `outline: none` sin dar un estilo alternativo.

### 3. Semántica y Landmarks
- [ ] El documento debe estar estructurado lógicamente usando etiquetas HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- [ ] Existe un `<main id="main-content">` que representa el contenido principal, vital para el Skip To Content.
- [ ] Los botones que realizan acciones usan `<button>`, los que cambian de URL usan `<a>` (o `<Link>`). Evitar usar `<div onClick={...}>`.

### 4. Headings (Jerarquía de Encabezados)
- [ ] Existe un solo `<Heading level="h1">` (o `<h1>`) por página.
- [ ] Los encabezados no deben saltarse niveles lógicos (no pasar de un `<h2>` directo a un `<h4>` saltando el `<h3>`).
- [ ] El tamaño visual no debe dictar la etiqueta semántica. Usar props de clase para alterar el aspecto visual independientemente de la etiqueta.

### 5. ARIA (Accesible Rich Internet Applications)
- [ ] Elementos que muestran u ocultan contenido deben usar `aria-expanded="true/false"` (Ej: menú móvil, acordeones).
- [ ] Elementos puramente decorativos o redundantes deben ocultarse a los lectores de pantalla usando `aria-hidden="true"` (Ej: íconos junto a textos descriptivos).
- [ ] Si un botón solo tiene un ícono y no tiene texto, debe llevar `aria-label="Descripción de la acción"`.

### 6. Contraste de Color
- [ ] Los textos normales deben tener una relación de contraste mínima de 4.5:1 con su fondo.
- [ ] Los textos grandes (18pt o 14pt en negrita) deben tener un contraste mínimo de 3:1.
- [ ] Elementos de interfaz y estados focus también deben destacar claramente.

### 7. Atributo `alt` en Imágenes
- [ ] Todas las imágenes informativas deben tener un atributo `alt="Descripción exacta"`.
- [ ] Imágenes decorativas deben tener un atributo `alt=""` vacío para que los lectores de pantalla las ignoren (no omitir el atributo, pasarlo vacío).

### 8. Errores de Formularios y Feedbacks
- [ ] Los inputs con errores deben informar al lector de pantalla mediante `aria-invalid="true"`.
- [ ] El mensaje de error debe estar asociado al input usando `aria-describedby="id-del-mensaje"`.
- [ ] Cambios bruscos de estado (alertas, submits exitosos) deben anunciarse a los lectores mediante regiones live (ej. `A11yAnnouncer`).

### 9. Reduced Motion (Movimiento Reducido)
- [ ] Aquellas animaciones grandes o que cruzan pantalla deben respetar la preferencia del sistema operativo del usuario. En Tailwind: usar el modificador `motion-safe:`.
