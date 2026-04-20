import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { CartBubble } from "@/components/CartBubble";
import { CartPanel } from "@/components/CartPanel";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAZAPAS | En zaza, CALZA!",
  description:
    "En zaza, CALZA! Zapatillas de alto rendimiento para los que van siempre un paso adelante.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-fixed antialiased`}
      >
        <CartProvider>
          <Navbar />
          <CartBubble />
          <CartPanel />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
