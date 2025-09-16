import { Link } from "react-router-dom";
import data from "../product/Productdata.json";

export default function ProductList() {
  const allProducts = data.flatMap(category => category.products || []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in-down">
        Our Machines
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allProducts.map((product, index) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-md p-4 bg-white 
                       transition-all duration-300 ease-in-out 
                       hover:shadow-xl hover:-translate-y-2 
                       animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg 
                           transition-transform duration-500 ease-in-out 
                           hover:scale-110"
              />
            </div>
            
            <h2 className="text-xl font-semibold mt-3 transition-colors duration-300 hover:text-blue-600">
              {product.name}
            </h2>
            
            <p className="text-gray-600 text-sm line-clamp-2 mt-2">
              {product.generalUse || product.productType || 'No description available'}
            </p>
            
            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg 
                         transition-all duration-300 ease-in-out 
                         hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}