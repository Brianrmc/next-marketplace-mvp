"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLoading } from "@/components/providers/loading-provider";
import PublicTopbar from "@/components/layout/PublicTopbar";

export default function LoginPage() {
  const router = useRouter();
  const { show, hide } = useLoading();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    show();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        hide();
        setSubmitting(false);
        return;
      }

      const { role } = await res.json();

      setTimeout(() => {
        router.push(`/${role.toLowerCase()}`);
      }, 300);
    } catch {
      hide();
      setSubmitting(false);
    }
  }

  return (
    <>
      <PublicTopbar />

      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={submit}
          className="w-full max-w-sm space-y-4 bg-card rounded-lg border p-8"
        >
          <h1 className="text-xl font-bold text-center">
            Iniciar sesión
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
            type="submit"
            disabled={submitting}
            className="bg-primary text-primary-foreground p-2 w-full rounded disabled:opacity-60"
          >
            Entrar
          </button>

          <p className="text-sm text-muted-foreground text-center">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-primary font-medium underline underline-offset-4"
            >
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}