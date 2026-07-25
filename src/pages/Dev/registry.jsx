import { DesignSystemView } from "./views/DesignSystemView";
import { TypographyView } from "./views/TypographyView";
import { ButtonsView } from "./views/ButtonsView";
import { CardsView } from "./views/CardsView";
import { FormsView } from "./views/FormsView";
import { IconsView } from "./views/IconsView";
import { LayoutView } from "./views/LayoutView";
import { AnimationsView } from "./views/AnimationsView";
import { HeroView } from "./views/HeroView";
import { JourneyView } from "./views/JourneyView";
import { NavigationView } from "./views/NavigationView";

export const devRegistry = [
  {
    id: "design-system",
    title: "Design System",
    description: "Tokens, colores y sistema de diseño base.",
    view: DesignSystemView
  },
  {
    id: "typography",
    title: "Typography",
    description: "Escala tipográfica, jerarquías y componentes de texto.",
    view: TypographyView
  },
  {
    id: "buttons",
    title: "Buttons",
    description: "Botones interactivos, CTA y Schedule actions.",
    view: ButtonsView
  },
  {
    id: "cards",
    title: "Cards",
    description: "Tarjetas base, interactivas y especializadas.",
    view: CardsView
  },
  {
    id: "forms",
    title: "Forms",
    description: "Inputs, checkboxes, selects y validaciones.",
    view: FormsView
  },
  {
    id: "icons",
    title: "Icons",
    description: "Registro centralizado de iconografía.",
    view: IconsView
  },
  {
    id: "layout",
    title: "Layout",
    description: "Contenedores, Secciones y Grillas.",
    view: LayoutView
  },
  {
    id: "animations",
    title: "Animations",
    description: "Transiciones, hover states y Framer Motion.",
    view: AnimationsView
  },
  {
    id: "hero",
    title: "Hero",
    description: "Componentes estructurales del primer pantallazo.",
    view: HeroView
  },
  {
    id: "journey",
    title: "Journey",
    description: "Componentes del viaje del cliente.",
    view: JourneyView
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Sistema de menús, breadcrumbs y links.",
    view: NavigationView
  }
];
