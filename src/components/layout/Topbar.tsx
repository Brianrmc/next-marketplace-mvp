"use client";

import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="font-bold text-lg">Next Marketplace</h1>

      <button
        onClick={logout}
        className="text-sm text-red-600 hover:underline"
      >
        Salir
      </button>
    </header>
  );
}
