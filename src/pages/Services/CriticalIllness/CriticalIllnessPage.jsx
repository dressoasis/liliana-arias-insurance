import { ComingSoonService } from "@/features/services/common/ComingSoonService";

function CriticalIllnessPage() {
  return (
    <main>
      <ComingSoonService
        badgeLabel="Enfermedad Crítica"
        title="Próximamente."
        mainIcon="stethoscope"
      />
    </main>
  );
}

export default CriticalIllnessPage;
