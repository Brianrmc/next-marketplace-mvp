import Link from "next/link";
import BaseTopbar from "./BaseTopbar";

export default function PublicTopbar() {
  return (
    <BaseTopbar
      left={
        <Link href="/" className="font-bold tracking-wide">
          EP&O
        </Link>
      }
      right={
        <Link
          href="/login"
          className="px-4 py-2 rounded bg-primary-foreground text-primary font-medium"
        >
          Ingresar
        </Link>
      }
    />
  );
}