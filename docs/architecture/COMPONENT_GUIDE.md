# Component Guide

Esta guía establece las convenciones sobre cómo crear, nombrar y estructurar componentes en el proyecto.

## Patrón Arquitectónico de Componentes

### 1. Primitivas UI (`src/components/ui/`)
- **Propósito:** Los bloques de construcción fundamentales (Botones, Inputs, Textos, Badges, Contenedores).
- **Reglas:**
  - **Agnósticos al Dominio:** Un `Button` no sabe si está enviando una póliza o cancelando una cita.
  - **Agnósticos al Estado:** Reciben su valor por `props` y emiten eventos vía `callbacks` (`onClick`, `onChange`).
  - **Uso estricto de Clases:** Aquí es donde se concentran las clases de Tailwind y `clsx`.
  
### 2. Componentes Compartidos (`src/components/shared/`)
- **Propósito:** Componentes más complejos ensamblados a partir de las primitivas UI, como `Cards`, `Modals`, `Actions`.
- **Reglas:**
  - Extienden la funcionalidad base, por ejemplo, `CTAButton` extiende `Button` para inyectar lógica de Analytics, pero sigue sin pertenecer a una "página" específica.
  
### 3. Componentes de Layout (`src/components/layout/`)
- **Propósito:** Estructurar el esqueleto de la aplicación (Navbar, Footer, SectionLayout).
- **Reglas:**
  - Manejan el flujo principal, el espaciado entre secciones y la navegación.

### 4. Componentes de Features (`src/features/*/`)
- **Propósito:** Componentes específicos de una sección de la aplicación. Ej. `Hero`, `JourneySection`, `ContactForm`.
- **Reglas:**
  - **Acoplados al Dominio:** Estos componentes sí conocen el negocio. Saben cómo estructurar un seguro, dónde obtener los textos y qué acciones desencadenan procesos de negocio.
  - **Nunca reimplementan UI:** Consumen y combinan piezas de `components/ui` y `shared`.

## Convenciones de API (React Props)

- **Composición (Inversión de Control):**
  Evita crear componentes masivos con docenas de props (`headerText`, `bodyText`, `footerText`). En su lugar, usa "slots" vía `children` o props que acepten ReactNode.

  *Malo:*
  ```jsx
  <Card title="Hola" text="Mundo" footerLabel="Ok" onFooterClick={handler} />
  ```
  
  *Bueno:*
  ```jsx
  <Card header={<Heading>Hola</Heading>} footer={<Button onClick={handler}>Ok</Button>}>
    <Text>Mundo</Text>
  </Card>
  ```

- **Polimorfismo (Prop `as`):**
  Componentes estructurales (`Container`, `Card`) aceptan la prop `as` para modificar su renderizado semántico (`as="article"`, `as={Link}`) sin alterar sus estilos visuales.

## Accesibilidad (WCAG)
- Todos los componentes interactivos deben soportar el anillo de enfoque (`focus-visible`).
- Los componentes que cambien la ruta o el estado general deben notificar a los screen readers vía `A11yAnnouncer`.
- Los íconos decorativos siempre deben llevar `aria-hidden="true"`.
