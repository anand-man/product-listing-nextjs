import { render, screen } from "@testing-library/react";
import { ProductCardTypes } from "../types/types";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  const product: ProductCardTypes = {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "This is testing of product",
    image: "/",
    rating: { count: 100, rate: 4.5 },
  };

  it("renders product description", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("This is testing of product")).toBeInTheDocument();
  });

  it("renders button with View More", () => {
    render(<ProductCard product={product} />);
    expect(
      screen.getByRole("button", { name: /view more/i })
    ).toBeInTheDocument();
  });
});
