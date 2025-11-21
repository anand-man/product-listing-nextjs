import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { ProductCardTypes } from "./types/types";
import { Loader } from "./utilies/Loader";

async function getProducts() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseURL}/api/products`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return [];
    }
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="h-screen">
      <h1 className="mb-4 p-6 text-center text-3xl product-listing-title">
        Product Lists
      </h1>
      {products.length === 0 && <Loader />}
      {products && (
        <section className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: ProductCardTypes) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
