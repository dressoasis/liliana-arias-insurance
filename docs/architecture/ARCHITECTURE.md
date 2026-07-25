# Arquitectura del Sistema

**Liliana Arias Insurance** está construido sobre una arquitectura **Feature-First**, priorizando la escalabilidad, la separación de responsabilidades y la reutilización de código mediante un **Design System** sólido.

## Principios Arquitectónicos

1. **Separación entre UI y Lógica de Negocio**
   - Los componentes en `src/components/ui/` y `src/components/shared/` son componentes "tontos" (dumb components). Solo renderizan interfaz de usuario y no conocen nada sobre llamadas a APIs, tracking o estado de negocio.
   - La lógica vive en las features (`src/features/`), hooks y providers.
   
2. **Sistema Centralizado de Configuración**
   - El proyecto cuenta con un sistema robusto en `src/config/`. Este es el único lugar donde se deben modificar variables de entorno, textos legales, información de contacto o URLs de redes sociales. Cualquier componente debe consumir esta configuración, evitando *magic strings* esparcidos por el código.

3. **Arquitectura Feature-First**
   - La carpeta `src/features/` agrupa el código por dominio de negocio (ej. `home`, `contact`, `services`). Cada feature puede contener sus propias páginas, componentes específicos, hooks y utilidades, encapsulando la funcionalidad.

4. **SEO First**
   - La infraestructura SEO está integrada desde la base. Se utilizan esquemas JSON-LD (`OrganizationSchema`, `LocalBusinessSchema`, etc.) inyectados programáticamente, y metadatos dinámicos, asegurando el cumplimiento de las mejores prácticas de Google sin ensuciar los componentes visuales.

5. **Tracking Desacoplado**
   - En lugar de inyectar código de Google Analytics en botones, tenemos una capa de infraestructura en `src/analytics/` y `CTAButton`. Se usa un sistema centralizado de eventos (`events.js`) que garantiza consistencia y permite intercambiar el proveedor subyacente (GA4, Mixpanel, Meta) sin tocar componentes visuales.

## Decisiones Técnicas Clave

- **Framer Motion + Tailwind CSS:** Para animaciones fluidas y estilos, controlados estrictamente por los tokens del Design System.
- **Rutas Centralizadas (`RouteConfig`):** Las rutas de la aplicación están unificadas. Los enlaces consumen constantes, eliminando el problema de links rotos por cambios de URL en múltiples archivos.
- **React Hook Form:** El manejo de formularios delega el estado y la validación a la librería, manteniendo los componentes de input (`TextField`, etc.) completamente agnósticos al estado.

## Estructura de Directorios

```
src/
├── analytics/    # Motor de tracking, providers y definición de eventos
├── app/          # Punto de entrada, Router (code-splitting por ruta) y Layouts principales
├── components/   # UI Atómica y Shared Components (Domain-agnostic)
├── config/       # Variables globales, marca, empresa, SEO
├── content/      # Textos estáticos (preparado para CMS/i18n)
├── features/     # Lógica agrupada por módulo/dominio de negocio
├── hooks/        # Hooks reutilizables (analytics, forms, a11y)
├── pages/        # Ensambladores de alto nivel (inyectados en el router)
├── styles/       # Tailwind, tokens en CSS variables
└── utils/        # Funciones puras de ayuda, logger
```
