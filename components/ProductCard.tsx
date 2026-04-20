"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/Icon";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";

const glowClass: Record<Product["glowColor"], string> = {
  primary: "from-primary/10",
  secondary: "from-secondary/10",
  tertiary: "from-tertiary/10",
};

export function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const router = useRouter();
  const { id, name, price, series, image, imageAlt, rotateOnHover, glowColor, badge } = product;

  const handleCardClick = () => {
    router.push(`/producto/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "ADD", product });
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative bg-surface-container-high rounded-xl p-6 transition-all duration-500 ease-out hover:bg-surface-variant hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] border border-outline-variant/10 hover:border-outline-variant/25 cursor-pointer"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20">
          <Badge variant={badge.color as "primary" | "secondary" | "tertiary"}>{badge.text}</Badge>
        </div>
      )}

      {/* Product image */}
      <div className="relative h-64 mb-8">
        <div
          className={cn(
            "absolute inset-0 bg-radial to-transparent rounded-full blur-2xl scale-75",
            glowClass[glowColor]
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "relative w-full h-full z-10 scale-110 transition-transform duration-500",
            rotateOnHover === "cw" ? "group-hover:rotate-12" : "group-hover:-rotate-6"
          )}
        >
          <ProductImage src={image} alt={imageAlt} />
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-headline text-xl font-bold uppercase">{name}</h3>
          <span className="text-primary font-bold font-headline">${price}</span>
        </div>
        <p className="text-xs text-on-surface-variant font-body uppercase tracking-widest">
          {series}
        </p>
      </div>

      {/* Quick add to cart */}
      <button
        onClick={handleAddToCart}
        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:scale-110 active:scale-95"
        aria-label={`Añadir ${name} a la cesta`}
      >
        <Icon name="add" size={20} />
      </button>
    </article>
  );
}
