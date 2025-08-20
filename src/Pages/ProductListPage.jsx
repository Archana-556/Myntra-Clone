import { useParams, Link } from 'react-router-dom';
import products from '../data/Products';

export default function ProductListPage() {
  const { category, type } = useParams();

  const productList = products[category?.toLowerCase()]?.[type?.toLowerCase()] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">{type} for {category}</h2>

      {productList.length === 0 ? (
        <p className="text-gray-600">No products available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {productList.map(product => (
            <Link
              to={`/${category}/${type}/${product.id}`}
              key={product.id}
              className="p-4` rounded hover:shadow-md bg-white transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full  object-cover mb-2 rounded"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className='text-gray-600'>{product.name}</p>
              <p className="text-gray-600 mx-1">{product.price}<strike className='mx-1'>{product.oldprice}</strike><span className='text-pink-500'>{product.offer}</span></p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
