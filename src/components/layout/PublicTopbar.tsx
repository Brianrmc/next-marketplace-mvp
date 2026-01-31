"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicTopbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isMarketplace = pathname.startsWith("/marketplace") || pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <header className="h-14 flex items-center justify-between px-6 bg-primary text-primary-foreground">
      {/* Logo */}
      <Link
        href={isLanding ? "/" : "/marketplace"}
        className="font-bold tracking-wide"
      >
        EP&O
      </Link>

      {/* Botón derecho */}
      {isLanding && (
        <Link
          href="/marketplace"
          className="px-4 py-2 rounded bg-primary-foreground text-primary font-medium"
        >
          Marketplace
        </Link>
      )}

      {isMarketplace && (
        <Link
          href="/login"
          className="px-4 py-2 rounded bg-primary-foreground text-primary font-medium"
        >
          Ingresar
        </Link>
      )}
    </header>
  );
}