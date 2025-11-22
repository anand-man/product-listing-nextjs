"use client";
import { ProductCardTypes } from "@/app/types/types";
import ProductCardSkeleton from "@/app/utilities/ProductCardSkeleton";
import Image from "next/image";

export default function ProductDetails({
  product,
}: {
  product: ProductCardTypes;
}) {
  const { id, title, image, price, description } = product;
  const addToCartHandler = () => {
    alert(`${title} has been added to your cart1 :)`);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="mt-3 text-lg">Product ID: {id}</p>
      {product ? (
        <>
          <h2 className="text-xl font-bold my-4">{product.title}</h2>
          <figure className="w-full h-60">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={200}
              className="w-auto h-60 object-contain"
            />
            <figcaption className="sr-only">{product.title}</figcaption>
          </figure>
          <p className="text-sm text-gray-600 dark:text-gray-300 my-4">
            {product.description}
          </p>
          <div className="actions mt-auto">
            <p className="mb-2 px-4">
              Price: ₹ {Math.floor((product.price || 0) * 85)}
            </p>
            <span className="w-full mb-2 text-gray-600 dark:text-gray-300 flex gap-2 px-4">
              <Image
                src={
                  "https://anand-man.github.io/reactSampleProject/build/static/media/star.93775e204faf261a5143.svg"
                }
                alt={"start icon"}
                width={10}
                height={10}
              />
              {product.rating?.count}/{product.rating?.rate}
            </span>
            <button
              onClick={addToCartHandler}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition-colors duration-300"
              aria-label={`View more details about ${product.title}`}
            >
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <ProductCardSkeleton />
      )}
    </div>
  );
}
