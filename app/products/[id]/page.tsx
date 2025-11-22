import ProductDetails from "../components/ProductDetails";

type Params = Promise<{ id: string }>;

export default async function ProductDetailsPage({
  params,
}: {
  params: Params;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/products/${id}`
  );

  if (!res.ok) {
    const errorData = await res.json();
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>{errorData.error}</p>
      </div>
    );
  }

  const product = await res.json();
  return <ProductDetails product={product} />;
}
