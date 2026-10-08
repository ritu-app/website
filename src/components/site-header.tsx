"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-cream md:bg-transparent md:backdrop-blur-md">
      <div className="relative z-40">
        <div className="mx-auto max-w-[1512px] bg-gradient-to-r from-cream/0 from-[15%] via-cream via-[56%] to-cream px-4 py-4 md:px-[60px] md:py-[30px]">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <div className="flex items-center gap-4 lg:gap-[66px]">
              <nav className="hidden items-center gap-8 md:flex lg:gap-16" aria-label="Primary">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[15px] leading-6 text-black hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/#download"
                className="inline-flex items-center justify-center rounded-full bg-sage px-3 py-2 text-[10px] leading-[14px] font-semibold text-inverse hover:bg-brand md:px-4 md:text-[15px] md:leading-6"
                onClick={() => setOpen(false)}
              >
                Download app
              </Link>
              <button
                type="button"
                className="inline-flex size-6 items-center justify-center md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((value) => !value)}
              >
                <img
                  src={open ? "/icons/close.svg" : "/icons/menu.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </div>
        </div>
        {open ? (
          <nav
            id="mobile-menu"
            className="absolute inset-x-0 top-full flex flex-col gap-6 bg-cream px-5 py-6 md:hidden"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] leading-6 font-medium text-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/70 md:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
