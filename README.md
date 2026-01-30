# 🛒 Next Marketplace MVP

Marketplace MVP desarrollado con **Next.js App Router**, **Prisma**, y una arquitectura escalable orientada a roles.

El proyecto incluye:
- Autenticación básica
- Manejo de roles
- Layout global con Topbar + Sidebar
- Base sólida para marketplace y dashboards

---

## 🚀 Tecnologías

- **Next.js (App Router)**
- **TypeScript**
- **Prisma ORM**
- **SQLite** (desarrollo)
- **TailwindCSS**
- **shadcn/ui**
- Autenticación por cookies (MVP)

---

## 📂 Estructura del Proyecto

src/
├── app/
│ ├── (auth)/ # Login y registro
│ ├── (public)/ # Páginas públicas
│ ├── (dashboard)/ # Dashboards por rol
│ │ ├── admin/
│ │ ├── client/
│ │ └── provider/
│ ├── api/ # API routes
│ └── layout.tsx # Layout raíz
│
├── components/
│ ├── layout/ # Topbar, Sidebar, DashboardLayout
│ └── ui/ # Componentes shadcn
│
├── lib/
│ ├── navigation.ts # Menú por rol
│ └── utils.ts
│
├── prisma/
│ └── schema.prisma
│
└── types/
└── next-auth.d.ts


---

## 👤 Roles del Sistema (MVP)

Actualmente el sistema maneja **3 roles**.

| Rol       | ID | Descripción |
|----------|----|-------------|
| **ADMIN** | 1  | Control total del sistema. Gestiona usuarios, roles, productos y órdenes. |
| **CLIENT** | 2 | Usuario final del marketplace. Puede navegar y comprar productos. |
| **PROVIDER** | 3 | Proveedor del marketplace. Puede subir productos y gestionar inventario. |

> ℹ️ Por ahora estos son los únicos roles activos.  
> Seller / Buyer externos se contemplan para fases posteriores.

---

## 🔐 Autenticación (MVP)

- Registro y login contra Prisma
- Passwords hasheados con `bcrypt`
- Autenticación basada en **cookies**
- Middleware ligero para proteger rutas
- Redirección automática por rol

### Rutas protegidas
- `/admin`
- `/client`
- `/provider`

---

## 🧭 Navegación por Rol

La navegación está centralizada en:

DATABASE_URL="file:./dev.db"

Inicializar Prisma
npx prisma migrate dev
Para abrir el editor visual de la base de datos:
npx prisma studio

Levantar el servidor:
npm run dev

http://localhost:3000

El layout global del dashboard vive en:
src/app/(dashboard)/layout.tsx


