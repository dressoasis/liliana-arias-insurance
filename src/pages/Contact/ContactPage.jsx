import { useEffect } from "react";
import { ComingSoonService } from "@/features/services/common/ComingSoonService";
import { useConsultationModal } from "@/context/ConsultationModalContext";

function ContactPage() {
  const { openConsultationModal } = useConsultationModal();

  useEffect(() => {
    openConsultationModal();
  }, [openConsultationModal]);

  return (
    <main>
      <ComingSoonService
        badgeLabel="Contacto"
        title="Solicitar Asesoría"
        mainIcon="phone"
      />
    </main>
  );
}

export default ContactPage;
