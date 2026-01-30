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

## 🧪 Testing

### Manual Testing Checklist

- [x] Usuario puede registrarse
- [x] Usuario puede iniciar sesión
- [x] Usuario puede cerrar sesión
- [x] Usuario CLIENT no accede a /admin
- [x] Usuario ADMIN puede ver usuarios
- [x] Sidebar cambia según rol
- [x] Logout elimina sesión correctamente

### Automated Tests

```bash
npm run test


## 🎨 Design System & Branding

This project follows a corporate-first design system inspired by EP&O's brand identity.

### Color Palette

| Role        | Color Name          | Hex       | Usage |
|------------|---------------------|-----------|-------|
| Primary    | EP&O Blue           | #0A3D62   | Header, primary buttons, links |
| Secondary  | Industrial Gray     | #4A5D73   | Backgrounds, cards, sidebar |
| Accent     | Industrial Orange   | #F39C12   | Highlights, badges, actions |

### Design Principles

- Corporate an

## 🌐 Public Landing & Marketplace

The platform includes a public landing page designed to present the EP&O
marketplace solution to visitors and potential clients.

### Public Areas

- Landing page with corporate branding
- Public marketplace (read-only)
- Authentication entry points

### Authenticated Areas

- Client dashboard
- Provider inventory management
- Admin control panel

This separation allows a clear product flow and future scalability.


