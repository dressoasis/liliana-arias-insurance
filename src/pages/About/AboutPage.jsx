import { ComingSoonService } from "@/features/services/common/ComingSoonService";

function AboutPage() {
  return (
    <main>
      <ComingSoonService
        badgeLabel="Nosotros"
        title="Próximamente"
        mainIcon="users"
      />
    </main>
  );
}

export default AboutPage;
