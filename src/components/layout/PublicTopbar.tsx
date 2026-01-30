"use client";

import Link from "next/link";

export default function PublicTopbar() {
  return (
    <header className="w-full bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          EP&O
        </Link>

        {/* Marketplace Button */}
        <Link
          href="/marketplace"
          className="bg-white text-[#0A3D62] px-4 py-2 rounded font-medium hover:bg-gray-100 transition"
        >
          Marketplace
        </Link>
      </div>
    </header>
  );
}
