"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { Icon } from "@/components/Icon";

function generateOrderNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "ZZP-";
  for (let i = 0; i < 8; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const { items } = state;
  const [confirmed, setConfirmed] = useState(false);

  const orderNumber = useMemo(() => generateOrderNumber(), []);
  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const subtotal = items.reduce((s, { product, quantity }) => s + product.price * quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleConfirm = () => {
    setConfirmed(true);
    items.forEach(({ product, size }) => {
      dispatch({ type: "REMOVE", productId: product.id, size });
    });
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
            <Icon name="check_circle" size={48} className="text-green-400" />
          </div>
          <div>
            <h1 className="font-headline text-3xl font-black uppercase tracking-tight">
              ¡Pedido Confirmado!
            </h1>
            <p className="text-on-surface-variant font-body text-sm mt-3 leading-relaxed">
              Gracias por tu compra. Te contactaremos pronto con los detalles de tu envío.
            </p>
          </div>
          <div className="bg-surface-container rounded-xl px-6 py-3 border border-outline-variant/10 inline-block">
            <p className="font-headline text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-0.5">
              Número de pedido
            </p>
            <p className="font-headline font-bold text-primary text-sm">{orderNumber}</p>
          </div>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-tight py-3.5 px-10 rounded-full hover:bg-primary-dim transition-all active:scale-95 shadow-[0_8px_24px_rgba(255,145,89,0.3)]"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors mb-10 font-body text-sm group"
        >
          <Icon name="arrow_back" size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          Volver a la tienda
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-black uppercase tracking-tight">
            Resumen del pedido
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 mt-3 text-on-surface-variant text-xs font-body">
            <span>
              <span className="text-on-surface font-medium">Pedido:</span> {orderNumber}
            </span>
            <span className="capitalize">
              <span className="text-on-surface font-medium">Fecha:</span> {today}
            </span>
          </div>
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="bg-surface-container rounded-2xl p-12 text-center border border-outline-variant/10 space-y-4">
            <Icon name="shopping_cart" size={48} className="text-on-surface-variant mx-auto" />
            <p className="font-body text-on-surface-variant">No hay productos en tu cesta.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-headline font-bold uppercase text-sm tracking-wider hover:opacity-80 transition-opacity"
            >
              Explorar productos
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <>
            {/* Items table */}
            <div className="bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden mb-6">
              {/* Table header (desktop) */}
              <div className="hidden sm:grid grid-cols-[1fr_80px_56px_76px_80px] gap-4 px-6 py-3 bg-surface-container-highest border-b border-outline-variant/10 text-on-surface-variant text-[10px] font-body uppercase tracking-widest">
                <span>Producto</span>
                <span className="text-center">Talla</span>
                <span className="text-center">Cant.</span>
                <span className="text-right">Precio</span>
                <span className="text-right">Subtotal</span>
              </div>

              {items.map(({ product, quantity, size }, idx) => (
                <div
                  key={`${product.id}-${size ?? "ns"}-${idx}`}
                  className={cn(
                    "flex sm:grid sm:grid-cols-[1fr_80px_56px_76px_80px] gap-4 items-center px-6 py-4",
                    idx < items.length - 1 && "border-b border-outline-variant/10"
                  )}
                >
                  {/* Product info */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden">
                      {product.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full h-full object-contain p-1"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-headline font-bold text-sm uppercase truncate">
                        {product.name}
                      </p>
                      <p className="text-on-surface-variant text-xs font-body truncate">
                        {product.series}
                      </p>
                      {/* Mobile inline details */}
                      <div className="sm:hidden flex flex-wrap gap-2 mt-1 text-xs text-on-surface-variant font-body">
                        {size && <span>Talla: {size}</span>}
                        <span>×{quantity}</span>
                        <span className="text-primary font-bold">
                          ${(product.price * quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex justify-center text-sm font-body text-on-surface-variant">
                    {size ?? "—"}
                  </div>
                  <div className="hidden sm:flex justify-center text-sm font-body">
                    {quantity}
                  </div>
                  <div className="hidden sm:flex justify-end text-sm font-body text-on-surface-variant">
                    ${product.price.toLocaleString()}
                  </div>
                  <div className="hidden sm:flex justify-end text-sm font-headline font-bold text-primary">
                    ${(product.price * quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 space-y-3 mb-8">
              <div className="flex justify-between items-center text-sm font-body text-on-surface-variant">
                <span>Subtotal</span>
                <span className="text-on-surface">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-body text-on-surface-variant">
                <span>Envío estimado</span>
                <span className="text-on-surface">${shipping}</span>
              </div>
              <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
                <span className="font-headline font-bold uppercase tracking-tight text-sm">
                  Total
                </span>
                <span className="font-headline font-bold text-2xl text-primary">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Confirm */}
            <button
              onClick={handleConfirm}
              className="w-full bg-primary text-on-primary-fixed font-headline font-bold uppercase tracking-tight py-4 rounded-full hover:bg-primary-dim transition-all active:scale-95 shadow-[0_8px_24px_rgba(255,145,89,0.3)]"
            >
              Confirmar pedido
            </button>
          </>
        )}
      </div>
    </div>
  );
}
