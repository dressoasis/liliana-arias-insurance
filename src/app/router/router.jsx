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

// ─── Service Pages ───────────────────────────────────────────────────────────
const MedicarePage = lazy(() => import("@/pages/Services/Medicare/MedicarePage"));
const MarketplacePage = lazy(() => import("@/pages/Services/Marketplace/MarketplacePage"));
const LifeInsurancePage = lazy(() => import("@/pages/Services/LifeInsurance/LifeInsurancePage"));

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
      // ─── Rutas de Servicios ─────────────────────────────────────────────
      {
        path: "services/medicare",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <MedicarePage />
          </Suspense>
        ),
      },
      {
        path: "services/marketplace",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <MarketplacePage />
          </Suspense>
        ),
      },
      {
        path: "services/life-insurance",
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <LifeInsurancePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
