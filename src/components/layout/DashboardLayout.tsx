import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { cookies } from "next/headers";
import { Role } from "@/lib/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const role = cookieStore.get("user-role")?.value as Role;

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 min-h-screen">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
