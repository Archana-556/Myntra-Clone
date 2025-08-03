import { useParams } from 'react-router-dom';
import products from '../data/Products';

export default function ProductDetailsPage() {
  const { category, type, productId } = useParams();
  const product = products[category]?.[type]?.find(p => p.id === productId);

  if (!product) return <p className="p-6 text-red-500">Product not found.</p>;

  return (
    <div className="p-6 md:flex gap-8 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img src={product.image} alt={product.name} className="w-full rounded-md shadow" />
        <img src={product.image} alt={product.name} className="w-full rounded-md shadow" />
        <img src={product.image} alt={product.name} className="w-full rounded-md shadow" />
        <img src={product.image} alt={product.name} className="w-full rounded-md shadow" />
      </div>

      {/* Product Info Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-sm">Category: {type} | ID: {product.id}</p>
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold text-pink-600">{product.price}</p>
          <span className="text-gray-500 line-through">{product.oldprice}</span>
          <span className="text-green-600 text-sm font-medium">{product.offer}</span>
        </div>

        {/* Size Options (Fake Example) */}
        <div>
          <p className="font-medium mb-1">SELECT SIZE (UK):</p>
          <div className="flex gap-2 flex-wrap">
            {[6, 7, 8, 9, 10].map(size => (
              <button key={size} className="border px-3 py-1 rounded hover:bg-pink-600 hover:text-white">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag + Wishlist */}
        <div className="flex gap-4 mt-4">
          <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">ADD TO BAG</button>
          <button className="border px-6 py-2 rounded hover:bg-gray-100">❤️ WISHLIST</button>
        </div>

        {/* Product Description */}
        <div>
          <h2 className="font-semibold text-lg mt-6 mb-2">Product Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>

        {/* EMI & Delivery Options (Mock) */}
        <div className="text-sm mt-4">
          <h2 className="font-semibold mb-1">EMI & Delivery</h2>
          <p>EMI options available | Delivery in 3-5 days</p>
        </div>
      </div>
    </div>
  );
}
