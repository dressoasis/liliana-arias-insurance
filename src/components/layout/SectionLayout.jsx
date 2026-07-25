import { clsx } from "clsx";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

/**
 * SectionLayout
 * 
 * PROPÓSITO ARQUITECTÓNICO:
 * Mientras que `<Section>` es una primitiva de UI que maneja padding vertical y fondos,
 * `<SectionLayout>` es un orquestador de nivel superior que estructura el contenido.
 * Aporta valor al estandarizar el espaciado (mb-12, mt-12) y las etiquetas semánticas
 * (<header>, <footer>) alrededor del contenido principal de cualquier sección de la página.
 */
export const SectionLayout = ({
  children,
  header,
  footer,
  spacing = "lg",
  background = "transparent",
  containerSize,
  className,
  ...props
}) => {
  const bgMap = {
    transparent: "bg-transparent",
    surface: "bg-surface",
    muted: "bg-surface/50",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <Section spacing={spacing} className={clsx(bgMap[background], className)} {...props}>
      <Container size={containerSize}>
        {header && <header className="mb-12 md:mb-16 w-full">{header}</header>}
        
        <div className="w-full">
          {children}
        </div>

        {footer && <footer className="mt-12 md:mt-16 w-full">{footer}</footer>}
      </Container>
    </Section>
  );
};
