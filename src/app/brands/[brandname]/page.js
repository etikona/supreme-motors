"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BrandPage = () => {
  const params = useParams();
  const brandName = decodeURIComponent(params?.brandname); // Correctly decode
  console.log(brandName);
  const [brand, setBrand] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await fetch("/new_cars.json");
        const data = await response.json();
        const foundBrand = data.find(
          (b) => b.brand_name.toLowerCase() === brandName.toLowerCase()
        );
        setBrand(foundBrand);
      } catch (error) {
        console.error("Error fetching brand:", error);
      }
    };

    fetchBrand();
  }, [brandName]);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="mb-8">
        <Link href="/new-cars">
          <Button variant="ghost" className="mb-4">
            ← Back to Brands
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 relative">
            <Image
              src={brand.brand_image}
              alt={brand.brand_name}
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {brand.brand_name}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.models.map((model) => (
          <div
            key={model.model}
            onClick={() => setSelectedCar(model)}
            className="cursor-pointer bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
          >
            <div className="aspect-video relative">
              <Image
                src={model.image}
                alt={model.model}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {model.model}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-emerald-600">
                  {model.price}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {model.body_type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*! Dialog */}
      <Dialog open={!!selectedCar} onOpenChange={() => setSelectedCar(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCar && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedCar.model}
                </DialogTitle>
              </DialogHeader>

              <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.model}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-1">Price</h4>
                  <p className="text-lg font-semibold text-emerald-600">
                    {selectedCar.price}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-1">Body Type</h4>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedCar.body_type}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-1">Fuel Type</h4>
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedCar.car_type}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm text-gray-600 mb-1">Availability</h4>
                  <p className="text-lg font-semibold text-gray-900">
                    In Stock
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedCar.description}
              </p>

              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BrandPage;
