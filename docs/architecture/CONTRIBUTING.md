# Contributing Guidelines

## Convenciones de Refactorización y Deuda Técnica

Este proyecto está diseñado bajo restricciones de calidad estrictas. Todo PR debe pasar por el siguiente checklist arquitectónico:

### 1. Invariante de Duplicación (DRY)
Antes de crear un componente, revisa la página de desarrollo interna `/dev` para confirmar si ya existe una pieza reutilizable en el Design System.
- No dupliques `Cards` — utiliza o extiende `BaseCard`/`InteractiveCard`.
- No dupliques lógicas de botones (ej. Botón de agendar) — utiliza `ScheduleButton`.

### 2. Responsabilidad Única (SRP)
Si un componente hace demasiadas cosas, divídelo:
- ¿Un componente maneja fetching de API, manejo de error y renderizado de lista? Divídelo en un Hook de datos y componentes visuales tontos.
- ¿Una sección (ej. Hero) tiene más de 60 líneas y contiene hardcodeado todo el contenido? Separa el texto a un archivo en `content/` y la lógica a sub-componentes.

### 3. Evitar Optimizaciones Prematuras
- No envuelvas cada componente en `React.memo` por defecto. Solo úsalo en hojas puras (como `Icon` o `Badge`) que se renderizan masivamente o dentro de padres con estado muy volátil (como listeners de scroll).
- No uses `useMemo` o `useCallback` a menos que pases funciones como props a componentes memorizados o dependas de ellas en arrays de dependencias de `useEffect`.

### 4. Flujo de Trabajo para Deuda Técnica
1. **Identificar y Migrar:** Nunca elimines un componente obsoleto inmediatamente. Primero crea la alternativa, migra a todos los consumidores, y *luego* elimina.
2. **Backward Compatibility:** Si modificas la API de un componente de UI (ej. remover la prop `body` de `BaseCard`), debes actualizar todos los archivos que dependían de esa firma.
3. **Tracking Seguro:** Si necesitas trackear un nuevo evento, regístralo primero en `src/analytics/events.js`. Nunca uses strings directamente (Magic Strings) al invocar `track()`.

### 5. Control de Logs
Queda estrictamente prohibido usar `console.log` sin un bloque de control de entorno. Todos los logs informativos deben usar:
```javascript
import { logger } from "@/utils/logger";
logger.info("Dato de interés");
```
Los logs accidentales en producción filtran detalles de infraestructura y degradan la experiencia.
