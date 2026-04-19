"use client";

import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

export function CartPanel() {
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  const count = items.reduce((s, { quantity }) => s + quantity, 0);
  const total = items.reduce((s, { product, quantity }) => s + product.price * quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => dispatch({ type: "CLOSE" })}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-[320px] z-[60] flex flex-col",
          "bg-surface-container-high border-l border-outline-variant/20",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Cesta de compra"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
          <div>
            <h2 className="font-headline font-bold text-lg uppercase tracking-tight text-on-surface">
              Tu Cesta
            </h2>
            <p className="text-on-surface-variant text-xs mt-0.5">
              {count} {count === 1 ? "producto" : "productos"}
            </p>
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE" })}
            className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-on-surface"
            aria-label="Cerrar cesta"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-on-surface-variant">
              <Icon name="shopping_cart" size={48} />
              <p className="font-body text-sm">Tu cesta está vacía</p>
              <p className="font-headline text-xs tracking-widest uppercase text-primary">
                En zaza, CALZA!
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-3 items-center bg-surface-container rounded-xl p-3 border border-outline-variant/10"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-headline font-bold text-sm uppercase truncate leading-tight">
                    {product.name}
                  </p>
                  <p className="text-on-surface-variant text-xs mt-1">${product.price}</p>
                  <p className="text-primary font-bold text-xs font-headline mt-0.5">
                    ×{quantity}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => dispatch({ type: "REMOVE", productId: product.id })}
                  className="p-1.5 rounded-full hover:bg-error/20 text-on-surface-variant hover:text-error transition-all flex-shrink-0"
                  aria-label={`Eliminar ${product.name}`}
                >
                  <Icon name="delete" size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-outline-variant/20 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-on-surface-variant text-sm">Total</span>
              <span className="font-headline font-bold text-2xl text-primary">
                ${total.toLocaleString()}
              </span>
            </div>
            <button className="w-full bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-tight py-4 rounded-full hover:bg-primary-dim transition-all active:scale-95 shadow-[0_8px_24px_rgba(255,145,89,0.3)]">
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
