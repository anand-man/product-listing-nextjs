"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProductCardTypes } from "../types/types";

export default function ProductCard({
  product,
}: {
  product: ProductCardTypes;
}) {
  const addToCartHandler = (title: string) => {
    alert(`${title} has been added to your cart1 :)`);
  };
  return (
    <motion.div
      className="bg-background dark:bg-gray-900 shadow-md rounded p-4 flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-label={`Product card for ${product.title}`}
    >
      <div className="px-4 pb-4">
        <figure className="w-full h-60">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={250}
            className="w-full h-48 object-contain"
          />
          <figcaption className="sr-only">{product.title}</figcaption>
        </figure>

        <h2 className="text-xl font-bold mt-4">{product.title}</h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 my-4">
          {product.description}
        </p>
      </div>
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
          onClick={() => addToCartHandler(product.title)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full transition-colors duration-300"
          aria-label={`View more details about ${product.title}`}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
