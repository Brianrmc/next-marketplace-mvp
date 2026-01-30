"use client";

import Link from "next/link";
import { NAVIGATION, Role } from "@/lib/navigation";

export default function Sidebar({ role }: { role: Role }) {
  const items = NAVIGATION[role] ?? [];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
