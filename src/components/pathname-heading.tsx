"use client";

import { usePathname } from "next/navigation";

export default function PathnameHeading() {
  const pathname = usePathname().split("/")[1].toUpperCase();

  return pathname ? (
    <p>FE #{pathname}</p>
  ) : (
    <p className="text-2xl font-bold">Welcome to FE100</p>
  );
}
