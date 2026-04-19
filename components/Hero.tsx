import Image from "next/image";
import { Icon } from "@/components/Icon";

const BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApIidcW4b8ON3EZLKRJOEy8DKgpYuqdDnzx7Z50Sl_RzGonuf-tpsN0vcxh4CDbYOMZxYPC6mxjYeF24m2mlWySdVmqfuaYnc76HFXrkPYtazInYvfHQK_rJlH5J9fseuRPB35R-uPsK21vXn11UCXScJViZqQzjk1zv1oGHpADLZxTKF84D6WinG6b3aGkWcryH91IC647aBjvRWLpfsjMUN9yc8MfQ6iOEHPsnYZB6mEK9YnXIoc58L2xtF79j8t0NhunX59O3M";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          priority
          className="object-cover opacity-30 mix-blend-overlay"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <p
          className="animate-fade-up font-headline tracking-[0.4em] uppercase text-secondary text-sm mb-6 flex items-center justify-center gap-4"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-12 h-px bg-secondary/50" />
          System Online
          <span className="w-12 h-px bg-secondary/50" />
        </p>

        <h1
          className="animate-fade-up font-headline text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6 text-glow-primary"
          style={{ animationDelay: "120ms" }}
        >
          THE ZAZAPAS
          <br />
          FUTURE
        </h1>

        <p
          className="animate-fade-up font-headline text-3xl md:text-5xl font-black tracking-tight mb-8"
          style={{ animationDelay: "240ms" }}
        >
          En zaza,{" "}
          <span className="text-primary text-glow-primary">CALZA!</span>
        </p>

        <p
          className="animate-fade-up font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12"
          style={{ animationDelay: "360ms" }}
        >
          Zapatillas de alto rendimiento para los que van siempre un paso
          adelante. Diseño brutal, comodidad sin límites.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-headline font-bold text-lg uppercase tracking-tighter bg-primary text-on-primary-fixed hover:bg-primary-dim shadow-[0_8px_24px_rgba(255,145,89,0.25)] hover:shadow-[0_12px_32px_rgba(255,145,89,0.4)] hover:scale-[1.03] active:scale-[0.96] transition-all duration-150"
          >
            EXPLORE DROP
            <Icon name="bolt" size={20} />
          </a>
          <a
            href="#architects"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-headline font-bold text-lg uppercase tracking-tighter glass-panel text-on-surface border border-outline-variant/30 hover:bg-surface-bright/30 hover:border-outline-variant/50 hover:scale-[1.02] active:scale-[0.96] transition-all duration-150"
          >
            VIEW THE ARTISTS
            <Icon name="auto_awesome" size={20} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-in absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40"
        style={{ animationDelay: "700ms" }}
      >
        <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-on-surface-variant">
          Scroll
        </span>
        <div className="w-px h-8 bg-on-surface-variant animate-pulse" />
      </div>
    </section>
  );
}
