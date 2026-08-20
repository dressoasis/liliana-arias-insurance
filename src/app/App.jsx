import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";

function App() {
  return (
    <ConsultationModalProvider>
      <RouterProvider router={router} />
    </ConsultationModalProvider>
  );
}

export default App;