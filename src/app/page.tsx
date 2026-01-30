import PublicTopbar from "@/components/layout/PublicTopbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <PublicTopbar />

      <main className="bg-gray-50 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Plataforma de gestión y marketplace para EP&O
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Centraliza proveedores, controla inventarios y gestiona pedidos
            desde una sola plataforma diseñada para operaciones industriales.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/marketplace"
              className="bg-[#0A3D62] text-white px-6 py-3 rounded font-medium hover:bg-[#08324F]"
            >
              Ver marketplace
            </Link>

            <Link
              href="/register"
              className="border border-[#0A3D62] text-[#0A3D62] px-6 py-3 rounded font-medium hover:bg-blue-50"
            >
              Crear cuenta
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
