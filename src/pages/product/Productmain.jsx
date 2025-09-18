import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../product/Productdata.json";

export default function ProductList() {
  const allProducts = data.flatMap(category => category.products || []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-full py-2">
      <section className="h-96 max-w-7xl bg-gray-600"></section>
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4 md:p-8">
        {allProducts.map((product, index) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } hover:shadow-xl hover:-translate-y-1`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Image with industrial frame */}
            <div className="relative p-4 bg-gray-50 border-b">
              <div className="absolute rounded-lg z-0"></div>
              <div className="relative h-48 z-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
            </div>
        
            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <div className="bg-emerald-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                  In Stock
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                {product.generalUse || product.productType || 'Industrial equipment for professional use'}
              </p>
              
              {/* Specifications */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600">High Power</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600">Secure</span>
                </div>
              </div>
              
              {/* Action Button */}
              <Link
                to={`/product/${product.id}`}
                className="block text-center bg-gradient-to-r from-blue-700 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:from-blue-600 hover:to-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}