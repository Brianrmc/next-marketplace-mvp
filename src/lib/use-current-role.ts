"use client";

import { Role, ROLES } from "@/lib/roles";

export function useCurrentRole(): Role {
  if (typeof document === "undefined") {
    return "CLIENT";
  }

  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("user-role="));

  const value = cookie?.split("=")[1];

  if (value && value in ROLES) {
    return value as Role;
  }

  return "CLIENT";
}