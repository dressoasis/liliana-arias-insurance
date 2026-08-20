import { Icon } from "../../ui/Icon";
import { CTAButton } from "./CTAButton";
import { useConsultationModal } from "@/context/ConsultationModalContext";

export const ScheduleButton = ({ 
  service,
  children = "Solicitar asesoría",
  onClick,
  ...props 
}) => {
  const { openConsultationModal } = useConsultationModal();

  const handleScheduleClick = (e) => {
    if (onClick) onClick(e);
    openConsultationModal(service);
  };

  return (
    <CTAButton
      iconLeft={<Icon name="calendar-heart" className="w-5 h-5" />}
      onClick={handleScheduleClick}
      trackingEvent="schedule_appointment_clicked"
      {...props}
    >
      {children}
    </CTAButton>
  );
};
