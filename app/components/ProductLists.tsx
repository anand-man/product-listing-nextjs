"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {products === null ? (
        <motion.section
          className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 9 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </motion.section>
      ) : products.length === 0 ? (
        <motion.p
          className="text-center mt-8 text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error || "No products found."}
        </motion.p>
      ) : (
        <motion.section
          className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
