"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { ProductImage } from "@/components/ProductImage";
import { Icon } from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data";

const glowClass: Record<Product["glowColor"], string> = {
  primary: "from-primary/20",
  secondary: "from-secondary/20",
  tertiary: "from-tertiary/20",
};

export function ProductDetailClient({ product }: { product: Product }) {
  const { name, price, series, image, imageAlt, badge, sizes, glowColor } = product;
  const { dispatch } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const hasStock = sizes.some((s) => s.inStock);
  const selectedSizeData = sizes.find((s) => s.label === selectedSize);
  const canProceed = !!selectedSize && !!selectedSizeData?.inStock;

  const handleAddToCart = () => {
    if (!canProceed) return;
    dispatch({ type: "ADD", product, size: selectedSize! });
    dispatch({ type: "TOGGLE" });
  };

  const handleBuyNow = () => {
    if (!canProceed) return;
    dispatch({ type: "ADD", product, size: selectedSize! });
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors mb-10 font-body text-sm group"
        >
          <Icon name="arrow_back" size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          Todos los productos
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image panel */}
          <div className="relative">
            {badge && (
              <div className="absolute top-4 left-4 z-20">
                <Badge variant={badge.color as "primary" | "secondary" | "tertiary"}>
                  {badge.text}
                </Badge>
              </div>
            )}
            <div className="relative h-[380px] md:h-[520px] bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10">
              <div
                className={cn(
                  "absolute inset-0 bg-radial to-transparent rounded-full blur-3xl scale-90 opacity-50",
                  glowClass[glowColor]
                )}
                aria-hidden="true"
              />
              <div className="relative w-full h-full z-10 p-8">
                <ProductImage src={image} alt={imageAlt} />
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-7">
            {/* Series label */}
            <p className="text-xs text-on-surface-variant font-body uppercase tracking-[0.25em]">
              {series}
            </p>

            {/* Name + price */}
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                {name}
              </h1>
              <p className="text-primary font-headline font-bold text-3xl mt-4">
                ${price > 0 ? price.toLocaleString() : "—"}
              </p>
            </div>

            {/* Stock status */}
            <div>
              {sizes.length === 0 ? (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant text-sm font-body">
                  <Icon name="schedule" size={14} />
                  Próximamente
                </span>
              ) : hasStock ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-body border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  En stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-body border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Agotado
                </span>
              )}
            </div>

            {/* Size selector */}
            {sizes.length > 0 && (
              <div>
                <p className="font-body text-xs text-on-surface-variant mb-3 uppercase tracking-wider">
                  {selectedSize ? `Talla seleccionada: ${selectedSize}` : "Selecciona tu talla"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => size.inStock && setSelectedSize(size.label)}
                      disabled={!size.inStock}
                      aria-pressed={selectedSize === size.label}
                      className={cn(
                        "relative px-4 py-2 rounded-xl border font-body text-sm transition-all duration-200",
                        !size.inStock &&
                          "opacity-35 cursor-not-allowed line-through decoration-on-surface-variant/50",
                        size.inStock &&
                          selectedSize !== size.label &&
                          "border-outline-variant/30 text-on-surface-variant hover:border-primary/60 hover:text-on-surface bg-surface-container",
                        selectedSize === size.label &&
                          "border-primary bg-primary/10 text-primary font-semibold shadow-[0_0_12px_rgba(255,145,89,0.2)]"
                      )}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
                {!selectedSize && hasStock && (
                  <p className="mt-3 text-xs text-on-surface-variant/60 font-body">
                    Debes seleccionar una talla para continuar
                  </p>
                )}
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 pt-1">
              <button
                onClick={handleAddToCart}
                disabled={!canProceed}
                className={cn(
                  "w-full py-4 rounded-full font-headline font-bold uppercase tracking-tight transition-all duration-200 active:scale-[0.98]",
                  canProceed
                    ? "bg-surface-container border-2 border-secondary text-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(0,227,253,0.15)]"
                    : "bg-surface-container border border-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed"
                )}
              >
                Añadir al carrito
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!canProceed}
                className={cn(
                  "w-full py-4 rounded-full font-headline font-bold uppercase tracking-tight transition-all duration-200 active:scale-[0.98]",
                  canProceed
                    ? "bg-primary text-on-primary-fixed hover:bg-primary-dim shadow-[0_8px_24px_rgba(255,145,89,0.3)] hover:shadow-[0_8px_32px_rgba(255,145,89,0.45)]"
                    : "bg-surface-container border border-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed"
                )}
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
