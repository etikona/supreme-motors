"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CarGrid = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/new_cars.json");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 rounded-xl p-6">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Premium Car Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.brand_name}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 relative">
                  {brand.brand_image && (
                    <Image
                      src={brand.brand_image}
                      alt={brand.brand_name}
                      fill
                      className="object-contain"
                      sizes="64px"
                      unoptimized={!brand.brand_image.startsWith("/")} // allow external URLs without Next optimization
                    />
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {brand.brand_name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGrid;
