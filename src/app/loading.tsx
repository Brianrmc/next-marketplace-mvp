"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); // mínimo visible (UX suave)

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 pointer-events-none">
      <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Cargando</span>
      </div>
    </div>
  );
}