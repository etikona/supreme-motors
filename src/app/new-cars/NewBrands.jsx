"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CarGrid = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/new-cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
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

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 rounded-xl p-6">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
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
          <Link
            key={brand.brand_name}
            href={`/brands/${encodeURIComponent(brand.brand_name)}`}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={brand.brand_image}
                  alt={brand.brand_name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={!brand.brand_image.startsWith("/")}
                />
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-900">
                {brand.brand_name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarGrid;
