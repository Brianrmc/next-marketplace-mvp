"use client";

import { useEffect } from "react";
import { useLoading } from "@/components/providers/loading-provider";

export default function ClientPage() {
  const { hide } = useLoading();

  useEffect(() => {
    hide(); // 👈 apaga loading al entrar
  }, [hide]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cliente</h1>
      <p className="text-muted-foreground">
        Bienvenido al panel de cliente.
      </p>
    </div>
  );
}