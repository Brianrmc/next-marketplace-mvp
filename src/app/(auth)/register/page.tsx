"use client";

import { useState } from "react";
import Link from "next/link";
import PublicTopbar from "@/components/layout/PublicTopbar";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <>
      <PublicTopbar />

      <div className="min-h-screen flex items-center justify-center px-4">
        <form className="w-full max-w-sm space-y-4 bg-card rounded-lg border p-8">
          <h1 className="text-xl font-bold text-center">
            Crear cuenta
          </h1>

          <input
            className="border p-2 w-full rounded"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="border p-2 w-full rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            onClick={submit}
            className="bg-primary text-primary-foreground p-2 w-full rounded"
          >
            Registrarse
          </button>

          <p className="text-sm text-muted-foreground text-center">
            ¿Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="text-primary font-medium underline underline-offset-4"
            >
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}