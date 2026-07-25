# Component Standards

Esta guía define el estándar oficial para la documentación, construcción y mantenimiento de todos los componentes en el sistema, asegurando homogeneidad en la forma de programar en equipo.

---

Cada componente creado debe contar con la siguiente estructura mental (y documentación JSDoc si es complejo o compartido):

## 1. Objetivo y Responsabilidad
- **Objetivo:** ¿Para qué existe este componente? (Ej. *"Renderiza un botón estandarizado"*).
- **Responsabilidad:** ¿Qué es lo que hace y, más importante, qué es lo que NO hace? (Ej. *"El componente Button maneja los estados visuales (hover, focus, disabled) y los eventos de clic, pero NO maneja fetching de datos ni redirecciones de React Router"*).

## 2. API (Props)
- Los nombres de las props deben ser descriptivos.
- Favorecer los booleanos positivos (`isSubmitting` en lugar de `notReady`).
- Exponer siempre interfaces comunes (como `className` u `onClick`) extendiendo las propiedades nativas del HTML (ej. `...props`).
- Utilizar enumeraciones en lugar de strings libres para variantes (`variant="primary" | "secondary"`).

## 3. Composición (Inversión de Control)
- Favorecer la inyección mediante `children` o props tipo nodo (`header`, `footer`) en lugar de pasar docenas de booleanos.
- **Ejemplo:**
  En lugar de: `<Card showHeader={true} headerTitle="Hola" headerIcon="star" />`
  Hacer: `<Card header={<Heading><Icon name="star"/> Hola</Heading>} />`

## 4. Estados Locales
- Los componentes visuales puros (`src/components/ui`) idealmente deben carecer de estado local (Stateless), o limitarse a estados de UI exclusivamente (ej. "Tooltip abierto/cerrado").
- Cualquier estado que pertenezca a la regla de negocio debe levantarse (lift state up) al contenedor padre (Feature component) o manejarse a través de contextos y librerías externas.

## 5. Accesibilidad (A11y) y Responsive
- Detallar qué etiquetas HTML semánticas se usan.
- Indicar si el componente incluye atributos `aria-*` automáticos y cómo gestiona el `focus`.
- Explicar el comportamiento del componente en distintas resoluciones (ej. *"Este menú apila los items en pantallas móviles y los despliega horizontalmente a partir del breakpoint `md`"*).

## 6. Buenas Prácticas y Dependencias
- Restringir al máximo las dependencias externas. Un botón no debería importar librerías pesadas de animaciones si no es su caso de uso core.
- **Cuándo reutilizarlo:** Especificar los casos de uso donde el componente es ideal.
- **Cuándo NO reutilizarlo:** Indicar sus anti-patrones. (Ej. *"NO usar `<Heading>` para dar tamaño a un texto regular si no representa un nivel estructural real del documento"*).

## Plantilla Estándar de Componente

```jsx
import { clsx } from "clsx";

/**
 * Objetivo: Renderizar un contenedor estandarizado para la aplicación.
 * Responsabilidad: Manejar el ancho máximo y los paddings laterales.
 * 
 * @param {ReactNode} children - El contenido interno.
 * @param {string} size - Variante de ancho máximo ('sm', 'md', 'lg', 'full').
 * @param {string} as - Elemento HTML polimórfico a renderizar.
 */
export const Container = ({
  children,
  size = "lg",
  className,
  as: Component = "div",
  ...props
}) => {
  const maxWMap = { sm: "max-w-3xl", lg: "max-w-7xl" };

  return (
    <Component
      className={clsx("w-full mx-auto px-4", maxWMap[size] || maxWMap.lg, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
```
