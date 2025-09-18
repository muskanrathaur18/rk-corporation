// ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import data from "../product/Productdata.json";

export default function ProductDetail() {
  const { id } = useParams();

  // Flatten all products from categories
  const allProducts = data.flatMap((category) => category.products || []);

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-6">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Adapt specifications: exclude certain keys and show the rest
  const excludedKeys = [
    "id",
    "name",
    "image",
    "generalUse",
    "productType",
    "categoryId",
    "categoryName",
  ];
  const specifications = Object.fromEntries(
    Object.entries(product).filter(([key]) => !excludedKeys.includes(key))
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white  shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2 p-8 flex items-center justify-center">
            <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-fit transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 p-8 bg-gradient-to-b from-white to-blue-50">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-[#E11917] text-sm font-medium rounded-full">
                {product.productType || "Product"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-[#2457AA] mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.generalUse ||
                  product.productType ||
                  "No description available"}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-2 rounded-lg">
                    <span className="block text-sm font-medium text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="block text-gray-900 font-medium mt-1">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Link
                to="/productmain"
                className="flex items-center text-[#2457AA]"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
                Back to Products
              </Link>

              <Link to="/contact" className="px-6 py-3 bg-[#2457AA] text-white font-medium rounded-lg flex items-center">
                
                Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
