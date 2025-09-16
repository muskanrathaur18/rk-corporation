// ProductDetail.jsx (modified to flatten products, adapt to single image, use generalUse as description, and display all other fields as specifications)
import { useParams, Link } from "react-router-dom";
import data from "../product/Productdata.json"; // Assuming the JSON is imported as 'data' which is array of categories

export default function ProductDetail() {
  const { id } = useParams();
  
  // Flatten all products from categories
  const allProducts = data.flatMap(category => category.products || []);
  
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Adapt specifications: exclude certain keys and show the rest
  const excludedKeys = ['id', 'name', 'image', 'generalUse', 'productType', 'categoryId', 'categoryName'];
  const specifications = Object.fromEntries(
    Object.entries(product).filter(([key]) => !excludedKeys.includes(key))
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Single image instead of slider, as data has single 'image' */}
      <div className="mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-6">{product.generalUse || product.productType || 'No description available'}</p>

      <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {Object.entries(specifications).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {Array.isArray(value) ? value.join(', ') : value}
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
      >
        Back to Products
      </Link>
    </div>
  );
}