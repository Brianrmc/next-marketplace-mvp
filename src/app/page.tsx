import PublicTopbar from "@/components/layout/PublicTopbar";

export default function HomePage() {
  return (
    <>
      <PublicTopbar />

      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl leading-tight">
            Soluciones industriales integrales para operaciones críticas
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            EP&O ofrece servicios especializados en ingeniería, mantenimiento
            y suministro industrial, optimizando procesos operativos con
            enfoque en calidad y eficiencia.
          </p>
        </section>
      </main>
    </>
  );
}
