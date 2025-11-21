"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardTypes } from "../types/types";
import ProductCardSkeleton from "../utilities/ProductCardSkeleton";

export default function ProductList() {
  const [products, setProducts] = useState<ProductCardTypes[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const baseURL =
          process.env.NEXT_PUBLIC_BASE_URL ||
          (typeof window !== "undefined" ? window.location.origin : "");
        const res = await fetch(`${baseURL}/api/products`, {
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (!res.ok) {
          setError(`${data.error}. Please try again.` as string);
          setProducts([]);
          return;
        }
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  if (products === null) {
    return (
      <section className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <>{error && <p className="text-center mt-8 text-red-500">{error}</p>}</>
    );
  }

  return (
    <section className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductCardTypes) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
