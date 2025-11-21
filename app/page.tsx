import ProductList from "./components/ProductLists";

export default function Home() {
  return (
    <main className="bg-background text-foreground h-screen">
      <h1 className="text-foreground mb-4 p-6 text-center text-3xl product-listing-title">
        Product Lists
      </h1>
      <ProductList />
    </main>
  );
}
