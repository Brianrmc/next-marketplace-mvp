import { Role } from "./roles";

export function getHomeByRole(role: Role) {
  switch (role) {
    case "ADMIN":
      return "/admin";
    case "PROVIDER":
      return "/provider";
    case "CLIENT":
    default:
      return "/client";
  }
}