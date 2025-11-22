import Link from "next/link";
import ProductList from "./products/components/ProductLists";

const menuItems = [
  { id: 1, title: "Counter" },
  { id: 2, title: "Todos" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground h-screen">
      <header>
        <nav className="bg-gray-600 text-white font-semibold py-2 px-4">
          {menuItems.map((menu) => {
            const { id, title } = menu;
            return (
              <Link
                key={id}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-2"
                href="/counter"
              >
                <span>{title}</span>
              </Link>
            );
          })}
        </nav>
      </header>
      <h1 className="text-foreground mb-4 p-6 text-center text-3xl product-listing-title">
        Product Lists
      </h1>
      <ProductList />
    </main>
  );
}
