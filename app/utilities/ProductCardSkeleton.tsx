export default function ProductCardSkeleton() {
  return (
    <div className=" rounded-lg p-4 animate-pulse">
      <div className="bg-gray-300 h-40 w-full mb-4 rounded"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}
