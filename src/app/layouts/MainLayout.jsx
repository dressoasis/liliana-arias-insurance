import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ScrollToTop } from "../../components/layout/ScrollToTop";
import { SkipToContent, A11yAnnouncer } from "../../components/a11y";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <A11yAnnouncer />
      <SkipToContent contentId="main-content" />
      <ScrollToTop />
      <Navbar />
      {/* A11y: Landmark principal con ID para el Skip To Content */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
