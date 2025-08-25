"use client";

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute inset-0 bg-grid opacity-70" />
  <div className="absolute inset-0 bg-[radial-gradient(800px_360px_at_50%_75%,hsl(var(--deep-brown)/.28),transparent_60%)] dark:bg-[radial-gradient(800px_360px_at_50%_75%,hsl(var(--red-core)/.28),transparent_60%)]" />
  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/0" />
</div>

  );
}

