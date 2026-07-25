import { ComingSoonService } from "@/features/services/common/ComingSoonService";

function ContactPage() {
  return (
    <main>
      <ComingSoonService
        badgeLabel="Contacto"
        title="Próximamente"
        mainIcon="phone"
      />
    </main>
  );
}

export default ContactPage;
