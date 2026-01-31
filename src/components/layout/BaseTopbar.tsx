"use client";

export default function BaseTopbar({
  left,
  right,
}: {
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <header className="h-14 w-full flex items-center justify-between px-6 bg-primary text-primary-foreground">
      {left}
      <div className="flex items-center gap-4">{right}</div>
    </header>
  );
}