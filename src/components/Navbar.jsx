"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Shield, Menu } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useMemo, useState } from "react";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`text-sm font-semibold transition ${
        active ? "text-slate-950" : "text-slate-700 hover:text-slate-950"
      }`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "/about", label: "About" },
      { href: "/programs", label: "Programs" },
      { href: "/cases", label: "Cases" },
      { href: "/get-help", label: "Get Help" },
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold tracking-tight text-slate-950"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-base sm:text-lg">Arowolo NGO</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-slate-950"
            >
              Login
            </Link>
            <Button href="/donate" variant="primary">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              Donate Now
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-800 ring-1 ring-black/10 bg-white/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {open ? (
          <div className="mt-4 md:hidden">
            <div className="rounded-2xl bg-white/80 ring-1 ring-black/10 p-4 shadow-sm">
              <div className="grid gap-3">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-slate-800"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-2 flex items-center gap-3">
                  <Button href="/login" variant="subtle" className="w-full">
                    Login
                  </Button>
                  <Button href="/donate" variant="primary" className="w-full">
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}


