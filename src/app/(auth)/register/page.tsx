"use client";

import { useState } from "react";

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
    alert("Usuario creado");
  }

  return (
    <form onSubmit={submit} className="p-8 max-w-sm space-y-4">
      <h1 className="text-xl font-bold">Registro</h1>
      <input className="border p-2 w-full" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button className="bg-black text-white p-2 w-full">Crear cuenta</button>
    </form>
  );
}
