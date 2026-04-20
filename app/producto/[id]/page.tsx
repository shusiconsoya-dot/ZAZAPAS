import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();
  return <ProductDetailClient product={product} />;
}
