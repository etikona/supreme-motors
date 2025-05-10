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

import { CheckCircle, XCircle } from "lucide-react";
const BrandPage = () => {
  const params = useParams();
  const brandName = decodeURIComponent(params?.brandname); // Correctly decode

  const [brand, setBrand] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    if (!selectedCar) {
      setShowPayment(false);
      setPaymentStatus(null);
    }
  }, [selectedCar]);

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
        <DialogContent className="max-w-2xl rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 p-0 border-0">
          {selectedCar && (
            <div className="flex flex-col max-h-[90vh]">
              {/* Dialog inner scrollable content */}
              <div className="overflow-y-auto px-8 py-6 flex-1">
                {/* ✅ Payment Result State */}
                {paymentStatus ? (
                  <div className="text-center py-8 space-y-4">
                    {paymentStatus === "success" ? (
                      <>
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                        <h3 className="text-3xl font-bold text-gray-800">
                          Payment Successful!
                        </h3>
                        <p className="text-gray-600 text-sm">
                          You’ve purchased <strong>{selectedCar.model}</strong>.
                          Enjoy your ride!
                        </p>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                        <h3 className="text-3xl font-bold text-gray-800">
                          Payment Failed
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Oops! Something went wrong. Please try again.
                        </p>
                      </>
                    )}
                  </div>
                ) : showPayment ? (
                  <>
                    <DialogHeader className="mb-4 text-left">
                      <DialogTitle className="text-2xl text-gray-900">
                        Enter Payment Info
                      </DialogTitle>
                      <p className="text-sm text-gray-500">
                        We accept cards and test payments
                      </p>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <h4 className="font-semibold text-gray-700 mb-3">
                          Credit Card
                        </h4>
                        <input
                          placeholder="Card Number"
                          className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <input
                            placeholder="Expiry Date"
                            className="p-2 border rounded-lg"
                          />
                          <input
                            placeholder="CVC"
                            className="p-2 border rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <h4 className="font-semibold text-gray-700 mb-3">
                          Test Payment
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <Button
                            className="rounded-full bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => setPaymentStatus("success")}
                          >
                            Simulate Success
                          </Button>
                          <Button
                            className="rounded-full bg-red-500 hover:bg-red-600 text-white"
                            onClick={() => setPaymentStatus("error")}
                          >
                            Simulate Error
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Car Info */}
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gray-900">
                        {selectedCar.model}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="aspect-video relative rounded-xl overflow-hidden shadow mb-6">
                      <Image
                        src={selectedCar.image}
                        alt={selectedCar.model}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                      <div>
                        <p className="font-medium">
                          Price:
                          <span className="text-lg ml-2 font-semibold text-green-600">
                            {selectedCar.price}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Body Type:
                          <span className="text-sm ml-2">
                            {selectedCar.body_type}
                          </span>
                        </p>
                        <p className="font-medium">
                          Car Type:
                          <span className="text-sm ml-2">
                            {selectedCar.car_type}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <p>{selectedCar.description}</p>
                    </div>
                  </>
                )}
              </div>

              {/* ✅ Sticky footer buttons */}
              {/* ✅ Sticky Footer Buttons */}
              <div className="px-8 py-4 rounded-full  bg-white flex gap-4">
                {paymentStatus ? (
                  // After Payment (Success/Error)
                  <Button
                    className="w-full pb-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => {
                      setPaymentStatus(null);
                      setShowPayment(false);
                    }}
                  >
                    Close
                  </Button>
                ) : showPayment ? (
                  // Show Payment Screen Buttons
                  <>
                    <Button
                      className="w-1/2 rounded-full bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition"
                      onClick={() => setShowPayment(false)}
                    >
                      Back
                    </Button>
                    <Button
                      className="w-1/2 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => setPaymentStatus("success")}
                    >
                      Confirm Payment
                    </Button>
                  </>
                ) : (
                  // Default Buy Now Screen
                  <Button
                    className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => setShowPayment(true)}
                  >
                    Buy Now
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BrandPage;
