"use client";

import Link from "next/link";
import { NAVIGATION } from "@/lib/navigation";
import { Role } from "@/lib/roles";
import { useSidebar } from "@/components/providers/sidebar-provider";
import clsx from "clsx";

type SidebarProps = {
  role: Role;
};

export default function Sidebar({ role }: SidebarProps) {
  const { open } = useSidebar();
  const items = NAVIGATION[role];

  return (
    <aside
      className={clsx(
        "bg-primary text-primary-foreground min-h-screen transition-all duration-300",
        open ? "w-64" : "w-16"
      )}
    >
      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-primary-foreground/10"
          >
            <span className={clsx("transition-opacity", !open && "opacity-0")}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}