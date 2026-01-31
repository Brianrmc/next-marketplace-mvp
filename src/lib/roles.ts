export const ROLES = {
    ADMIN: "ADMIN",
    CLIENT: "CLIENT",
    PROVIDER: "PROVIDER",
  } as const;
  
  export type Role = keyof typeof ROLES;