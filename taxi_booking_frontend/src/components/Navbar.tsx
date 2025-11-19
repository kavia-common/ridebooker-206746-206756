"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Book Ride" },
  { href: "/track", label: "Track Ride" },
  { href: "/history", label: "Booking History" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-gradient-to-r from-blue-500/10 to-gray-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-xl text-primary tracking-tight">
          <span className="">
            🚖 RideBooker
          </span>
        </Link>
        <ul className="flex gap-3 sm:gap-6">
          {navLinks.map((nav) => (
            <li key={nav.href}>
              <Link
                href={nav.href}
                className={`px-3 py-1.5 rounded-md text-base font-medium transition-all duration-150 ${
                  pathname === nav.href
                    ? "bg-primary text-white shadow"
                    : "text-primary hover:bg-blue-100/60"
                }`}
                aria-current={pathname === nav.href ? "page" : undefined}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
