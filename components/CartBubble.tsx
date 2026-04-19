"use client";

import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/Icon";

export function CartBubble() {
  const { state, dispatch } = useCart();
  const count = state.items.reduce((s, { quantity }) => s + quantity, 0);

  return (
    <div className="fixed bottom-8 right-8 z-[50]">
      <button
        onClick={() => dispatch({ type: "TOGGLE" })}
        className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary-fixed shadow-[0_0_30px_rgba(255,145,89,0.4)] hover:scale-110 transition-transform active:scale-95"
        aria-label={`Abrir cesta — ${count} productos`}
      >
        <Icon name="shopping_cart" fill size={28} />

        {count > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-background text-[10px] font-bold flex items-center justify-center text-on-secondary select-none animate-fade-in">
            {count}
          </div>
        )}
      </button>
    </div>
  );
}
