import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { marketplaceContent } from "@/content/services/marketplace";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

// ── Benefit Item ──────────────────────────────────────────────────────────────
const BenefitItem = ({ benefit, delay }) => {
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={clsx(
        "flex items-center gap-3.5 px-4 py-3.5 rounded-2xl",
        "bg-white border border-slate-100",
        "shadow-[0_1px_8px_-2px_rgba(0,0,0,0.07)]",
        "transition-all duration-500 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: delay }}
    >
      {/* Icono */}
      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-[#e0f2fe]">
        <Icon
          name={benefit.icon}
          size={17}
          strokeWidth={2}
          className="text-[#0284c7]"
        />
      </div>
      {/* Etiqueta */}
      <span className="text-sm font-semibold text-slate-700 leading-snug">
        {benefit.label}
      </span>
      {/* Check */}
      <Icon
        name="check-circle"
        size={16}
        strokeWidth={2}
        className="text-[#0284c7] ml-auto flex-shrink-0 opacity-70"
        aria-hidden="true"
      />
    </div>
  );
};

// ── Marketplace Hero Block ────────────────────────────────────────────────────
export const MarketplaceHero = () => {
  const navigate = useNavigate();
  const { badge, title, description, benefits, highlight, buttons, image } = marketplaceContent;

  const { ref: imgRef, isVisible: imgVisible } = useIntersectionAnimation({ threshold: 0.1 });
  const { ref: textRef, isVisible: textVisible } = useIntersectionAnimation({ threshold: 0.1 });

  const handlePrimary = () => navigate(buttons.primary.href);
  const handleWhatsApp = () => {
    const clean = buttons.secondary.phone.replace(/\D/g, "");
    const msg = encodeURIComponent(buttons.secondary.message);
    window.open(`https://wa.me/${clean}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      aria-labelledby="marketplace-hero-heading"
      className="relative bg-white overflow-hidden"
    >
      {/* Fondo decorativo muy sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#f0f9ff] rounded-full translate-x-1/3 -translate-y-1/4 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f0f9ff] rounded-full -translate-x-1/3 translate-y-1/4 blur-3xl opacity-40" />
      </div>

      {/* ── Main Grid ── */}
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-14 lg:gap-16 xl:gap-20 items-center">
          
          {/* ── LEFT: Image ── */}
          <div
            ref={imgRef}
            className={clsx(
              "relative w-full transition-all duration-500 ease-out",
              imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            {/* Imagen principal */}
            <div className="relative w-full">
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                decoding="async"
                className={clsx(
                  "w-full h-full object-cover",
                  // Border radius 28px
                  "rounded-[28px]",
                  // Sombra muy suave y elegante
                  "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15),0_2px_12px_-4px_rgba(0,0,0,0.08)]",
                  // Aspect ratio elegante — 4:3 en tablet, más alto en desktop
                  "aspect-[4/3] lg:aspect-[5/4]"
                )}
              />

              {/* Overlay muy sutil para dar profundidad */}
              <div
                className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Decorador de esquina sutil */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-[20px] bg-[#e0f2fe] -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#f0f9ff] border border-[#bae6fd]/60 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* ── RIGHT: Content ── */}
          <div
            ref={textRef}
            className={clsx(
              "flex flex-col gap-8 transition-all duration-500 ease-out",
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {/* Badge */}
            <Badge
              variant="primary"
              className="self-start flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide shadow-sm shadow-primary/15"
            >
              <Icon name={badge.icon} size={14} strokeWidth={2} className="text-[#0284c7]" />
              {badge.label}
            </Badge>

            {/* Título */}
            <Heading
              id="marketplace-hero-heading"
              level="h2"
              className="text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.12] text-balance"
              style={{ color: "#0c1a2e" }}
            >
              {title}
            </Heading>

            {/* Descripción — párrafos */}
            <div className="flex flex-col gap-4">
              {description.map((para, i) => (
                <Text
                  key={i}
                  variant="muted"
                  className="text-[1rem] leading-[1.75] text-slate-500"
                >
                  {para}
                </Text>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <BenefitItem
                  key={benefit.id}
                  benefit={benefit}
                  delay={`${textVisible ? i * 90 + 100 : 0}ms`}
                />
              ))}
            </div>

            {/* Highlight card */}
            <div className="flex items-start gap-3.5 px-5 py-4 rounded-2xl bg-[#f0f9ff] border border-[#bae6fd]">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-[#0284c7]/10 mt-0.5">
                <Icon name={highlight.icon} size={17} strokeWidth={2} className="text-[#0284c7]" />
              </div>
              <p className="text-sm font-medium text-[#0369a1] leading-relaxed">
                {highlight.text}
              </p>
            </div>

            {/* Buttons — idénticos al Hero */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-1">
              {/* Primario */}
              <Button
                variant="primary"
                size="lg"
                className={clsx(
                  "w-full sm:w-auto px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
                  "bg-[#0284c7] text-white border-transparent",
                  "shadow-[0_4px_24px_rgba(2,132,199,0.30)]",
                  "hover:bg-[#0369a1] hover:shadow-[0_8px_32px_rgba(2,132,199,0.42)] hover:-translate-y-0.5",
                  "active:translate-y-0 active:shadow-[0_4px_16px_rgba(2,132,199,0.22)]"
                )}
                onClick={handlePrimary}
              >
                {buttons.primary.label}
              </Button>

              {/* Secundario — WhatsApp */}
              <Button
                variant="outline"
                size="lg"
                className={clsx(
                  "w-full sm:w-auto px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
                  "border-2 border-[#0284c7]/30 text-[#0284c7] bg-white/60 backdrop-blur-sm",
                  "hover:border-[#0284c7]/60 hover:bg-white hover:-translate-y-0.5",
                  "active:translate-y-0"
                )}
                onClick={handleWhatsApp}
              >
                <Icon name="message-square" size={16} strokeWidth={2} className="inline-block mr-2 -mt-0.5" />
                {buttons.secondary.label}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
