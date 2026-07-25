import { Icon } from "../../ui/Icon";
import { CTAButton } from "./CTAButton";

/**
 * PhoneButton
 * 
 * Especialización que maneja exclusivamente la lógica de llamadas telefónicas.
 * Utiliza el protocolo nativo tel: para abrir el marcador del dispositivo.
 */
export const PhoneButton = ({ 
  phoneNumber, 
  children = "Llamar ahora", 
  ...props 
}) => {
  const handlePhoneClick = () => {
    if (phoneNumber) {
      // Abre el marcador telefónico nativo (muy útil en mobile)
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <CTAButton
      iconLeft={<Icon name="phone" className="w-5 h-5" />} // Fallback icon si 'phone' no está registrado, aunque deberías agregarlo a tu registro
      onClick={handlePhoneClick}
      trackingEvent="phone_call_initiated"
      trackingData={{ phone: phoneNumber }}
      {...props}
    >
      {children}
    </CTAButton>
  );
};
