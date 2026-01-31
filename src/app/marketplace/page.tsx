import PublicTopbar from "@/components/layout/PublicTopbar";

export default function MarketplacePage() {
  return (
    <>
      <PublicTopbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Marketplace</h1>

        <p className="text-muted-foreground">
          Explora productos disponibles. Para comprar, inicia sesión.
        </p>

        {/* Grid de productos (mock por ahora) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded p-4">Producto 1</div>
          <div className="border rounded p-4">Producto 2</div>
          <div className="border rounded p-4">Producto 3</div>
        </div>
      </main>
    </>
  );
}