"use client";

import { Menu } from "lucide-react";
import { Role } from "@/lib/roles";
import { useSidebar } from "@/components/providers/sidebar-provider";
import { getHomeByRole } from "@/lib/routes";
import { useRouter } from "next/navigation";

type TopbarProps = {
  role: Role;
};

export default function Topbar({ role }: TopbarProps) {
  const { toggle } = useSidebar();
  const router = useRouter();

  return (
    <header className="h-14 flex items-center justify-between px-4 bg-primary text-primary-foreground">
      <div className="flex items-center gap-3">
        <button onClick={toggle}>
          <Menu size={20} />
        </button>

        <button
          onClick={() => router.push(getHomeByRole(role))}
          className="font-bold tracking-wide"
        >
          EP&O
        </button>
      </div>

      <form action="/api/logout" method="post">
        <button className="px-3 py-1 rounded bg-primary-foreground text-primary">
          Salir
        </button>
      </form>
    </header>
  );
}