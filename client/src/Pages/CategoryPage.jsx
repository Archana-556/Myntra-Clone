import { useParams, Link } from 'react-router-dom';
import products from '../data/Products';

export default function CategoryPage() {
  const { category } = useParams();
  const types = products[category.toLowerCase()]?.categories || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">{category} Category</h2>
      <div className="grid grid-cols-5 sm:grid-cols-2 p-0 md:grid-cols-6 gap-6">
        {types.map((type) => (
          <Link
            key={type.name}
            to={`/${category}/${type.name}`}
            className="hover:shadow-lg rounded bg-white text-center"
          >
            <img
              src={type.image}
              alt={type.name}
              className=" object-cover"
            />
            {/* <p className="font-semibold capitalize">{type.name}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
