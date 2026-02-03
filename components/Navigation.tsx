"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warmWhite/95 backdrop-blur-sm border-b border-anthracite/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-2xl tracking-tight hover:opacity-70 transition-opacity">
          HDGR
        </Link>
        
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-sm tracking-wide transition-opacity ${
                pathname === link.href ? "opacity-100" : "opacity-50 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
