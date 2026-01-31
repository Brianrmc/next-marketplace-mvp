import { Role } from "./roles";

export const NAVIGATION: Record<
  Role,
  { label: string; href: string }[]
> = {
  ADMIN: [
    { label: "Usuarios", href: "/admin/users" },
  ],
  CLIENT: [
    { label: "Marketplace", href: "/client" },
  ],
  PROVIDER: [
    { label: "Productos", href: "/provider/products" },
  ],
};