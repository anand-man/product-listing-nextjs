import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  console.log("###id", id);
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      console.error("Failed response:", res.status);
      return NextResponse.json(
        { error: "Failed to fetch product" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json(
      { error: "Unable to fetch product from FakeAPIStore" },
      { status: 500 }
    );
  }
}
