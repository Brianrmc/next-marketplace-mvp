export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex">
        <aside className="w-64 border-r p-4">
          <h2 className="font-bold">Dashboard</h2>
          <nav className="mt-4 space-y-2 text-sm">
            <p>Admin</p>
            <p>Seller</p>
            <p>Buyer</p>
          </nav>
        </aside>
  
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    );
  }
  