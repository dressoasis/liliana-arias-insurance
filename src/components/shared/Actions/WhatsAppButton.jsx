import { Icon } from "../../ui/Icon";
import { CTAButton } from "./CTAButton";

/**
 * WhatsAppButton
 * 
 * Especialización que maneja la integración profunda con la API de WhatsApp.
 * Limpia el número de teléfono y encodifica el mensaje automáticamente.
 */
export const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hola, me gustaría recibir asesoría sobre seguros.",
  children = "Contactar por WhatsApp",
  ...props 
}) => {
  const handleWhatsAppClick = () => {
    if (!phoneNumber) return;
    
    // Integración Futura: Limpieza rigurosa de número y uso de la API oficial wa.me
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <CTAButton
      // Sobrescribimos estilos base para usar el color de marca de WhatsApp
      className="bg-[#25D366] hover:bg-[#128C7E] text-white focus:ring-[#25D366] border-none shadow-sm shadow-[#25D366]/20"
      iconLeft={<Icon name="message-circle" className="w-5 h-5" />} 
      onClick={handleWhatsAppClick}
      trackingEvent="whatsapp_chat_opened"
      trackingData={{ phone: phoneNumber }}
      {...props}
    >
      {children}
    </CTAButton>
  );
};
