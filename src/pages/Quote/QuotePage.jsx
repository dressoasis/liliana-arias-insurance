import { ComingSoonService } from "@/features/services/common/ComingSoonService";

function QuotePage() {
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
