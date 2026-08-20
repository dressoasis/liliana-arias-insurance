import { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { TextField, SelectField, TextareaField } from "@/components/ui/Form";
import { WhatsAppButton } from "@/components/shared/Actions/WhatsAppButton";
import { track } from "@/analytics/tracking";

// Lista de servicios soportados
const SERVICE_OPTIONS = [
  { value: "medicare", label: "Medicare" },
  { value: "marketplace", label: "Marketplace / Obamacare" },
  { value: "life", label: "Seguro de Vida" },
  { value: "dental", label: "Dental & Vision" },
  { value: "final_expense", label: "Gastos Finales" },
  { value: "critical_illness", label: "Enfermedades Críticas" },
  { value: "other", label: "Otro / No estoy seguro" },
];

// Opciones de método de contacto
const CONTACT_METHOD_OPTIONS = [
  { value: "call", label: "Llamada" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Correo electrónico" },
];

// Opciones de horario
const PREFERRED_TIME_OPTIONS = [
  { value: "asap", label: "Lo antes posible" },
  { value: "tomorrow", label: "Mañana" },
  { value: "this_week", label: "Esta semana" },
  { value: "no_preference", label: "No tengo preferencia" },
];

const getOptionLabel = (options, value) => {
  const item = options.find((opt) => opt.value === value);
  return item ? item.label : value;
};

export const RequestConsultationModal = ({ isOpen, preselectedService, onClose }) => {
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const firstInputRef = useRef(null);
  const modalRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: preselectedService || "",
      preferredContact: "",
      preferredTime: "",
      message: "",
    },
  });

  // Preseleccionar servicio si viene prop
  useEffect(() => {
    if (preselectedService) {
      setValue("service", preselectedService);
    }
  }, [preselectedService, setValue]);

  // Manejo de foco inicial y tecla ESC
  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus("idle");
      reset();
      return;
    }

    // Foco en el primer campo al abrir
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 100);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    setSubmitStatus("submitting");
    track("consultation_form_submit", { service: data.service });

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      if (!formspreeEndpoint || formspreeEndpoint.includes("YOUR_FORM_ID")) {
        if (import.meta.env.DEV) {
          console.warn(
            "[Formspree Error] El endpoint en .env es 'YOUR_FORM_ID'. " +
            "Debes crear tu formulario en https://formspree.io (con destino lilianaariasinsurance@gmail.com) " +
            "y colocar tu URL real (ej. https://formspree.io/f/xknlqwbv) en el archivo .env."
          );
        }
        throw new Error("Formspree endpoint no configurado con un ID real");
      }

      const payload = {
        email: data.email,
        name: data.fullName,
        _subject: "Nueva solicitud de asesoría — Liliana Arias Insurance",
        _replyto: data.email,
        Nombre: data.fullName,
        Teléfono: data.phone,
        Correo: data.email,
        "Tipo de seguro": getOptionLabel(SERVICE_OPTIONS, data.service),
        "Preferencia de contacto": getOptionLabel(CONTACT_METHOD_OPTIONS, data.preferredContact),
        "Preferencia de horario": getOptionLabel(PREFERRED_TIME_OPTIONS, data.preferredTime),
        Mensaje: data.message ? data.message.trim() : "Sin mensaje adicional",
      };

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        track("consultation_form_success", { service: data.service });
      } else {
        const errorData = await response.json().catch(() => ({}));
        if (import.meta.env.DEV) {
          console.error("[Formspree HTTP Error]", response.status, errorData);
        }
        throw new Error(`Error HTTP: ${response.status}`);
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error("[Formspree Submission Error]", err.message);
      }
      setSubmitStatus("error");
      track("consultation_form_error", { service: data.service });
    }
  };

  const handleResetForm = () => {
    setSubmitStatus("idle");
    reset();
  };

  const { ref: fullNameRef, ...fullNameRegister } = register("fullName", {
    required: "Ingresa tu nombre.",
  });

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      aria-describedby="consultation-modal-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[560px] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
      >
        {/* Cabecera del Modal */}
        <div className="relative px-6 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
          <div>
            <h2
              id="consultation-modal-title"
              className="text-2xl font-extrabold text-[#0c1a2e] tracking-tight"
            >
              {submitStatus === "success"
                ? "¡Gracias por contactarnos!"
                : submitStatus === "error"
                ? "No pudimos enviar tu solicitud"
                : "Solicita tu asesoría"}
            </h2>
            <p id="consultation-modal-desc" className="text-sm text-slate-600 mt-1">
              {submitStatus === "success"
                ? "Recibimos tu solicitud. Liliana revisará tu información y se pondrá en contacto contigo."
                : submitStatus === "error"
                ? "Por favor intenta nuevamente o comunícate directamente con Liliana."
                : "Cuéntanos qué tipo de cobertura estás buscando y Liliana se pondrá en contacto contigo."}
            </p>
            {submitStatus === "idle" && (
              <span className="inline-block mt-2 text-xs font-semibold text-[#0284c7] bg-[#0284c7]/10 px-2.5 py-0.5 rounded-full">
                Asesoría gratuita y sin obligación de inscribirse.
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          >
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido según el Estado */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {submitStatus === "success" && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Icon name="check-circle-2" className="w-10 h-10" />
              </div>
              <p className="text-slate-600 text-base max-w-md mx-auto">
                Liliana revisará tus requerimientos y se comunicará contigo mediante el canal de tu preferencia.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 rounded-xl shadow-lg"
                onClick={() => {
                  onClose();
                  handleResetForm();
                }}
              >
                Listo
              </Button>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="space-y-6 py-4">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                <Icon name="alert-circle" className="w-8 h-8" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl py-3"
                  onClick={handleResetForm}
                >
                  Intentar nuevamente
                </Button>
                <WhatsAppButton
                  phoneNumber="12109293721"
                  message="Hola Liliana, intenté enviar mi solicitud desde la página web pero tuve un problema. ¿Me podrías ayudar?"
                  className="flex-1 rounded-xl py-3 justify-center"
                >
                  Hablar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          )}

          {(submitStatus === "idle" || submitStatus === "submitting") && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Nombre completo */}
              <TextField
                label="Nombre completo"
                placeholder="Tu nombre completo"
                required
                error={errors.fullName?.message}
                ref={(e) => {
                  fullNameRef(e);
                  firstInputRef.current = e;
                }}
                {...fullNameRegister}
              />

              {/* Teléfono */}
              <TextField
                label="Teléfono"
                type="tel"
                placeholder="Tu número de teléfono"
                required
                error={errors.phone?.message}
                {...register("phone", { required: "Ingresa tu número de teléfono." })}
              />

              {/* Correo electrónico */}
              <TextField
                label="Correo electrónico"
                type="email"
                placeholder="tu@email.com"
                required
                error={errors.email?.message}
                {...register("email", {
                  required: "Ingresa un correo electrónico válido.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingresa un correo electrónico válido.",
                  },
                })}
              />

              {/* Tipo de seguro */}
              <SelectField
                label="¿Qué tipo de seguro te interesa?"
                placeholder="Selecciona una opción"
                options={SERVICE_OPTIONS}
                required
                error={errors.service?.message}
                {...register("service", {
                  required: "Selecciona el tipo de seguro que te interesa.",
                })}
              />

              {/* Método de contacto */}
              <SelectField
                label="¿Cómo prefieres que te contactemos?"
                placeholder="Selecciona preferencia"
                options={CONTACT_METHOD_OPTIONS}
                required
                error={errors.preferredContact?.message}
                {...register("preferredContact", {
                  required: "Selecciona tu preferencia de contacto.",
                })}
              />

              {/* Horario de preferencia */}
              <SelectField
                label="¿Cuándo prefieres que te contactemos?"
                placeholder="Selecciona horario"
                options={PREFERRED_TIME_OPTIONS}
                required
                error={errors.preferredTime?.message}
                {...register("preferredTime", {
                  required: "Selecciona cuándo prefieres que te contactemos.",
                })}
              />

              {/* Mensaje adicional */}
              <TextareaField
                label="Mensaje"
                placeholder="Cuéntanos brevemente qué necesitas."
                rows={3}
                {...register("message")}
              />

              {/* Botón enviar */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#0284c7]/20 transition-all duration-200"
                >
                  {submitStatus === "submitting" ? "Enviando..." : "Solicitar asesoría"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
