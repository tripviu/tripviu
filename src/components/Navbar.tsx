"use client";

import Container from "./Container";
import { usePathname } from "next/navigation";
import React from "react";

function LinkItem({ href, children }:{ href:string; children:React.ReactNode }) {
  const pathname = usePathname();
  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <a
      href={href}
      className={
        "no-underline transition-colors " +
        (active ? "text-black font-medium" : "text-gray-700 hover:text-black")
      }
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur border-b">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          <a href="/" className="inline-flex flex-col leading-tight">
            <span className="text-xl font-semibold tracking-tight">Tripviu</span>
            <span className="text-[11px] text-gray-500 -mt-0.5">Halal-friendly stays. For everyone.</span>
          </a>

          <ul className="hidden md:flex items-center gap-11 text-[15px]">
            <li><LinkItem href="/">Home</LinkItem></li>
            <li><LinkItem href="/about">About</LinkItem></li>
            <li><LinkItem href="/contact">Contact</LinkItem></li>
          </ul>

          <a href="/search?city=Dubai" className="rounded-lg px-3 py-2 bg-black text-white text-sm hover:opacity-90">
            Explore
          </a>
        </nav>
      </Container>
    </header>
  );
}
