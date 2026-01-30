"use client";

import Link from "next/link";

export default function PublicTopbar() {
  return (
    <header className="w-full bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="font-bold text-lg">
          EP&O Marketplace
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-4">
          <Link
            href="/marketplace"
            className="hover:underline"
          >
            Marketplace
          </Link>

          <Link
            href="/login"
            className="bg-white text-[#0A3D62] px-4 py-2 rounded font-medium hover:bg-gray-100"
          >
            Ingresar
          </Link>
        </nav>
      </div>
    </header>
  );
}
