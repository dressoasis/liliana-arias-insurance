/**
 * HeroBackground — Fondo premium con degradados azules de la paleta de marca.
 * Crea contraste y profundidad para que las floating cards resalten visualmente.
 */
export const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Base: azul muy profundo arriba → blanco abajo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, #dbeafe 0%, #eff6ff 30%, #f0f9ff 60%, #ffffff 100%)"
        }}
      />

      {/* Mancha 1 — gran orbe azul intenso top-left, detrás del copy */}
      <div
        className="absolute"
        style={{
          top: "-20%",
          left: "-10%",
          width: "70%",
          height: "110%",
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(37, 99, 235, 0.22) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 72%)",
          filter: "blur(0px)"
        }}
      />

      {/* Mancha 2 — orbe celeste detrás de la foto (derecha) */}
      <div
        className="absolute"
        style={{
          top: "-5%",
          right: "-12%",
          width: "65%",
          height: "95%",
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(14, 165, 233, 0.20) 0%, rgba(56, 189, 248, 0.10) 45%, transparent 70%)",
          filter: "blur(1px)"
        }}
      />

      {/* Mancha 3 — acento índigo medio-centro para unificar */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "30%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 65%)",
          filter: "blur(2px)"
        }}
      />

      {/* Franja de luz superior — refuerza el tono azul en el borde */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "4px",
          background:
            "linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.5) 35%, rgba(14,165,233,0.6) 65%, rgba(37,99,235,0) 100%)"
        }}
      />

      {/* Fade inferior — transición suave al siguiente bloque */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "200px",
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
    </div>
  );
};
