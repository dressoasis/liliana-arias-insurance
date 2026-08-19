/**
 * router.jsx — Code Splitting por ruta con React.lazy + Suspense.
 *
 * ✅ APLICA: El router es el único punto donde lazy() tiene impacto real en este proyecto.
 * Al dividir las páginas en chunks separados, el usuario que visita "/" solo descarga
 * el código del Home. Si nunca visita "/about", ese chunk nunca se descarga.
 *
 * ❌ NO SE APLICA: lazy() en componentes internos (Navbar, Footer, Cards).
 * Estos son pequeños, síncronos y siempre visibles. El overhead de suspender
 * superaría el beneficio de dividirlos.
 */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

// ─── Lazy Pages ─────────────────────────────────────────────────────────────
// Cada página se convierte en un chunk JS independiente en el build.
const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFoundPage"));
const DevPage = lazy(() => import("@/pages/Dev/DevPage"));
const QuotePage = lazy(() => import("@/pages/Quote/QuotePage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("@/pages/About/AboutPage"));

// ─── Service Pages ───────────────────────────────────────────────────────────
const MedicarePage = lazy(() => import("@/pages/Services/Medicare/MedicarePage"));
const MarketplacePage = lazy(() => import("@/pages/Services/Marketplace/MarketplacePage"));
const LifeInsurancePage = lazy(() => import("@/pages/Services/LifeInsurance/LifeInsurancePage"));
const DentalVisionPage = lazy(() => import("@/pages/Services/DentalVision/DentalVisionPage"));
const FinalExpensePage = lazy(() => import("@/pages/Services/FinalExpense/FinalExpensePage"));
const CriticalIllnessPage = lazy(() => import("@/pages/Services/CriticalIllness/CriticalIllnessPage"));

// ─── Fallback de Carga ───────────────────────────────────────────────────────
// Un skeleton minimalista. Evita el flash de pantalla en blanco durante la carga.
const PageLoadingFallback = () => (
  <div
    className="min-h-screen w-full bg-background animate-pulse"
    aria-label="Cargando página..."
    role="status"
  />
);

// ─── Router ──────────────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <Suspense fallback={<PageLoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      // Ruta de desarrollo inyectada condicionalmente
      ...(import.meta.env.DEV ? [{
        path: "dev",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <DevPage />
          </Suspense>
        ),
      }] : []),
      // ─── Core Pages (Temp) ──────────────────────────────────────────────
      {
        path: "quote",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <QuotePage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "sobre-liliana",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      // ─── Rutas de Servicios ─────────────────────────────────────────────
      {
        path: "medicare",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <MedicarePage />
          </Suspense>
        ),
      },
      {
        path: "marketplace",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <MarketplacePage />
          </Suspense>
        ),
      },
      {
        path: "seguro-de-vida",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <LifeInsurancePage />
          </Suspense>
        ),
      },
      {
        path: "odontologia-y-vision",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <DentalVisionPage />
          </Suspense>
        ),
      },
      {
        path: "gastos-finales",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <FinalExpensePage />
          </Suspense>
        ),
      },
      {
        path: "enfermedad-critica",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <CriticalIllnessPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
