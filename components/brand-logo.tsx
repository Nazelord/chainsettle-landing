"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;       // px
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function BrandLogo({
  size = 32,
  className,
  priority,
  alt = "ChainSettle",
}: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita hydration mismatch; no mostramos nada hasta saber el tema real
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <span className={cn("inline-block", className)} style={{ width: size, height: size }} />;
  }

  const src = resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <Image
      key={src}                 // fuerza re-render cuando cambia el tema
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("select-none", className)}
      sizes={`${size}px`}
    />
  );
}
