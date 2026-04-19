"use client";

import { createContext, useContext, useReducer } from "react";
import type { Product } from "./data";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; productId: number }
  | { type: "TOGGLE" }
  | { type: "CLOSE" };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      return {
        ...state,
        isOpen: true,
        items: existing
          ? state.items.map((i) =>
              i.product.id === action.product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          : [...state.items, { product: action.product, quantity: 1 }],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.productId) };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
