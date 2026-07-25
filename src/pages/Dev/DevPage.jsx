import { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Sidebar } from "./components/Sidebar";
import { devRegistry } from "./registry";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";

const DevPage = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(devRegistry[0].id);

  const activeCategory = devRegistry.find(c => c.id === activeCategoryId);
  const ActiveView = activeCategory?.view;

  // Si no estamos en desarrollo, por seguridad adicional, no renderizamos nada,
  // aunque el router ya debería haber evitado esto.
  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Fijo */}
      <Sidebar 
        categories={devRegistry} 
        activeId={activeCategoryId} 
        onChange={setActiveCategoryId} 
      />

      {/* Contenido Principal */}
      <main className="flex-1 ml-64 min-h-screen overflow-y-auto">
        <div className="p-8 lg:p-12">
          {/* Cabecera de Categoría */}
          <div className="mb-10 pb-6 border-b border-border">
            <Heading level="h1" className="text-4xl font-extrabold text-primary mb-2">
              {activeCategory?.title}
            </Heading>
            <Text variant="muted" className="text-lg">
              {activeCategory?.description}
            </Text>
          </div>

          {/* Renderizado de la Vista Específica */}
          <div className="max-w-6xl">
            {ActiveView ? <ActiveView /> : <Text>Vista no encontrada.</Text>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevPage;
