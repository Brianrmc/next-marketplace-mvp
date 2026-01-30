"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Login incorrecto");
      return;
    }

    const data = await res.json();

    if (data.role === "ADMIN") router.push("/admin");
    if (data.role === "CLIENT") router.push("/client");
    if (data.role === "PROVIDER") router.push("/provider");
  }

  return (
    <form onSubmit={submit} className="p-8 max-w-sm space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      <input className="border p-2 w-full" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button className="bg-black text-white p-2 w-full">Entrar</button>
    </form>
  );
}
