// CategoryPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products=${categoryName}`) // example API
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [categoryName]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Category: {categoryName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer border rounded p-3"
          >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
