import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { useConsultationModal } from "@/context/ConsultationModalContext";

export const ComingSoonService = ({
  badgeLabel,
  badgeIcon = "clock",
  title,
  mainIcon,
}) => {
  const navigate = useNavigate();
  const { openConsultationModal } = useConsultationModal();

  const handleWhatsApp = () => {
    const phone = "12109293721";
    const msg = encodeURIComponent(`Hola Liliana, me gustaría recibir asesoría sobre ${badgeLabel}.`);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden py-20">
      {/* Fondo decorativo muy sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#f0f9ff] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <Badge
          variant="primary"
          className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold tracking-wide shadow-sm shadow-primary/15 mb-8"
        >
          <Icon name={badgeIcon} size={14} strokeWidth={2} className="text-[#0284c7]" />
          {badgeLabel}
        </Badge>

        {/* Icono central grande y elegante */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#0284c7]/5 rounded-full blur-xl animate-pulse" />
          <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-[0_8px_32px_rgba(2,132,199,0.12)] border border-[#e0f2fe]">
            <Icon name={mainIcon} size={40} strokeWidth={1.5} className="text-[#0284c7]" />
          </div>
        </div>

        {/* Título */}
        <Heading
          level="h1"
          className="text-[2.2rem] md:text-[3rem] font-extrabold tracking-tight leading-tight text-balance mb-6"
          style={{ color: "#0c1a2e" }}
        >
          {title}
        </Heading>

        {/* Descripción */}
        <div className="flex flex-col gap-3 mb-10 max-w-2xl">
          <Text variant="muted" className="text-[1.125rem] leading-relaxed text-slate-500">
            Estamos preparando contenido detallado para ayudarte a comprender este servicio y tomar una mejor decisión.
          </Text>
          <Text variant="muted" className="text-[1.125rem] leading-relaxed text-slate-500">
            Muy pronto encontrarás información completa, preguntas frecuentes y asesoría personalizada.
          </Text>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            className={clsx(
              "px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
              "bg-[#0284c7] text-white border-transparent",
              "shadow-[0_4px_24px_rgba(2,132,199,0.30)]",
              "hover:bg-[#0369a1] hover:shadow-[0_8px_32px_rgba(2,132,199,0.42)] hover:-translate-y-0.5",
              "active:translate-y-0"
            )}
            onClick={() => openConsultationModal()}
          >
            Solicitar asesoría
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={clsx(
              "px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out",
              "border-2 border-[#0284c7]/30 text-[#0284c7] bg-white/60 backdrop-blur-sm",
              "hover:border-[#0284c7]/60 hover:bg-white hover:-translate-y-0.5",
              "active:translate-y-0"
            )}
            onClick={handleWhatsApp}
          >
            <Icon name="message-square" size={16} strokeWidth={2} className="inline-block mr-2 -mt-0.5" />
            Hablar por WhatsApp
          </Button>
        </div>

        {/* Tarjeta inferior */}
        <div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-[#f8fafc] border border-slate-200 shadow-sm max-w-lg mx-auto text-left">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#e0f2fe]">
            <Icon name="help-circle" size={20} className="text-[#0284c7]" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm mb-1">¿Necesitas ayuda ahora?</h3>
            <p className="text-sm text-slate-500 leading-snug">
              Puedes comunicarte directamente con Liliana Arias y recibir asesoría personalizada.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
