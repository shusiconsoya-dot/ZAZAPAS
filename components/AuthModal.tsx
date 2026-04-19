"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

interface AuthModalProps {
  onClose: () => void;
}

export function AuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-sm bg-surface-container-high border border-outline-variant/20 rounded-2xl p-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)] animate-fade-up">

          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="font-headline text-primary text-xs tracking-[0.4em] uppercase mb-1">
                ZAZAPAS
              </p>
              <h2 className="font-headline font-black text-2xl uppercase tracking-tight text-on-surface">
                {mode === "signup" ? "Crear cuenta" : "Bienvenido"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Cerrar"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          {/* Toggle */}
          <div className="flex rounded-full bg-surface-container p-1 mb-6">
            {(["signup", "login"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cn(
                  "flex-1 py-2 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all duration-200",
                  mode === m
                    ? "bg-primary text-on-primary-fixed shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {m === "signup" ? "Registrarse" : "Iniciar sesión"}
              </button>
            ))}
          </div>

          {/* Fields */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <div>
                <label className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1.5 block">
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all font-body"
                />
              </div>
            )}

            <div>
              <label className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all font-body"
              />
            </div>

            <div>
              <label className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1.5 block">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all font-body"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-tight py-4 rounded-full hover:bg-primary-dim transition-all active:scale-95 shadow-[0_8px_24px_rgba(255,145,89,0.3)] mt-2"
            >
              {mode === "signup" ? "Crear cuenta" : "Entrar"}
            </button>
          </form>

          {/* Footer hint */}
          <p className="text-center text-[10px] text-on-surface-variant mt-6 font-headline tracking-widest uppercase">
            En zaza,{" "}
            <span className="text-primary">CALZA!</span>
          </p>
        </div>
      </div>
    </>
  );
}
