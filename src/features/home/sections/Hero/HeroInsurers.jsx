import { heroContent } from "../../../../content/home/hero";

/**
 * Colores brand aproximados de cada aseguradora — se muestran SOLO en hover.
 * En estado normal: escala de grises via filter.
 */
const brandColors = {
  Ambetter: "#00a651",
  "Florida Blue": "#003087",
  Oscar: "#e63b2e",
  Aetna: "#7b2d8b",
  Cigna: "#007cc0",
  UnitedHealthcare: "#006fc1",
};

export const HeroInsurers = () => {
  const { title, logos } = heroContent.insurers;

  return (
    <div
      className="w-full mt-10 animate-in fade-in duration-700 fill-mode-both"
      style={{ animationDelay: "900ms" }}
    >
      {/* Separador refinado */}
      <div
        className="w-full mb-8"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(2,132,199,0.15), transparent)"
        }}
        aria-hidden="true"
      />

      {/* Título de la sección */}
      <p
        className="text-center uppercase tracking-[0.15em] font-semibold mb-8 block"
        style={{ fontSize: "11px", color: "#94a3b8" }}
      >
        {title}
      </p>

      {/* Logotipos en escala de grises — hover: recuperan color brand */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {logos.map((logo) => {
          const brandColor = brandColors[logo.name];
          return (
            <div
              key={logo.id}
              className="group relative flex items-center justify-center h-8 cursor-default select-none transition-all duration-300"
              title={logo.name}
              aria-label={logo.name}
            >
              {/* Nombre de la compañía — tipografía como placeholder elegante */}
              <span
                className="font-bold text-[13px] tracking-tight transition-all duration-400"
                style={{
                  color: "#94a3b8",
                  filter: "grayscale(1)",
                  letterSpacing: "-0.02em"
                }}
                onMouseEnter={(e) => {
                  if (brandColor) {
                    e.currentTarget.style.color = brandColor;
                    e.currentTarget.style.filter = "none";
                  } else {
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.filter = "none";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.filter = "grayscale(1)";
                }}
              >
                {logo.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
