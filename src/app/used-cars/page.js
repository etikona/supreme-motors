"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const UsedCarGrid = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/used-cars");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching used cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBuyNow = (car) => {
    setSelectedCar(car);
    setPaymentStatus(null);
  };

  const handlePaymentClose = () => {
    setSelectedCar(null);
    setPaymentStatus(null);
  };

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 rounded-xl p-6">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
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
        Premium Used Cars Collection
      </h1>

      {/* Payment Dialog */}
      <Dialog open={!!selectedCar} onOpenChange={handlePaymentClose}>
        <DialogContent className="max-w-2xl bg-white">
          {selectedCar && (
            <>
              {paymentStatus ? (
                // Payment Status Screen
                <div className="text-center py-8 space-y-4">
                  {paymentStatus === "success" ? (
                    <>
                      <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto" />
                      <h3 className="text-2xl font-bold">
                        Payment Successful!
                      </h3>
                      <p className="text-gray-600">
                        Your purchase of {selectedCar.model} is complete.
                      </p>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-16 w-16 text-red-600 mx-auto" />
                      <h3 className="text-2xl font-bold">Payment Failed</h3>
                      <p className="text-gray-600">
                        Please try another payment method.
                      </p>
                    </>
                  )}
                  <Button className="w-full mt-6" onClick={handlePaymentClose}>
                    Close
                  </Button>
                </div>
              ) : (
                // Payment Form
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      Purchase {selectedCar.model}
                    </DialogTitle>
                    <DialogDescription>
                      Complete your payment details
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Car Details */}
                    <div className="space-y-4">
                      <div className="aspect-video relative">
                        <Image
                          src={selectedCar.image}
                          alt={selectedCar.model}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Price:</span>
                          <span className="font-semibold text-emerald-600">
                            {selectedCar.price}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kilometers:</span>
                          <span>{selectedCar.running_kilometers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Body Type:</span>
                          <span>{selectedCar.body_type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fuel Type:</span>
                          <span>{selectedCar.car_type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Form */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <input
                          placeholder="Card Number"
                          className="w-full p-3 border rounded-lg"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            placeholder="MM/YY"
                            className="p-3 border rounded-lg"
                          />
                          <input
                            placeholder="CVC"
                            className="p-3 border rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Button
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          onClick={() => setPaymentStatus("success")}
                        >
                          Confirm Payment
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handlePaymentClose}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="space-y-12">
        {brands.map((brand) => (
          <div
            key={brand.brand_name}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 relative">
                <Image
                  src={brand.brand_image}
                  alt={brand.brand_name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {brand.brand_name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.models.map((car) => (
                <div
                  key={`${brand.brand_name}-${car.model}`}
                  className="bg-gray-100 rounded-xl p-6 hover:shadow-2xl transition-all"
                >
                  <div className="aspect-video relative mb-4">
                    <Image
                      src={car.image}
                      alt={car.model}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {car.model}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium text-emerald-600">
                        {car.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kilometers:</span>
                      <span className="font-medium">
                        {car.running_kilometers}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Body Type:</span>
                      <span className="font-medium">{car.body_type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Type:</span>
                      <span className="font-medium">{car.car_type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {car.description}
                  </p>
                  <Button
                    className="w-full mt-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleBuyNow(car)}
                  >
                    Buy Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsedCarGrid;
