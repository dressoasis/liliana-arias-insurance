# Design System

El Design System es la única fuente de verdad para la estética visual del proyecto. Nadie debe utilizar colores, espaciados, bordes o sombras "quemados" o arbitrarios en Tailwind. Todo debe mapear a un **Design Token**.

## Jerarquía de Estilos

1. **CSS Variables (`src/styles/theme.css`)**: 
   - Define los tokens crudos (HSLs) para soportar temas dinámicos.
2. **Tailwind Config (`theme/tokens/`)**: 
   - Mapea las CSS variables al motor de Tailwind, restringiendo los valores permitidos.
3. **Componentes UI (`src/components/ui/`)**: 
   - Consumen los tokens de Tailwind. Son la única capa autorizada para utilizar clases utilitarias de diseño directo.

## Reglas Estrictas (Design Violations)

- ❌ **Colores Arbitrarios:** `text-[#FF0000]`, `bg-blue-500`
- ✅ **Design Tokens:** `text-primary`, `bg-surface`, `border-border`
- ❌ **Márgenes/Paddings arbitrarios para alinear:** `mt-[33px]`, `p-7`
- ✅ **Sistema Espacial (Escala Base-4):** `mt-8`, `p-6`, o usar utilitarios semánticos (`<Space>`, `<Container>`).
- ❌ **Importación Directa de Iconos:** `import { Menu } from "lucide-react"`
- ✅ **Registro Centralizado:** `<Icon name="menu" />`

## Paleta de Colores Semántica

En lugar de nombrar colores por su apariencia (ej. `blue`), se nombran por su intención:

- `primary`: Acción principal, botones, enlaces importantes.
- `secondary`: Acciones alternativas, fondos de soporte.
- `accent`: Detalles visuales para llamar la atención (etiquetas, notificaciones).
- `background`: Fondo general de la aplicación.
- `surface`: Fondo de tarjetas, modales o secciones superpuestas al background.
- `text`: Texto principal.
- `muted`: Texto secundario, descripciones, bordes sutiles.

## Sistema de Íconos

Los iconos son gestionados por un registro centralizado (`src/components/ui/Icon/Icon.jsx`).

**Por qué:**
1. Previene el acoplamiento directo a la librería subyacente (Lucide).
2. Garantiza que todos los iconos tengan tamaño y estilo de trazo consistentes.
3. Permite lazy-loading o cambiar de librería sin tocar los 200 archivos que usan iconos.
4. Implementa un "fallback icon" automático si el nombre es incorrecto en lugar de crashear la aplicación.
