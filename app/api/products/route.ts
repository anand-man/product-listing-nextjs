export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/product");
    if (!res.ok) {
      return Response.json(
        {
          error: "Failed to fetch products",
        },
        {
          status: res.status,
        }
      );
    }
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      {
        error: "Unable to fetch products from FakeAPIStore",
      },
      {
        status: 500,
      }
    );
  }
}
