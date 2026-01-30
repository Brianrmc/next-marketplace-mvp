export type Role = "ADMIN" | "CLIENT" | "PROVIDER";

export const NAVIGATION: Record<Role, { label: string; href: string }[]> = {
  ADMIN: [
    { label: "Dashboard", href: "/admin" },
    { label: "Usuarios", href: "/admin/users" },
    { label: "Productos", href: "/admin/products" },
  ],

  CLIENT: [
    { label: "Inicio", href: "/client" },
    { label: "Marketplace", href: "/client/market" },
    { label: "Mis pedidos", href: "/client/orders" },
  ],

  PROVIDER: [
    { label: "Panel", href: "/provider" },
    { label: "Productos", href: "/provider/products" },
    { label: "Inventario", href: "/provider/inventory" },
  ],
};
