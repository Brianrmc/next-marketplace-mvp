import PublicTopbar from "@/components/layout/PublicTopbar";

export default function MarketplacePublicPage() {
  return (
    <>
      <PublicTopbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Marketplace
        </h2>

        <p className="text-gray-600 mb-8">
          Explora productos disponibles. Inicia sesión para comprar.
        </p>

        {/* Aquí después irán productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded p-4 bg-white">
            Producto demo
          </div>
        </div>
      </main>
    </>
  );
}
