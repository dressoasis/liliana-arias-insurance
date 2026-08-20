import { createContext, useContext, useState, useCallback } from "react";
import { RequestConsultationModal } from "../components/modal/RequestConsultationModal";
import { track } from "../analytics/tracking";

const ConsultationModalContext = createContext({
  isOpen: false,
  preselectedService: null,
  openConsultationModal: (service = null) => {},
  closeConsultationModal: () => {},
});

export const ConsultationModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [triggerElement, setTriggerElement] = useState(null);

  const openConsultationModal = useCallback((service = null) => {
    setTriggerElement(document.activeElement);
    setPreselectedService(service || null);
    setIsOpen(true);
    track("consultation_form_open", { service: service || "general" });
  }, []);

  const closeConsultationModal = useCallback(() => {
    setIsOpen(false);
    if (triggerElement && typeof triggerElement.focus === "function") {
      triggerElement.focus();
    }
  }, [triggerElement]);

  return (
    <ConsultationModalContext.Provider
      value={{
        isOpen,
        preselectedService,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
      <RequestConsultationModal
        isOpen={isOpen}
        preselectedService={preselectedService}
        onClose={closeConsultationModal}
      />
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => useContext(ConsultationModalContext);
