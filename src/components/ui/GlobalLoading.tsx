"use client";

import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
        <span className="text-white text-sm tracking-wide">
          Cargando...
        </span>
      </div>
    </div>
  );
}
