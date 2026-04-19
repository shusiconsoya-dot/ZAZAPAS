"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";
import { useCart } from "@/lib/cart-context";
import { AuthModal } from "@/components/AuthModal";

const navLinks = [
  { label: "Drops", href: "#", active: true },
  { label: "Performance", href: "#" },
  { label: "Exclusives", href: "#" },
  { label: "Vault", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { state, dispatch } = useCart();
  const cartCount = state.items.reduce((s, { quantity }) => s + quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl",
          "flex justify-between items-center px-8 py-3",
          "rounded-full font-headline tracking-tighter uppercase",
          "shadow-[0_0_20px_rgba(255,145,89,0.15)]",
          "transition-all duration-300",
          scrolled
            ? "bg-surface-bright/70 backdrop-blur-2xl"
            : "bg-surface-bright/40 backdrop-blur-xl"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black italic text-orange-400 tracking-widest hover:opacity-80 transition-opacity"
          aria-label="Zazapas home"
        >
          ZAZAPAS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={cn(
                "transition-all text-sm",
                active
                  ? "text-orange-400 font-bold border-b-2 border-orange-400 pb-0.5"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Bag — opens cart */}
          <button
            onClick={() => dispatch({ type: "TOGGLE" })}
            className="relative p-2 rounded-full text-orange-400 hover:bg-zinc-800/50 hover:scale-105 transition-all duration-300"
            aria-label="Abrir cesta"
          >
            <Icon name="shopping_bag" size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-secondary rounded-full text-[9px] font-bold flex items-center justify-center text-on-secondary">
                {cartCount}
              </span>
            )}
          </button>

          {/* Person — opens auth */}
          <button
            onClick={() => setAuthOpen(true)}
            className="p-2 rounded-full text-orange-400 hover:bg-zinc-800/50 hover:scale-105 transition-all duration-300"
            aria-label="Cuenta"
          >
            <Icon name="person" size={22} />
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full text-orange-400 hover:bg-zinc-800/50 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="absolute top-full mt-3 left-0 right-0 glass-panel rounded-2xl p-6 flex flex-col gap-4 md:hidden border border-outline-variant/20"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "py-2 text-base transition-colors",
                  active ? "text-orange-400 font-bold" : "text-zinc-400 hover:text-white"
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Auth modal */}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </>
  );
}
