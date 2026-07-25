# Performance Guide (Guía de Rendimiento)

El rendimiento (Performance) de Liliana Arias Insurance no es una ocurrencia tardía (afterthought); es una métrica clave del producto. Una carga lenta equivale a pérdida de clientes. Esta guía explica qué herramientas usar, cuándo usarlas, y lo más importante: cuándo **NO** usarlas para evitar una optimización prematura.

---

## 1. Code Splitting y Lazy Loading

### Concepto
No cargues JavaScript que el usuario aún no necesita. Esto reduce el tamaño inicial del Bundle y el Tiempo Interactivo (TTI).

### Cuándo Utilizarlo
- **Rutas Completas:** Todas las páginas en `src/app/router/router.jsx` se deben importar usando `React.lazy()` y envolverse en `<Suspense>`.
- **Componentes Ocultos Muy Pesados:** Un modal masivo, un mapa de Google complejo o una calculadora actuarial que no es visible inicialmente debería usar Lazy Loading.

### Cuándo NO Utilizarlo
- **Componentes "Above the fold":** Nunca uses lazy loading para el `Hero`, el `Navbar` o elementos vitales del primer pantallazo, ya que causa reflow y layout shifts (CLS) afectando Lighthouse.
- **Componentes pequeños:** Extraer un simple botón estético a un chunk separado es contraproducente por la latencia de la petición HTTP extra.

## 2. Memorización (`React.memo`, `useMemo`, `useCallback`)

El ecosistema React re-renderiza componentes cuando cambia el estado de un ancestro. Esto es rápido por defecto. Envolver todo en funciones de memorización a menudo cuesta más tiempo evaluando las dependencias que lo que cuesta el re-render en sí.

### React.memo
- **Cuándo SÍ:** En componentes "Hojas" del árbol (Leaf components) que renderizan mucha UI pura y casi nunca cambian sus props (Ej: el registro central `<Icon>`, o una grilla inmensa de tarjetas).
- **Cuándo NO:** En componentes que siempre reciben props dinámicas (como objetos no memorizados o children) en cada render, pues `React.memo` evaluará y fallará la comparación, ejecutando ambas cosas inútilmente.

### useMemo
- **Cuándo SÍ:** Para evitar repetir cálculos realmente pesados (ordenamiento de 10,000 filas, formateo intensivo de fechas masivas) en cada re-render.
- **Cuándo NO:** Para cálculos triviales como `const fullName = firstName + lastName`.

### useCallback
- **Cuándo SÍ:** Cuando pasas una función como prop hacia un componente envuelto en `React.memo`. (Ej: el `toggleMenu` pasado a `MobileMenu` en `Navbar.jsx`). Si no la memorizas, rompes el memo del hijo.
- **Cuándo NO:** Para funciones inline que son consumidas nativamente por HTML (`<button onClick={() => setAlgo(x)} />`).

## 3. Optimización de Imágenes

Las imágenes son estadísticamente el recurso que más pesa en una web.
- **Formato:** Usar WebP por defecto.
- **Tamaños:** Proveer imágenes en tamaños adecuados, no usar una imagen 4K de Unsplash como miniatura para un avatar.
- **Lazy atributo:** Para imágenes que están fuera del view inicial usar `loading="lazy"`. (El componente `<Image>` del proyecto debería manejar esto nativamente por default).

## 4. Tree Shaking y Bundle Size

### Concepto
Eliminación de código muerto. Solo incluimos en el JS final lo que realmente importamos.

### Cuándo prestar atención
- **Librerías de Utilidad:** Importar específicamente lo que se usa.
  *Incorrecto:* `import _ from "lodash";`
  *Correcto:* `import debounce from "lodash/debounce";`
- **Iconos:** Requerimos a todos los desarrolladores registrar íconos en `<Icon>` usando imports directos (o `lucide-react` con ES Modules bien configurados) para que Vite pueda purgar los íconos no utilizados.

## Resumen del Workflow de Performance
1. Escribe el código claro y limpio primero.
2. Abre la pestaña "Network" y "Performance" de DevTools.
3. Si el render tarda más de 16ms, o hay lag evidente, detecta al culpable usando React Profiler.
4. Aplica `useMemo`, `React.memo` o refactoriza el estado local solo allí donde esté el cuello de botella.
