import { useEffect } from "react";
import { ComingSoonService } from "@/features/services/common/ComingSoonService";
import { useConsultationModal } from "@/context/ConsultationModalContext";

function QuotePage() {
  const { openConsultationModal } = useConsultationModal();

  useEffect(() => {
    openConsultationModal();
  }, [openConsultationModal]);

  return (
    <main>
      <ComingSoonService
        badgeLabel="Solicitar Asesoría"
        title="Formulario de Contacto"
        mainIcon="calendar-check"
      />
    </main>
  );
}

export default QuotePage;
