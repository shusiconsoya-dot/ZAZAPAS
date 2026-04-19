"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-on-surface-variant/30 font-headline text-xs uppercase tracking-widest text-center px-4">
          Imagen<br />próximamente
        </span>
      </div>
    );
  }

  if (src.startsWith("/")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className="w-full h-full object-contain"
        style={{ position: "absolute", inset: 0 }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      onError={() => setErrored(true)}
    />
  );
}
