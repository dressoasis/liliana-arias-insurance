import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">404</h1>

      <p>Página no encontrada.</p>

      <Link to="/">Volver al inicio</Link>
    </main>
  );
}

export default NotFoundPage;
